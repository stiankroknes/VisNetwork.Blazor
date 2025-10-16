using Microsoft.Extensions.DependencyInjection;

namespace VisNetwork.Blazor.Tests;

internal static class VisNetworkConfig
{
    public static void AddVisNetwork(BunitServiceProvider services)
    {
        services.AddSingleton<IVersionProvider, DummyVersionProvider>();
        services.AddScoped<IJSModule, JSModule>();
    }

    internal sealed class DummyVersionProvider : IVersionProvider
    {
        public string Version => string.Empty;
    }
}
