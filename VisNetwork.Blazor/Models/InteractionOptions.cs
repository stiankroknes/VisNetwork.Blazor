namespace VisNetwork.Blazor.Models;

/// <summary>
/// Options for the interaction module.
/// The interaction module is used for all user interaction with the network. Handles mouse and touch events as well as the navigation buttons and the popups.
/// </summary>
public class InteractionOptions
{
    /// <summary>
    /// When true, the nodes that are not fixed can be dragged by the user.
    /// The default is true.
    /// </summary>
    public bool? DragNodes { get; set; }

    /// <summary>
    /// When true, the view can be dragged around by the user.
    /// The default is true.
    /// </summary>
    public bool? DragView { get; set; }

    /// <summary>
    /// When true, the edges are not drawn when dragging the view. 
    /// This can greatly speed up responsiveness on dragging, improving user experience.
    /// The default is false.
    /// </summary>
    public bool? HideEdgesOnDrag { get; set; }

    /// <summary>
    /// When true, the edges are not drawn when zooming the view. 
    /// This can greatly speed up responsiveness on zooming, improving user experience. 
    /// The default is false.
    /// </summary>
    public bool? HideEdgesOnZoom { get; set; }

    /// <summary>
    /// When true, the nodes are not drawn when dragging the view. 
    /// This can greatly speed up responsiveness on dragging, improving user experience.
    /// The default is false.
    /// </summary>
    public bool? HideNodesOnDrag { get; set; }

    /// <summary>
    /// When true, the nodes use their hover colors when the mouse moves over them.
    /// The default is false.
    /// </summary>
    public bool? Hover { get; set; }

    /// <summary>
    /// When true, on hovering over a node, it's connecting edges are highlighted.
    /// The default is true.
    /// </summary>
    public bool? HoverConnectedEdges { get; set; }

    /// <summary>
    /// Keyboard options.
    /// </summary>
    public KeyboardOption? Keyboard { get; set; }

    /// <summary>
    /// When true, a longheld click (or touch) as well as a control-click will add to the selection. 
    /// The default is false.
    /// </summary>
    public bool? Multiselect { get; set; }

    /// <summary>
    /// When true, navigation buttons are drawn on the network canvas. 
    /// These are HTML buttons and can be completely customized using CSS. 
    /// The default is false.
    /// </summary>
    public bool? NavigationButtons { get; set; }

    /// <summary>
    /// When true, the nodes and edges can be selected by the user.
    /// The default is true.
    /// </summary>
    public bool? Selectable { get; set; }

    /// <summary>
    /// When true, on selecting a node, its connecting edges are highlighted.
    /// The default is true.
    /// </summary>
    public bool? SelectConnectedEdges { get; set; }

    /// <summary>
    /// When nodes or edges have a defined 'title' field, this can be shown as a pop-up tooltip.
    /// The tooltip itself is an HTML element that can be fully styled using CSS.
    /// The delay is the amount of time in milliseconds it takes before the tooltip is shown.
    /// The default is 300.
    /// </summary>
    public int? TooltipDelay { get; set; }

    /// <summary>
    /// How fast/rough or slow/precise zooming is.
    /// The default is 1.
    /// </summary>
    public int? ZoomSpeed { get; set; }

    /// <summary>
    /// When true, the user can zoom in.
    /// The default is true.
    /// </summary>
    public bool? ZoomView { get; set; }
}

/// <summary>
/// Keyboard options for interaction module.
/// </summary>
public class KeyboardOption
{
    /// <summary>
    ///  Toggle the usage of the keyboard shortcuts. 
    ///  If this option is not defined, it is set to true if any of the properties in this object are defined.
    /// </summary>
    public bool? Enabled { get; set; }

    /// <summary>
    /// Options for speed when pressing a key or pressing a navigation button.
    /// </summary>
    public KeyboardSpeedOption? Speed { get; set; }

    /// <summary>
    /// When binding the keyboard shortcuts to the window, they will work regardless of which DOM object has the focus.
    /// If you have multiple networks on your page, you could set this to false, making sure the keyboard shortcuts only work on the network that has the focus.
    /// The default is true.
    /// </summary>
    public bool? BindToWindow { get; set; }
}

/// <summary>
/// Keyboard speed options.
/// </summary>
public class KeyboardSpeedOption
{
    /// <summary>
    /// The speed at which the view moves in the x direction on pressing a key or pressing a navigation button. 
    /// The default is 1.
    /// </summary>
    public int? X { get; set; }

    /// <summary>
    /// The speed at which the view moves in the y direction on pressing a key or pressing a navigation button.
    /// The default is 1.
    /// </summary>
    public int? Y { get; set; }

    /// <summary>
    /// The speed at which the view zooms in or out pressing a key or pressing a navigation button.
    /// The default is 0.02.
    /// </summary>
    public decimal? Zoom { get; set; }
}
