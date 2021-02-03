using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;
using System.Threading.Tasks;

namespace VisNetwork.Blazor.Models
{
    public static class VisNetworkInterop
    {
        private const string VisNetworkInteropName = "BlazorVisNetwork";

        // Gloabl
        public static ValueTask CreateNetwork(this IJSRuntime jsRuntime, ElementReference element, DotNetObjectReference<Network> component, NetworkOptions options, NetworkData data) =>
            jsRuntime.InvokeVoidAsync($"{VisNetworkInteropName}.create", element, component, SerializeIgnoreNull(options), SerializeIgnoreNull(data));

        public static ValueTask SetData(this IJSRuntime jsRuntime, ElementReference element, DotNetObjectReference<Network> component, NetworkData data) =>
            jsRuntime.InvokeVoidAsync($"{VisNetworkInteropName}.setData", element, data);

        public static ValueTask Redraw(this IJSRuntime jsRuntime, ElementReference element, DotNetObjectReference<Network> component) =>
            jsRuntime.InvokeVoidAsync($"{VisNetworkInteropName}.redraw", element);

        public static ValueTask SetEventListener(this IJSRuntime jsRuntime, ElementReference element, DotNetObjectReference<Network> component, string eventName) =>
            jsRuntime.InvokeVoidAsync($"{VisNetworkInteropName}.on", element, component, eventName);

        public static ValueTask RemoveEventListener(this IJSRuntime jsRuntime, ElementReference element, DotNetObjectReference<Network> component, string eventName) =>
            jsRuntime.InvokeVoidAsync($"{VisNetworkInteropName}.off", element, component, eventName);

        // Clustering
        public static ValueTask ClusterOutliers(this IJSRuntime jsRuntime, ElementReference element, DotNetObjectReference<Network> component) =>
            jsRuntime.InvokeVoidAsync($"{VisNetworkInteropName}.clusterOutliers", element, component);

        // Selection

        public static ValueTask<string[]> GetSelectedNodes(this IJSRuntime jsRuntime, ElementReference element, DotNetObjectReference<Network> component) =>
            jsRuntime.InvokeAsync<string[]>($"{VisNetworkInteropName}.getSelectedNodes", element);

        public static ValueTask<string[]> SelectNodes(this IJSRuntime jsRuntime, ElementReference element, DotNetObjectReference<Network> component, string[] nodeIds) =>
            jsRuntime.InvokeAsync<string[]>($"{VisNetworkInteropName}.selectNodes", element, nodeIds);

        public static ValueTask<string[]> GetSelectedEdges(this IJSRuntime jsRuntime, ElementReference element, DotNetObjectReference<Network> component) =>
            jsRuntime.InvokeAsync<string[]>($"{VisNetworkInteropName}.getSelectedEdges", element);

        public static ValueTask<string[]> SelectEdges(this IJSRuntime jsRuntime, ElementReference element, DotNetObjectReference<Network> component, string[] edgeIds) =>
            jsRuntime.InvokeAsync<string[]>($"{VisNetworkInteropName}.selectEdges", element, edgeIds);

        public static ValueTask<NodeEdgeComposite> SetSelection(this IJSRuntime jsRuntime, ElementReference element, DotNetObjectReference<Network> component, NodeEdgeComposite composite) =>
            jsRuntime.InvokeAsync<NodeEdgeComposite>($"{VisNetworkInteropName}.setSelection", element, composite);

        public static ValueTask<NodeEdgeComposite> GetSelection(this IJSRuntime jsRuntime, ElementReference element, DotNetObjectReference<Network> component) =>
            jsRuntime.InvokeAsync<NodeEdgeComposite>($"{VisNetworkInteropName}.getSelection", element);
            
        public static ValueTask<NodeEdgeComposite> UnselectAll(this IJSRuntime jsRuntime, ElementReference element, DotNetObjectReference<Network> component) =>
            jsRuntime.InvokeAsync<NodeEdgeComposite>($"{VisNetworkInteropName}.unselectAll", element);

        private static JsonElement SerializeIgnoreNull<T>(T instance)
        {
            var jsonSerializerOptions = new JsonSerializerOptions
            {
                IgnoreNullValues = true,
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            };

            var instanceJson = JsonSerializer.Serialize(instance, jsonSerializerOptions);
            return JsonSerializer.Deserialize<JsonElement>(instanceJson);
        }
    }
}