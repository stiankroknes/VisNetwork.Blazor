using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Hosting.Server.Features;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Serilog;
using Xunit.Sdk;

namespace VisNetwork.Blazor.UITests;

[CollectionDefinition("CombinedTestCollection")]
public class CombinedTestCollection : ICollectionFixture<BlazorWebAssemblyWebHostFixture>, ICollectionFixture<PlaywrightFixture>
{
    // No code needed; just for fixture registration.
}

public sealed class BlazorWebAssemblyWebHostFixture : IDisposable // IAsyncDisposable
{
    private readonly Lazy<Uri> rootUriInitializer;
    private readonly IMessageSink messageSink;

    public Uri RootUri => rootUriInitializer.Value;

    public IHost Host { get; set; } = default!;

    public BlazorWebAssemblyWebHostFixture(IMessageSink messageSink)
    {
        this.messageSink = messageSink;
        rootUriInitializer = new Lazy<Uri>(() => new Uri(StartAndGetRootUri()));
    }

    private string StartAndGetRootUri()
    {
        Host = CreateWebHost();

        Host.Start();

        return Host.Services.GetRequiredService<IServer>().Features
            .Get<IServerAddressesFeature>()!
            .Addresses.Single();
    }

    private static IHost CreateWebHost()
    {
        var serilogLogger = new LoggerConfiguration()
            .MinimumLevel.Verbose()
            //.WriteTo.TestOutput(messageSink, LogEventLevel.Verbose)
            .CreateLogger();

        return new HostBuilder()
            .ConfigureHostConfiguration(config =>
            {
                // Make UseStaticWebAssets work
                var applicationPath = typeof(Wasm.App).Assembly.Location;
                var applicationDirectory = Path.GetDirectoryName(applicationPath);

                var name = Path.ChangeExtension(applicationPath, ".staticwebassets.runtime.json");
                var inMemoryConfiguration = new Dictionary<string, string>
                {
                    [WebHostDefaults.StaticWebAssetsKey] = name,
                };

                config.AddInMemoryCollection(inMemoryConfiguration!);
            })
            .ConfigureWebHost(webHostBuilder => webHostBuilder
                .UseKestrel()
                .UseSolutionRelativeContentRoot(Path.Combine("sample", typeof(Wasm.App).Assembly.GetName().Name!))
                .UseStaticWebAssets()
                .UseUrls($"http://127.0.0.1:0") // :0 allows to choose a port automatically
                .ConfigureServices(services =>
                {
                    services.AddSingleton<ILoggerFactory>(new LoggerFactory().AddSerilog(serilogLogger, dispose: true));
                    services.AddSingleton(typeof(ILogger<>), typeof(Logger<>));
                    services.AddRouting();
                })
                .Configure(app =>
                {
                    app.UseDeveloperExceptionPage();
                    app.UseBlazorFrameworkFiles();
                    app.UseStaticFiles(new StaticFileOptions
                    {
                        ServeUnknownFileTypes = true,
                    });

                    app.UseRouting();

                    app.UseEndpoints(endpoints =>
                        endpoints.MapFallbackToFile("index.html")
                        );
                }))
            .Build();
    }

    void IDisposable.Dispose()
    {
        if (Host is not null)
        {
            Host.StopAsync();
            Host.Dispose();
        }
    }
}
