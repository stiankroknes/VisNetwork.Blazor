using Microsoft.Extensions.DependencyInjection;
using System.Runtime.CompilerServices;

[assembly: InternalsVisibleTo("VisNetwork.Blazor.Tests")]

namespace VisNetwork.Blazor;

public static class VisNetworkConfiguration
{
    public static IServiceCollection AddVisNetwork(this IServiceCollection services)
    {
        services.AddSingleton<IVersionProvider, VersionProvider>();
        services.AddSingleton<IJsFilePathProvider, JsFilePathProvider>();
        services.AddScoped<IJSModule, JSModule>();
        return services;
    }
}
