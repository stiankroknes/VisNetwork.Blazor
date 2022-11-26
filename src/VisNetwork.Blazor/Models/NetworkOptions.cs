namespace VisNetwork.Blazor.Models;

public class NetworkOptions
{
    /// <summary>
    /// If true, the Network will automatically detect when its container is resized, and redraw itself accordingly.
    /// If false, the Network can be forced to repaint after its container has been resized using the function redraw() and setSize().
    /// The default is true.
    /// </summary>
    public bool? AutoResize { get; set; }

    /// <summary>
    /// The width of the canvas. Can be in percentages or pixels (ie. '400px').
    /// The default is '100%'.
    /// </summary>
    public string? Width { get; set; }

    /// <summary>
    /// The height of the canvas. Can be in percentages or pixels (ie. '400px').
    /// The default is '100%'.
    /// </summary>
    public string? Height { get; set; }

    /// <summary>
    /// Select the locale. By default, the language is English.
    /// </summary>
    public string? Locale { get; set; }

    // locales

    /// <summary>
    /// When a Network is configured to be clickToUse, it will react to mouse and touch events only when active.
    /// When active, a blue shadow border is displayed around the Network.
    /// The network is set active by clicking on it, and is changed to inactive again by clicking outside the Network or by pressing the ESC key.
    /// The default is false.
    /// </summary>
    public bool? ClickToUse { get; set; }

    /// <summary>
    /// Options for the HTML part of the canvas.
    /// </summary>
    public ConfigureOptions? Configure { get; set; }

    /// <summary>
    /// The global edge options and styles.
    /// </summary>
    /// <value></value>
    public EdgeOption? Edges { get; set; }

    /// <summary>
    /// The global node options and styles.
    /// </summary>
    /// <value></value>
    public NodeOption? Nodes { get; set; }

    // TODO groups, can add group:'myGroup' to node, and define styling for groups here

    /// <summary>
    /// Options for the layout module.
    /// </summary>
    public LayoutOptions? Layout { get; set; }

    /// <summary>
    /// Options for the interaction module.
    /// </summary>
    public InteractionOptions? Interaction { get; set; }

    /// <summary>
    /// Options for the manipulation module.
    /// </summary>
    public ManipulationOptions? Manipulation { get; set; }

    /// <summary>
    /// Options for the physics module.
    /// </summary>
    public PhysicsOptions? Physics { get; set; }
}
