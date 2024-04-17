using Bunit;
using Microsoft.Extensions.DependencyInjection;

namespace VisNetwork.Blazor.Tests;

public class VisNetworkConfig
{
    public static void AddVisNetwork(TestServiceProvider services)
    {
        services.AddSingleton<IVersionProvider, DummyVersionProvider>();
        services.AddSingleton<IJsFilePathProvider, DummyJsFilePathProvider>();
        services.AddScoped<IJSModule, JSModule>();
    }

    internal sealed class DummyVersionProvider : IVersionProvider
    {
        public string Version => string.Empty;
    }

    internal sealed class DummyJsFilePathProvider : IJsFilePathProvider
    {
        public string GetJsPath()
        {
            return "./_content/VisNetwork.Blazor/BlazorVisNetwork.js";
        }
    }
}
