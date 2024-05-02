#nullable disable
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using VisNetwork.Blazor.Models;

namespace VisNetwork.Blazor
{
    public interface INetwork
    {
        string Id { get; set; }

        /// <summary>
        /// Sets the options action to create the <see cref="NetworkOptions"/>.
        /// </summary>
        Func<Network, NetworkOptions> Options { get; set; }

        /// <summary>
        /// The network data.
        /// </summary>
        NetworkData Data { get; set; }

        /// <summary>
        /// Fired when the user clicks the mouse or taps on a touchscreen device.
        /// </summary>
        EventCallback<ClickEvent> OnClick { get; set; }

        /// <summary>
        /// Fired when the user double clicks the mouse or double taps on a touchscreen device.
        /// Since a double click is in fact 2 clicks, 2 click events are fired, followed by a double click event.
        /// If you do not want to use the click events if a double click event is fired, just check the time between click events before processing them.
        /// </summary>
        EventCallback<ClickEvent> OnDoubleClick { get; set; }

        /// <summary>
        /// Fired when the user click on the canvas with the right mouse button.
        /// The right mouse button does not select by default.
        /// You can use the method getNodeAt to select the node if you want. 
        /// </summary>
        EventCallback<ClickEvent> OnContext { get; set; }

        /// <summary>
        ///  Fired when the user clicks and holds the mouse or taps and holds on a touchscreen device.
        ///  A click event is also fired in this case. 
        /// </summary>
        EventCallback<ClickEvent> OnHold { get; set; }

        /// <summary>
        /// Fired after drawing on the canvas has been completed. Can be used to draw on top of the network. 
        /// </summary>
        EventCallback<ClickEvent> OnRelease { get; set; }

        /// <summary>
        /// Fired when the selection has changed by user action.
        /// This means a node or edge has been selected, added to the selection or deselected.
        /// All select events are only triggered on click and hold. 
        /// </summary>
        EventCallback<ClickEvent> OnSelect { get; set; }

        /// <summary>
        /// Fired when a node has been selected by the user.
        /// </summary>
        EventCallback<ClickEvent> OnSelectNode { get; set; }

        /// <summary>
        /// Fired when a node (or nodes) has (or have) been deselected by the user.
        /// The previous selection is the list of nodes and edges that were selected before the last user event.
        /// </summary>
        EventCallback<DeselectClickEvent> OnDeselectNode { get; set; }

        /// <summary>
        /// Fired when an edge has been selected by the user.
        /// </summary>
        EventCallback<ClickEvent> OnSelectEdge { get; set; }

        /// <summary>
        /// Fired when an edge (or edges) has (or have) been deselected by the user.
        /// The previous selection is the list of nodes and edges that were selected before the last user event. 
        /// </summary>
        EventCallback<DeselectClickEvent> OnDeselectEdge { get; set; }

        EventCallback<string> OnShowPopup { get; set; }
        EventCallback<string> OnHidePopup { get; set; }

        /// <summary>
        /// Fired when stabilization starts. 
        /// This is also the case when you drag a node and the physics simulation restarts to stabilize again.
        /// Stabilization does not necessarily imply 'without showing'. 
        /// </summary>
        EventCallback OnStartStabilizing { get; set; }

        /// <summary>
        /// Fired when a multiple of the updateInterval number of iterations is reached. This only occurs in the 'hidden' stabilization.
        /// </summary>
        EventCallback<StabilizationProgressEvent> OnStabilizationProgress { get; set; }

        /// <summary>
        /// Fired when the 'hidden' stabilization finishes. 
        /// This does not necessarily mean the network is stabilized;
        /// it could also mean that the amount of iterations defined in the options has been reached. 
        /// </summary>
        EventCallback OnStabilizationIterationsDone { get; set; }

        /// <summary>
        /// Fired when the network has stabilized or when the stopSimulation() has been called. 
        /// The amount of iterations it took could be used to tweak the maximum amount of iterations needed to stabilize the network. 
        /// </summary>
        EventCallback<StabilizedEvent> OnStabilized { get; set; }

        EventCallback<DrawingEvent> OnBeforeDrawing { get; set; }
        EventCallback<DrawingEvent> OnAfterDrawing { get; set; }

        /// <summary>
        /// This event is fired when the network has been setup through interop and
        /// the JavaScript network object is available.
        /// </summary>
        EventCallback SetupCompletedCallback { get; set; }

        Task SetData(NetworkData data);
        Task SetOptions(NetworkOptions options);
        Task SetSize(int width, int height);
        Task Redraw();
        Task ClusterOutliers();
        Task<string[]> GetSelectedNodes();
        Task SelectNodes(string[] nodeIds);
        Task<string[]> GetSelectedEdges();
        Task SelectEdges(string[] nodeIds);
        Task<NodeEdgeComposite> GetSelection();
        Task<NodeEdgeComposite> SetSelection(NodeEdgeComposite composite);
        Task<NodeEdgeComposite> UnselectAll();
        Task ParseDOTNetwork(string dotString);
        Task AddNode(Node node);
        Task AddEdge(Edge edge);
        Task UpdateNode(Node node);
        Task UpdateNode(Node[] nodes);
        Task UpdateEdge(Edge edge);
        Task UpdateEdge(Edge[] edges);
        Task RemoveNode(Node node);
        Task RemoveEdge(Edge edge);
        Task<NodePositions> GetNodePositions(string[] nodeIds);
    }
}