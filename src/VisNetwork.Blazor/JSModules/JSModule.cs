using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using VisNetwork.Blazor.Models;

namespace VisNetwork.Blazor;

internal interface IJSModule
{
    // Gloabl
    ValueTask CreateNetwork(ElementReference element, DotNetObjectReference<Network> component, NetworkOptions options, NetworkData data);
    ValueTask Destroy(ElementReference element);
    ValueTask SetSize(ElementReference element, DotNetObjectReference<Network> component, string width, string height);
    ValueTask SetOptions(ElementReference element, DotNetObjectReference<Network> component, NetworkOptions options);
    ValueTask SetData(ElementReference element, DotNetObjectReference<Network> component, NetworkData data);
    ValueTask SetEventListener(ElementReference element, DotNetObjectReference<Network> component, string eventName);
    ValueTask RemoveEventListener(ElementReference element, DotNetObjectReference<Network> component, string eventName);

    // Canvas
    ValueTask Redraw(ElementReference element, DotNetObjectReference<Network> component);

    // Clustering
    ValueTask ClusterOutliers(ElementReference element, DotNetObjectReference<Network> component);

    // Selection
    ValueTask<string[]> GetSelectedEdges(ElementReference element, DotNetObjectReference<Network> component);
    ValueTask<string[]> GetSelectedNodes(ElementReference element, DotNetObjectReference<Network> component);
    ValueTask<NodeEdgeComposite> GetSelection(ElementReference element, DotNetObjectReference<Network> component);
    ValueTask<string[]> SelectEdges(ElementReference element, DotNetObjectReference<Network> component, string[] edgeIds);
    ValueTask<string[]> SelectNodes(ElementReference element, DotNetObjectReference<Network> component, string[] nodeIds);
    ValueTask<NodeEdgeComposite> SetSelection(ElementReference element, DotNetObjectReference<Network> component, NodeEdgeComposite composite);
    ValueTask<NodeEdgeComposite> UnselectAll(ElementReference element, DotNetObjectReference<Network> component);
    ValueTask<string> ParseDOTNetwork(string dotString);
}

internal partial class JSModule : IJSModule
{
    // Gloabl
    public ValueTask CreateNetwork(ElementReference element, DotNetObjectReference<Network> component, NetworkOptions options, NetworkData data) =>
        InvokeVoidAsync("create", element, component, SerializeIgnoreNull(options), SerializeIgnoreNull(data));

    public ValueTask Destroy(ElementReference element)
    {
        if (isAsyncDisposed || moduleTask == null)
        {
            return ValueTask.CompletedTask;
        }

        return InvokeVoidAsync("destroy", element);
    }

    public ValueTask SetData(ElementReference element, DotNetObjectReference<Network> component, NetworkData data) =>
        InvokeVoidAsync("setData", element, SerializeIgnoreNull(data));

    public ValueTask SetEventListener(ElementReference element, DotNetObjectReference<Network> component, string eventName) =>
        InvokeVoidAsync("on", element, component, eventName);

    public ValueTask SetOptions(ElementReference element, DotNetObjectReference<Network> component, NetworkOptions options) =>
        InvokeVoidAsync("setOptions", element, SerializeIgnoreNull(options));

    public ValueTask RemoveEventListener(ElementReference element, DotNetObjectReference<Network> component, string eventName) =>
        InvokeVoidAsync("off", element, component, eventName);

    public ValueTask SetSize(ElementReference element, DotNetObjectReference<Network> component, string width, string height) =>
        InvokeVoidAsync("setSize", element, width, height);

    // Canvas
    public ValueTask Redraw(ElementReference element, DotNetObjectReference<Network> component) =>
        InvokeVoidAsync("redraw", element);

    // Clustering
    public ValueTask ClusterOutliers(ElementReference element, DotNetObjectReference<Network> component) =>
        InvokeVoidAsync("clusterOutliers", element, component);

    // Selection
    public ValueTask<string[]> GetSelectedEdges(ElementReference element, DotNetObjectReference<Network> component) =>
        InvokeAsync<string[]>("getSelectedEdges", element);

    public ValueTask<string[]> GetSelectedNodes(ElementReference element, DotNetObjectReference<Network> component) =>
        InvokeAsync<string[]>("getSelectedNodes", element);

    public ValueTask<NodeEdgeComposite> GetSelection(ElementReference element, DotNetObjectReference<Network> component) =>
        InvokeAsync<NodeEdgeComposite>("getSelection", element);

    public ValueTask<string[]> SelectEdges(ElementReference element, DotNetObjectReference<Network> component, string[] edgeIds) =>
        InvokeAsync<string[]>("selectEdges", element, edgeIds);

    public ValueTask<string[]> SelectNodes(ElementReference element, DotNetObjectReference<Network> component, string[] nodeIds) =>
        InvokeAsync<string[]>("selectNodes", element, nodeIds);

    public ValueTask<NodeEdgeComposite> SetSelection(ElementReference element, DotNetObjectReference<Network> component, NodeEdgeComposite composite) =>
        InvokeAsync<NodeEdgeComposite>("setSelection", element, composite);

    public ValueTask<NodeEdgeComposite> UnselectAll(ElementReference element, DotNetObjectReference<Network> component) =>
        InvokeAsync<NodeEdgeComposite>("unselectAll", element);

    public ValueTask<string> ParseDOTNetwork(string dotString) =>
        InvokeAsync<string>("parseDotNetwork", dotString);


    private static readonly JsonSerializerOptions JsonSerializerOptions = new JsonSerializerOptions
    {
        DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
    };

    private static JsonElement SerializeIgnoreNull<T>(T instance)
    {
        var instanceJson = JsonSerializer.Serialize(instance, JsonSerializerOptions);
        return JsonSerializer.Deserialize<JsonElement>(instanceJson);
    }
}
