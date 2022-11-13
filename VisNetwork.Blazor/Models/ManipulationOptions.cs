namespace VisNetwork.Blazor.Models;

/// <summary>
/// The options for the manipulation module.
/// The manipulation module acts as the camera that looks on the canvas. Does the animation, zooming and focusing.
/// </summary>
public class ManipulationOptions
{
    public bool? Enabled { get; set; }
    public bool? InitiallyActive { get; set; }
    public bool? AddNode { get; set; } // TODO: bool or function, wrap this
    public bool? AddEdge { get; set; } // TODO: bool or function, wrap this
    // public xxx EditNode { get; set; } // TODO function
    public bool? EditEdge { get; set; } // TODO bool or function, wrap this
    public bool? DeleteNode { get; set; }// TODO bool or function, wrap this
    public bool? DeleteEdge { get; set; }
    public NodeOption? ControlNodeStyle { get; set; }
}
