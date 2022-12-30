using Bunit;
using Microsoft.Extensions.DependencyInjection;

namespace VisNetwork.Blazor.Tests;

public class VisNetworkConfig
{
    public static void AddVisNetwork(TestServiceProvider services)
    {
        services.AddSingleton<IVersionProvider, DummyVersionProvider>();
        services.AddScoped<IJSModule, JSModule>();
    }

    internal class DummyVersionProvider : IVersionProvider
    {
        public string Version => string.Empty;
    }
}
