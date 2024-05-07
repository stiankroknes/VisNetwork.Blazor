using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using VisNetwork.Blazor.Models;

#nullable disable
namespace VisNetwork.Blazor;

public partial class Network : IAsyncDisposable, INetwork
{
    private readonly DotNetObjectReference<Network> thisReference;
    private ElementReference element;
    private bool firstRenderComplete;
    private NetworkData currentData;

    [Inject]
    internal IJSModule JS { get; set; }

    [Parameter] public string Id { get; set; }

    /// <summary>
    /// Sets the options action to create the <see cref="NetworkOptions"/>.
    /// </summary>
    [Parameter] public Func<Network, NetworkOptions> Options { get; set; }

    /// <summary>
    /// The network data.
    /// </summary>
    [Parameter] public NetworkData Data { get; set; }

    [Parameter(CaptureUnmatchedValues = true)] public Dictionary<string, object> ExtraAttributes { get; set; }

    // Events triggered by human interaction, selection, dragging etc.

    /// <summary>
    /// Fired when the user clicks the mouse or taps on a touchscreen device.
    /// </summary>
    [Parameter] public EventCallback<ClickEvent> OnClick { get; set; }

    /// <summary>
    /// Fired when the user double clicks the mouse or double taps on a touchscreen device.
    /// Since a double click is in fact 2 clicks, 2 click events are fired, followed by a double click event.
    /// If you do not want to use the click events if a double click event is fired, just check the time between click events before processing them.
    /// </summary>
    [Parameter] public EventCallback<ClickEvent> OnDoubleClick { get; set; }

    /// <summary>
    /// Fired when the user click on the canvas with the right mouse button.
    /// The right mouse button does not select by default.
    /// You can use the method getNodeAt to select the node if you want. 
    /// </summary>
    [Parameter] public EventCallback<ClickEvent> OnContext { get; set; }

    /// <summary>
    ///  Fired when the user clicks and holds the mouse or taps and holds on a touchscreen device.
    ///  A click event is also fired in this case. 
    /// </summary>
    [Parameter] public EventCallback<ClickEvent> OnHold { get; set; }

    /// <summary>
    /// Fired after drawing on the canvas has been completed. Can be used to draw on top of the network. 
    /// </summary>
    [Parameter] public EventCallback<ClickEvent> OnRelease { get; set; }

    /// <summary>
    /// Fired when the selection has changed by user action.
    /// This means a node or edge has been selected, added to the selection or deselected.
    /// All select events are only triggered on click and hold. 
    /// </summary>
    [Parameter] public EventCallback<ClickEvent> OnSelect { get; set; }

    /// <summary>
    /// Fired when a node has been selected by the user.
    /// </summary>
    [Parameter] public EventCallback<ClickEvent> OnSelectNode { get; set; }

    /// <summary>
    /// Fired when a node (or nodes) has (or have) been deselected by the user.
    /// The previous selection is the list of nodes and edges that were selected before the last user event.
    /// </summary>
    [Parameter] public EventCallback<DeselectClickEvent> OnDeselectNode { get; set; }

    /// <summary>
    /// Fired when an edge has been selected by the user.
    /// </summary>
    [Parameter] public EventCallback<ClickEvent> OnSelectEdge { get; set; }

    /// <summary>
    /// Fired when an edge (or edges) has (or have) been deselected by the user.
    /// The previous selection is the list of nodes and edges that were selected before the last user event. 
    /// </summary>
    [Parameter] public EventCallback<DeselectClickEvent> OnDeselectEdge { get; set; }

    [Parameter] public EventCallback<string> OnShowPopup { get; set; }

    [Parameter] public EventCallback<string> OnHidePopup { get; set; }

#pragma warning disable S1135 // Track uses of "TODO" tags
    // Events triggered the physics simulation. Can be used to trigger GUI updates.

    /// <summary>
    /// Fired when stabilization starts. 
    /// This is also the case when you drag a node and the physics simulation restarts to stabilize again.
    /// Stabilization does not necessarily imply 'without showing'. 
    /// </summary>
    [Parameter] public EventCallback OnStartStabilizing { get; set; }

    /// <summary>
    /// Fired when a multiple of the updateInterval number of iterations is reached. This only occurs in the 'hidden' stabilization.
    /// </summary>
    [Parameter] public EventCallback<StabilizationProgressEvent> OnStabilizationProgress { get; set; }

    /// <summary>
    /// Fired when the 'hidden' stabilization finishes. 
    /// This does not necessarily mean the network is stabilized;
    /// it could also mean that the amount of iterations defined in the options has been reached. 
    /// </summary>
    [Parameter] public EventCallback OnStabilizationIterationsDone { get; set; }

    /// <summary>
    /// Fired when the network has stabilized or when the stopSimulation() has been called. 
    /// The amount of iterations it took could be used to tweak the maximum amount of iterations needed to stabilize the network. 
    /// </summary>
    [Parameter] public EventCallback<StabilizedEvent> OnStabilized { get; set; }

    // TODO

    // Event triggered by the canvas.
    // TODO


    // Events triggered by the rendering module. Can be used to draw custom elements on the canvas.
    // TOOD
#pragma warning restore S1135 // Track uses of "TODO" tags

    [Parameter] public EventCallback<DrawingEvent> OnBeforeDrawing { get; set; }
    [Parameter] public EventCallback<DrawingEvent> OnAfterDrawing { get; set; }

#pragma warning disable S1135 // Track uses of "TODO" tags
    // Event triggered by the view module.
    // TODO

    // Event triggered by the configuration module.
    // TODO
#pragma warning restore S1135 // Track uses of "TODO" tags

    /// <summary>
    /// This event is fired when the network has been setup through interop and
    /// the JavaScript network object is available.
    /// </summary>
    [Parameter]
    public EventCallback SetupCompletedCallback { get; set; }

    public Network()
    {
        thisReference = DotNetObjectReference.Create(this);
    }

    async ValueTask IAsyncDisposable.DisposeAsync()
    {
        if (firstRenderComplete)
        {
            var task = JS.Destroy(element);

            thisReference?.Dispose();

            try
            {
                await task;
            }
            catch when (task.IsCanceled)
            {
                // ignored
            }
            catch (JSDisconnectedException)
            {
                // ignored
            }
        }
    }

    protected override async Task OnParametersSetAsync()
    {
        if (string.IsNullOrWhiteSpace(Id))
        {
            Id = $"blazor-network-{Guid.NewGuid()}";
        }

        if (firstRenderComplete && currentData != Data)
        {
            await JS.SetData(element, thisReference, Data);
        }

        currentData = Data;
        await base.OnParametersSetAsync();
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            var options = Options?.Invoke(this);
            options ??= new NetworkOptions();

            await JS.CreateNetwork(element, thisReference, options, Data).AsTask();
            firstRenderComplete = true;
            await SetupCompletedCallback.InvokeAsync(this);
            await SetEventListeners();
        }
    }

    internal async Task SetEventListeners()
    {
        if (OnClick.HasDelegate)
        {
            await JS.SetEventListener(element, thisReference, "click");
        }
        if (OnDoubleClick.HasDelegate)
        {
            await JS.SetEventListener(element, thisReference, "doubleClick");
        }
        if (OnContext.HasDelegate)
        {
            await JS.SetEventListener(element, thisReference, "oncontext");
        }
        if (OnHold.HasDelegate)
        {
            await JS.SetEventListener(element, thisReference, "hold");
        }
        if (OnRelease.HasDelegate)
        {
            await JS.SetEventListener(element, thisReference, "release");
        }
        if (OnSelect.HasDelegate)
        {
            await JS.SetEventListener(element, thisReference, "select");
        }
        if (OnSelectNode.HasDelegate)
        {
            await JS.SetEventListener(element, thisReference, "selectNode");
        }
        if (OnDeselectNode.HasDelegate)
        {
            await JS.SetEventListener(element, thisReference, "deselectNode");
        }
        if (OnSelectEdge.HasDelegate)
        {
            await JS.SetEventListener(element, thisReference, "selectEdge");
        }
        if (OnDeselectEdge.HasDelegate)
        {
            await JS.SetEventListener(element, thisReference, "deselectEdge");
        }
        if (OnShowPopup.HasDelegate)
        {
            await JS.SetEventListener(element, thisReference, "showPopup");
        }
        if (OnHidePopup.HasDelegate)
        {
            await JS.SetEventListener(element, thisReference, "hidePopup");
        }

        // Events triggered the physics simulation.
        if (OnStartStabilizing.HasDelegate)
        {
            await JS.SetEventListener(element, thisReference, "startStabilizing");
        }
        if (OnStabilizationProgress.HasDelegate)
        {
            await JS.SetEventListener(element, thisReference, "stabilizationProgress");
        }
        if (OnStabilizationIterationsDone.HasDelegate)
        {
            await JS.SetEventListener(element, thisReference, "stabilizationIterationsDone");
        }
        if (OnStabilized.HasDelegate)
        {
            await JS.SetEventListener(element, thisReference, "stabilized");
        }

        // Rendering
        if (OnBeforeDrawing.HasDelegate)
        {
            await JS.SetEventListener(element, thisReference, "beforeDrawing");
        }

        if (OnAfterDrawing.HasDelegate)
        {
            await JS.SetEventListener(element, thisReference, "afterDrawing");
        }
    }

    private static readonly JsonSerializerOptions EventJsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
    };

    [JSInvokable]
    public async Task EventCallback(string eventName, string eventJson)
    {
        var eventTask = eventName switch
        {
            "click" => OnClick.InvokeAsync(JsonSerializer.Deserialize<ClickEvent>(eventJson, EventJsonOptions)),
            "doubleClick" => OnDoubleClick.InvokeAsync(JsonSerializer.Deserialize<ClickEvent>(eventJson, EventJsonOptions)),
            "oncontext" => OnContext.InvokeAsync(JsonSerializer.Deserialize<ClickEvent>(eventJson, EventJsonOptions)),
            "hold" => OnHold.InvokeAsync(JsonSerializer.Deserialize<ClickEvent>(eventJson, EventJsonOptions)),
            "release" => OnRelease.InvokeAsync(JsonSerializer.Deserialize<ClickEvent>(eventJson, EventJsonOptions)),
            "select" => OnSelect.InvokeAsync(JsonSerializer.Deserialize<ClickEvent>(eventJson, EventJsonOptions)),
            "selectNode" => OnSelectNode.InvokeAsync(JsonSerializer.Deserialize<ClickEvent>(eventJson, EventJsonOptions)),
            "deselectNode" => OnDeselectNode.InvokeAsync(JsonSerializer.Deserialize<DeselectClickEvent>(eventJson, EventJsonOptions)),
            "selectEdge" => OnSelectEdge.InvokeAsync(JsonSerializer.Deserialize<ClickEvent>(eventJson, EventJsonOptions)),
            "deselectEdge" => OnDeselectEdge.InvokeAsync(JsonSerializer.Deserialize<DeselectClickEvent>(eventJson, EventJsonOptions)),
            "showPopup" => OnShowPopup.InvokeAsync(eventJson),
            "hidePopup" => OnHidePopup.InvokeAsync(eventJson),
            "beforeDrawing" => OnBeforeDrawing.InvokeAsync(JsonSerializer.Deserialize<DrawingEvent>(eventJson, EventJsonOptions)),
            "afterDrawing" => OnAfterDrawing.InvokeAsync(JsonSerializer.Deserialize<DrawingEvent>(eventJson, EventJsonOptions)),

            // Physics
            "startStabilizing" => OnStartStabilizing.InvokeAsync(),
            "stabilizationProgress" => OnStabilizationProgress.InvokeAsync(JsonSerializer.Deserialize<StabilizationProgressEvent>(eventJson, EventJsonOptions)),
            "stabilizationIterationsDone" => OnStabilizationIterationsDone.InvokeAsync(),
            "stabilized" => OnStabilized.InvokeAsync(JsonSerializer.Deserialize<StabilizedEvent>(eventJson, EventJsonOptions)),

            _ => Task.CompletedTask
        };

        await eventTask;
    }

    // Global
    public async Task SetData(NetworkData data) =>
        await JS.SetData(element, thisReference, data);

    public async Task SetOptions(NetworkOptions options) =>
       await JS.SetOptions(element, thisReference, options);

    public async Task SetSize(int width, int height) =>
        await JS.SetSize(element, thisReference, width.ToString(), height.ToString());

    // Canvas
    public async Task Redraw() =>
        await JS.Redraw(element, thisReference);

    // Clustering
    public async Task ClusterOutliers() =>
        await JS.ClusterOutliers(element, thisReference);

    // Selection
    public async Task<string[]> GetSelectedNodes() =>
        await JS.GetSelectedNodes(element, thisReference);

    public async Task SelectNodes(string[] nodeIds) =>
        await JS.SelectNodes(element, thisReference, nodeIds);

    public async Task<string[]> GetSelectedEdges() =>
        await JS.GetSelectedEdges(element, thisReference);

    public async Task SelectEdges(string[] nodeIds) =>
        await JS.SelectEdges(element, thisReference, nodeIds);

    public async Task<NodeEdgeComposite> GetSelection() =>
        await JS.GetSelection(element, thisReference);

    public async Task<NodeEdgeComposite> SetSelection(NodeEdgeComposite composite) =>
        await JS.SetSelection(element, thisReference, composite);

    public async Task<NodeEdgeComposite> UnselectAll() =>
        await JS.UnselectAll(element, thisReference);

    public async Task ParseDOTNetwork(string dotString) =>
        await JS.ParseDOTNetwork(element, dotString);
    
    // Manipulation
    public async Task AddNode(Node node)
    {
        await JS.AddNode(element, thisReference, node);
        Data.Nodes = Data.Nodes.Append(node).ToList();
    }

    public async Task AddEdge(Edge edge)
    {
        await JS.AddEdge(element, thisReference, edge);
        Data.Edges = Data.Edges.Append(edge).ToList();
    }

    public async Task UpdateNode(Node node)
    {
        await JS.UpdateNode(element, thisReference, node);
        
        var nodesList = Data.Nodes.ToList();
        nodesList.RemoveAll(n => n.Id == node.Id);
        nodesList.Add(node);
        
        Data.Nodes = nodesList;
    }

    public async Task UpdateNode(Node[] nodes)
    {
        await JS.UpdateNode(element, thisReference, nodes);
            
        var nodesList = Data.Nodes.ToList();
        var newNodeIds = nodes.Select(newNode => newNode.Id);
        nodesList.RemoveAll(existingNode => newNodeIds.Any(id => existingNode.Id == id));
        nodesList.AddRange(nodes);
        
        Data.Nodes = nodesList;
    }

    public async Task UpdateEdge(Edge edge)
    {
        await JS.UpdateEdge(element, thisReference, edge);
        
        var edgeList = Data.Edges.ToList();
        edgeList.RemoveAll(e => e.Id == edge.Id);
        edgeList.Add(edge);
        
        Data.Edges = edgeList;
    }

    public async Task UpdateEdge(Edge[] edges)
    {
        await JS.UpdateEdge(element, thisReference, edges);
        
        var edgeList = Data.Edges.ToList();
        var newEdgeIds = edges.Select(newEdge => newEdge.Id);
        edgeList.RemoveAll(existingEdge => newEdgeIds.Any(id => existingEdge.Id == id));
        edgeList.AddRange(edges);
        
        Data.Edges = edgeList;
    }

    public async Task RemoveNode(Node node)
    {
        await JS.RemoveNode(element, thisReference, node);
        Data.Nodes = Data.Nodes.Where(n => n.Id != node.Id).ToList();
    }

    public async Task RemoveEdge(Edge edge)
    {
        await JS.RemoveEdge(element, thisReference, edge);
        Data.Edges = Data.Edges.Where(e => e.Id != edge.Id).ToList();
    }

    // Information
    public async Task<NodePositions> GetNodePositions(string[] nodeIds) =>
        await JS.GetNodePositions(element, thisReference, nodeIds);
}
#nullable enable