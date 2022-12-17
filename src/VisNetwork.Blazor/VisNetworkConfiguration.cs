using Microsoft.Extensions.DependencyInjection;

namespace VisNetwork.Blazor;

public static class VisNetworkConfiguration
{
    public static IServiceCollection AddVisNetwork(this IServiceCollection services)
    {
        services.AddSingleton<IVersionProvider, VersionProvider>();
        services.AddScoped<IJSModule, JSModule>();
        return services;
    }
}
