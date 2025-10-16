using Microsoft.JSInterop;

namespace VisNetwork.Blazor;

internal partial class JSModule(IJSRuntime jsRuntime, IVersionProvider versionProvider) : IAsyncDisposable
{
    private readonly IJSRuntime jsRuntime = jsRuntime;
    private readonly IVersionProvider versionProvider = versionProvider;

    private Task<IJSObjectReference>? moduleTask;
    private bool isAsyncDisposed;

    private Task<IJSObjectReference> Module => moduleTask ??= jsRuntime.InvokeAsync<IJSObjectReference>("import", ModuleFileName).AsTask();

    public string ModuleFileName => $"./_content/VisNetwork.Blazor/BlazorVisNetwork.js?v={versionProvider.Version}";

    private async ValueTask InvokeVoidAsync(string identifier, params object?[]? args)
    {
        try
        {
            var module = await Module;

            if (isAsyncDisposed)
            {
                return;
            }

            await module.InvokeVoidAsync(identifier, args);
        }
        catch (Exception exception) when (exception is JSDisconnectedException or ObjectDisposedException or TaskCanceledException)
        {
            // ignored
        }
    }

    private async ValueTask<TValue> InvokeAsync<TValue>(string identifier, params object?[]? args)
    {
        try
        {
            var module = await Module;

            return isAsyncDisposed
                ? default!
                : await module.InvokeAsync<TValue>(identifier, args);
        }
        catch (Exception exception) when (exception is JSDisconnectedException or ObjectDisposedException or TaskCanceledException)
        {
            return default!;
        }
    }

    public ValueTask DisposeAsync() => DisposeAsync(true);

    private async ValueTask DisposeAsync(bool disposing)
    {
        if (!isAsyncDisposed)
        {
            isAsyncDisposed = true;

            if (disposing && moduleTask is not null)
            {
                var moduleInstance = await moduleTask;

                try
                {
                    await moduleInstance.DisposeAsync().ConfigureAwait(false);
                }
                catch (JSDisconnectedException)
                {
                    // Per https://learn.microsoft.com/aspnet/core/blazor/javascript-interoperability/?view=aspnetcore-7.0#javascript-interop-calls-without-a-circuit
                    // this is one of the calls that will fail if the circuit is disconnected, and we just need to catch the exception so it doesn't pollute the logs
                }

                moduleTask = null;
            }
        }

    }
}
