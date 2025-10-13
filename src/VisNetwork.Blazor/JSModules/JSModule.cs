using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using VisNetwork.Blazor.Models;

namespace VisNetwork.Blazor;

internal interface IJSModule
{
    // Gloabl
    ValueTask CreateNetwork(ElementReference element, DotNetObjectReference<Network> component, NetworkOptions options, INetworkData data);
    ValueTask Destroy(ElementReference element);
    ValueTask SetSize(ElementReference element, DotNetObjectReference<Network> component, string width, string height);
    ValueTask SetOptions(ElementReference element, DotNetObjectReference<Network> component, NetworkOptions options);
    ValueTask SetData(ElementReference element, DotNetObjectReference<Network> component, INetworkData data);
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
    ValueTask SelectEdges(ElementReference element, DotNetObjectReference<Network> component, string[] edgeIds);
    ValueTask SelectNodes(ElementReference element, DotNetObjectReference<Network> component, string[] nodeIds);
    ValueTask SetSelection(ElementReference element, DotNetObjectReference<Network> component, NodeEdgeComposite composite);
    ValueTask<NodeEdgeComposite> UnselectAll(ElementReference element, DotNetObjectReference<Network> component);

    ValueTask ParseDOTNetwork(ElementReference element, string dotString);

    // Manipulation
    ValueTask EnableEditMode(ElementReference element, DotNetObjectReference<Network> component);
    ValueTask DisableEditMode(ElementReference element, DotNetObjectReference<Network> component);
    ValueTask AddNodeMode(ElementReference element, DotNetObjectReference<Network> component);
    ValueTask AddEdgeMode(ElementReference element, DotNetObjectReference<Network> component);
    ValueTask DeleteSelected(ElementReference element, DotNetObjectReference<Network> component);

    // Information
    ValueTask<IDictionary<string, Position>> GetPositions(ElementReference element, DotNetObjectReference<Network> component, string[] nodeIds);
    ValueTask<Position> GetPosition(ElementReference element, DotNetObjectReference<Network> component, string nodeId);
    ValueTask<BoundingBox> GetBoundingBox(ElementReference element, DotNetObjectReference<Network> component, string nodeId);
    ValueTask<string[]> GetConnectedEdges(ElementReference element, DotNetObjectReference<Network> component, string nodeId);
}

internal partial class JSModule : IJSModule
{
    // Gloabl
    public ValueTask CreateNetwork(ElementReference element, DotNetObjectReference<Network> component, NetworkOptions options, INetworkData data) =>
        InvokeVoidAsync("create", element, component, SerializeIgnoreNull(options), SerializeIgnoreNull(data));

    public ValueTask Destroy(ElementReference element)
    {
        if (isAsyncDisposed || moduleTask == null)
        {
            return ValueTask.CompletedTask;
        }

        return InvokeVoidAsync("destroy", element);
    }

    public ValueTask SetData(ElementReference element, DotNetObjectReference<Network> component, INetworkData data) =>
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

    public ValueTask SelectEdges(ElementReference element, DotNetObjectReference<Network> component, string[] edgeIds) =>
        InvokeVoidAsync("selectEdges", element, edgeIds);

    public ValueTask SelectNodes(ElementReference element, DotNetObjectReference<Network> component, string[] nodeIds) =>
        InvokeVoidAsync("selectNodes", element, nodeIds);

    public ValueTask SetSelection(ElementReference element, DotNetObjectReference<Network> component, NodeEdgeComposite composite) =>
        InvokeVoidAsync("setSelection", element, composite);

    public ValueTask<NodeEdgeComposite> UnselectAll(ElementReference element, DotNetObjectReference<Network> component) =>
        InvokeAsync<NodeEdgeComposite>("unselectAll", element);

    public ValueTask ParseDOTNetwork(ElementReference element, string dotString) =>
        InvokeVoidAsync("populateDotNetwork", element, dotString);

    // Manipulation
    public ValueTask EnableEditMode(ElementReference element, DotNetObjectReference<Network> component) =>
        InvokeVoidAsync("enableEditMode", element);

    public ValueTask DisableEditMode(ElementReference element, DotNetObjectReference<Network> component) =>
        InvokeVoidAsync("disableEditMode", element);

    public ValueTask AddNodeMode(ElementReference element, DotNetObjectReference<Network> component) =>
        InvokeVoidAsync("addNodeMode", element);

    public ValueTask AddEdgeMode(ElementReference element, DotNetObjectReference<Network> component) =>
        InvokeVoidAsync("addEdgeMode", element);

    public ValueTask DeleteSelected(ElementReference element, DotNetObjectReference<Network> component) =>
        InvokeVoidAsync("deleteSelected", element);

    // Information
    public ValueTask<IDictionary<string, Position>> GetPositions(ElementReference element, DotNetObjectReference<Network> component, string[] nodeIds) =>
        InvokeAsync<IDictionary<string, Position>>("getPositions", element, nodeIds);

    public ValueTask<Position> GetPosition(ElementReference element, DotNetObjectReference<Network> component, string nodeId) =>
        InvokeAsync<Position>("getPosition", element, nodeId);

    public ValueTask<BoundingBox> GetBoundingBox(ElementReference element, DotNetObjectReference<Network> component, string nodeId) =>
        InvokeAsync<BoundingBox>("getBoundingBox", element, nodeId);

    public ValueTask<string[]> GetConnectedEdges(ElementReference element, DotNetObjectReference<Network> component, string nodeId) =>
        InvokeAsync<string[]>("getConnectedEdges", element, nodeId);

    private static readonly JsonSerializerOptions JsonSerializerOptions = new()
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
