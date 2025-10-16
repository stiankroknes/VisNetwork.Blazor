using System.Collections.Generic;

namespace VisNetwork.Blazor.Models;

#nullable disable
public class BaseClickEvent
{
    public Microsoft.JSInterop.DotNetObjectReference<Network> Source { get; internal set; }

    /// <summary>
    ///  Selected node ids
    /// </summary>
    /// <value></value>
    public IReadOnlyCollection<string> Nodes { get; init; }

    /// <summary>
    /// Selected edge ids
    /// </summary>
    /// <value></value>
    public IReadOnlyCollection<string> Edges { get; init; }

    public object Event { get; init; }

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Naming", "CA1720:Identifier contains type name", Justification = "<Pending>")]
    public object Pointer { get; init; }
}

/// <summary>
/// Fired when the user clicks the mouse or taps on a touchscreen device.
/// </summary>
public class ClickEvent : BaseClickEvent
{
    // The order of the items array is descending in z-order. Thus, to get the topmost item, get the value at index 0.
    public IReadOnlyCollection<ClickedItem> Items { get; init; }
}

public class ClickedItem
{
    public string NodeId { get; init; }
    public string EdgeId { get; init; }
    public string LabelId { get; init; }
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
    public NodeEdgeSelection PreviousSelection { get; init; }
}

public class NodeEdgeSelection
{
    public IReadOnlyCollection<NodeSelection> Nodes { get; init; }
    public IReadOnlyCollection<EdgeSelection> Edges { get; init; }
}

public class NodeSelection
{
    public string Id { get; init; }
    public double X { get; init; }
    public double Y { get; init; }
}

public class EdgeSelection
{
    public string Id { get; init; }
    public string FromId { get; init; }
    public string ToId { get; init; }
}

public class DrawingEvent
{
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Design", "CA1056:URI-like properties should not be strings", Justification = "<Pending>")]
    public string CanvasDataUrl { get; init; }
}

public class StabilizationProgressEvent
{
    /// <summary>
    /// Iterations so far.
    /// </summary>
    public int Iterations { get; init; }

    /// <summary>
    /// Total iterations in options.
    /// </summary>
    public int Total { get; init; }
}

public class StabilizedEvent
{
    /// <summary>
    /// Iterations it took.
    /// </summary>
    public int Iterations { get; init; }
}

#nullable enable
