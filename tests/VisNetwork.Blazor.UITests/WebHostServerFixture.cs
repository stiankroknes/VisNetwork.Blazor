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
using Serilog.Events;
using System.Runtime.ExceptionServices;
using Xunit.Abstractions;

namespace VisNetwork.Blazor.UITests;

[CollectionDefinition("WebHostServerCollection")]
public class WebHostServerCollectionDefinition : ICollectionFixture<BlazorWebAssemblyWebHostFixture>
{
    // This class has no code, and is never created. Its purpose is simply
    // to be the place to apply [CollectionDefinition] and all the
    // ICollectionFixture<> interfaces.
}

public abstract class WebHostServerFixture : IDisposable
{
    private readonly Lazy<Uri> rootUriInitializer;

    public Uri RootUri => rootUriInitializer.Value;

    public IHost Host { get; set; } = default!;

    protected WebHostServerFixture()
    {
        rootUriInitializer = new Lazy<Uri>(() => new Uri(StartAndGetRootUri()));
    }

    protected static void RunInBackgroundThread(Action action)
    {
        using var isDone = new ManualResetEvent(false);

        ExceptionDispatchInfo edi = null!;

        new Thread(() =>
        {
            try
            {
                action();
            }
            catch (Exception ex)
            {
                edi = ExceptionDispatchInfo.Capture(ex);
            }

            isDone.Set();
        }).Start();

        if (!isDone.WaitOne(TimeSpan.FromSeconds(10)))
        {
            throw new TimeoutException("Timed out waiting for: " + action);
        }

        if (edi != null)
        {
            throw edi.SourceException;
        }
    }

    protected virtual string StartAndGetRootUri()
    {
        Host = CreateWebHost();

        RunInBackgroundThread(Host.Start);

        return Host.Services.GetRequiredService<IServer>().Features
            .Get<IServerAddressesFeature>()!
            .Addresses.Single();
    }

    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }

    protected virtual void Dispose(bool disposing)
    {
        if (disposing)
        {
            Host?.Dispose();
            Host?.StopAsync();
        }
    }

    protected abstract IHost CreateWebHost();
}

public class BlazorWebAssemblyWebHostFixture : WebHostServerFixture
{
    private readonly IMessageSink messageSink;

    public BlazorWebAssemblyWebHostFixture(IMessageSink messageSink) : base()
    {
        this.messageSink = messageSink;
    }

    protected override IHost CreateWebHost()
    {
        var serilogLogger = new LoggerConfiguration()
            .MinimumLevel.Verbose()
            .WriteTo.TestOutput(messageSink, LogEventLevel.Verbose)
            .CreateLogger();

        return new HostBuilder()
            .ConfigureHostConfiguration(config =>
            {
                // Make UseStaticWebAssets work
                var applicationPath = typeof(Sample.App).Assembly.Location;
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
                .UseSolutionRelativeContentRoot(Path.Combine("sample", typeof(Sample.App).Assembly.GetName().Name!))
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
                    {
                        endpoints.MapFallbackToFile("index.html");
                    });
                }))
            .Build();
    }
}
