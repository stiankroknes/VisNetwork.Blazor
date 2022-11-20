using Bunit;
using Microsoft.Extensions.DependencyInjection;

namespace VisNetwork.Blazor.Tests;

public class VisNetworkConfig
{
    public static void AddVisNetwork(TestServiceProvider services)
    {
        services.AddSingleton<IVersionProvider, VersionProvider>();
        services.AddSingleton<IJSModule, JSModule>();
    }

    internal class VersionProvider : IVersionProvider
    {
        public string Version => string.Empty;
    }
}
