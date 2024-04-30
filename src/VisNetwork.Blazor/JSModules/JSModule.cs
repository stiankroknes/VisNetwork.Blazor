using System.Collections.Generic;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using VisNetwork.Blazor.Models;

namespace VisNetwork.Blazor;

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

    public ValueTask ParseDOTNetwork(ElementReference element, string dotString) =>
        InvokeVoidAsync("populateDotNetwork", element, dotString);

    // Manipulation
    public ValueTask<NodeEdgeComposite> AddNode(ElementReference element, DotNetObjectReference<Network> component, Node node) => 
        InvokeAsync<NodeEdgeComposite>("addNode", element, SerializeIgnoreNull(node));
    
    public ValueTask<NodeEdgeComposite> AddEdge(ElementReference element, DotNetObjectReference<Network> component, Edge edge) => 
        InvokeAsync<NodeEdgeComposite>("addEdge", element, SerializeIgnoreNull(edge));
    
    public ValueTask<NodeEdgeComposite> UpdateNode(ElementReference element, DotNetObjectReference<Network> component, Node node) => 
        InvokeAsync<NodeEdgeComposite>("updateNode", element, SerializeIgnoreNull(node));
    
    public ValueTask<NodeEdgeComposite> UpdateNode(ElementReference element, DotNetObjectReference<Network> component, Node[] nodes) => 
        InvokeAsync<NodeEdgeComposite>("updateNodes", element, SerializeIgnoreNull(nodes));
    
    public ValueTask<NodeEdgeComposite> UpdateEdge(ElementReference element, DotNetObjectReference<Network> component, Edge edge) => 
        InvokeAsync<NodeEdgeComposite>("updateEdge", element, SerializeIgnoreNull(edge));
    
    public ValueTask<NodeEdgeComposite> UpdateEdge(ElementReference element, DotNetObjectReference<Network> component, Edge[] edges) => 
        InvokeAsync<NodeEdgeComposite>("updateEdges", element, SerializeIgnoreNull(edges));
    
    public ValueTask<NodeEdgeComposite> RemoveNode(ElementReference element, DotNetObjectReference<Network> component, Node node) => 
        InvokeAsync<NodeEdgeComposite>("removeNode", element, SerializeIgnoreNull(node));
    
    public ValueTask<NodeEdgeComposite> RemoveEdge(ElementReference element, DotNetObjectReference<Network> component, Edge edge) => 
        InvokeAsync<NodeEdgeComposite>("removeEdge", element, SerializeIgnoreNull(edge));
    
    // Information
    public async ValueTask<NodePositions> GetNodePositions(ElementReference element, DotNetObjectReference<Network> component, string[] nodeIds)
    {
        var nodePositionsDict = await InvokeAsync<Dictionary<string, Position>>("getNodePositions", element, nodeIds);
        return new NodePositions
        {
            Positions = nodePositionsDict
        };
    }

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

    ValueTask ParseDOTNetwork(ElementReference element, string dotString);
    
    // Manipulation
    ValueTask<NodeEdgeComposite> AddNode(ElementReference element, DotNetObjectReference<Network> component, Node node);
    ValueTask<NodeEdgeComposite> AddEdge(ElementReference element, DotNetObjectReference<Network> component, Edge edge);
    ValueTask<NodeEdgeComposite> UpdateNode(ElementReference element, DotNetObjectReference<Network> component, Node node);
    ValueTask<NodeEdgeComposite> UpdateNode(ElementReference element, DotNetObjectReference<Network> component, Node[] nodes);
    ValueTask<NodeEdgeComposite> UpdateEdge(ElementReference element, DotNetObjectReference<Network> component, Edge edge);
    ValueTask<NodeEdgeComposite> UpdateEdge(ElementReference element, DotNetObjectReference<Network> component, Edge[] edges);
    ValueTask<NodeEdgeComposite> RemoveNode(ElementReference element, DotNetObjectReference<Network> component, Node node);
    ValueTask<NodeEdgeComposite> RemoveEdge(ElementReference element, DotNetObjectReference<Network> component, Edge edge);
    ValueTask<NodePositions> GetNodePositions(ElementReference element, DotNetObjectReference<Network> component, string[] nodeIds);
}