using Microsoft.JSInterop;
using System;
using System.Threading.Tasks;

namespace VisNetwork.Blazor;

internal partial class JSModule : IAsyncDisposable
{
    private readonly IJSRuntime jsRuntime;
    private readonly IVersionProvider versionProvider;
    private readonly IJsFilePathProvider jsFilePathProvider;

    private Task<IJSObjectReference>? moduleTask;
    private bool isAsyncDisposed;

    public JSModule(IJSRuntime jsRuntime, IVersionProvider versionProvider, IJsFilePathProvider jsFilePathProvider)
    {
        this.jsRuntime = jsRuntime;
        this.versionProvider = versionProvider;
        this.jsFilePathProvider = jsFilePathProvider;
    }

    private Task<IJSObjectReference> Module => moduleTask ??= jsRuntime.InvokeAsync<IJSObjectReference>("import", ModuleFileName).AsTask();

    public string ModuleFileName => $"{jsFilePathProvider.GetJsPath()}?v={versionProvider.Version}";

    private async ValueTask InvokeVoidAsync(string identifier, params object[] args)
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

    private async ValueTask<TValue> InvokeAsync<TValue>(string identifier, params object[] args)
    {
        try
        {
            var module = await Module;

            if (isAsyncDisposed)
            {
                return default!;
            }

            return await module.InvokeAsync<TValue>(identifier, args);
        }
        catch (Exception exception) when (exception is JSDisconnectedException or ObjectDisposedException or TaskCanceledException)
        {
            return default!;
        }
    }

    public ValueTask DisposeAsync() => DisposeAsync(true);

    private async ValueTask DisposeAsync(bool disposing)
    {
        try
        {
            if (!isAsyncDisposed)
            {
                isAsyncDisposed = true;

                if (disposing && moduleTask != null)
                {
                    var moduleInstance = await moduleTask;
                    var disposableTask = moduleInstance.DisposeAsync();

                    try
                    {
                        await disposableTask;
                    }
                    catch when (disposableTask.IsCanceled)
                    {
                        // Ignore
                    }
                    catch (JSDisconnectedException)
                    {
                        // Ignore
                    }

                    moduleTask = null;
                }
            }
        }
        catch (Exception exception)
        {
            await Task.FromException(exception);
        }
    }
}
