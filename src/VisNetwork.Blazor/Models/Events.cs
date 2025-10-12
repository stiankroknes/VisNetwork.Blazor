using System.Collections.Generic;

namespace VisNetwork.Blazor.Models;

#nullable disable
public class BaseClickEvent
{
    public Microsoft.JSInterop.DotNetObjectReference<Network> Source { get; set; }

    /// <summary>
    ///  Selected node ids
    /// </summary>
    /// <value></value>
    public List<string> Nodes { get; set; }

    /// <summary>
    /// Selected edge ids
    /// </summary>
    /// <value></value>
    public List<string> Edges { get; set; }

    public object Event { get; set; }

    public object Pointer { get; set; }
}

/// <summary>
/// Fired when the user clicks the mouse or taps on a touchscreen device.
/// </summary>
public class ClickEvent : BaseClickEvent
{
    // The order of the items array is descending in z-order. Thus, to get the topmost item, get the value at index 0.
    public List<ClickedItem> Items { get; set; }
}

public class ClickedItem
{
    public string NodeId { get; set; }
    public string EdgeId { get; set; }
    public string LabelId { get; set; }
}

/// <summary>
/// Fired when the user double clicks the mouse or double taps on a touchscreen device.
/// Since a double click is in fact 2 clicks, 2 click events are fired, followed by a double click event.
/// If you do not want to use the click events if a double click event is fired, just check the time between click events before processing them. 
/// </summary>
[System.Diagnostics.CodeAnalysis.SuppressMessage("Minor Code Smell", "S2094:Classes should not be empty", Justification = "<Pending>")]
public class DoubleClickEvent : ClickEvent
{
}

public class DeselectClickEvent : BaseClickEvent
{
    public NodeEdgeSelection PreviousSelection { get; set; }
}


public class NodeEdgeSelection
{
    public IReadOnlyCollection<NodeSelection> Nodes { get; set; }
    public IReadOnlyCollection<EdgeSelection> Edges { get; set; }
}

public class NodeSelection
{
    public string Id { get; set; }
    public double X { get; set; }
    public double Y { get; set; }
}

public class EdgeSelection
{
    public string Id { get; set; }
    public string FromId { get; set; }
    public string ToId { get; set; }
}

public class DrawingEvent
{
    public string CanvasDataUrl { get; set; }
}

public class StabilizationProgressEvent
{
    /// <summary>
    /// Iterations so far.
    /// </summary>
    public int Iterations { get; set; }

    /// <summary>
    /// Total iterations in options.
    /// </summary>
    public int Total { get; set; }
}


public class StabilizedEvent
{
    /// <summary>
    /// Iterations it took.
    /// </summary>
    public int Iterations { get; set; }
}
#nullable enable