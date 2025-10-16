using System.Text.Json.Serialization;

namespace VisNetwork.Blazor.Models;

public class NetworkOptions
{
    /// <summary>
    /// If true, the Network will automatically detect when its container is resized, and redraw itself accordingly.
    /// If false, the Network can be forced to repaint after its container has been resized using the function redraw() and setSize().
    /// The default is true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public bool? AutoResize { get; set; }

    /// <summary>
    /// The width of the canvas. Can be in percentages or pixels (ie. '400px').
    /// The default is '100%'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string? Width { get; set; }

    /// <summary>
    /// The height of the canvas. Can be in percentages or pixels (ie. '400px').
    /// The default is '100%'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string? Height { get; set; }

    /// <summary>
    /// Select the locale. By default, the language is English.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string? Locale { get; set; }

    /// <summary>
    /// Locales object. By default 'en', 'de', 'es', 'it', 'nl' 'pt-br', 'ru' are supported.
    /// </summary>
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Usage", "CA2227:Collection properties should be read only", Justification = "<Pending>")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public IDictionary<string, LocaleMessages>? Locales { get; set; }

    /// <summary>
    /// When a Network is configured to be clickToUse, it will react to mouse and touch events only when active.
    /// When active, a blue shadow border is displayed around the Network.
    /// The network is set active by clicking on it, and is changed to inactive again by clicking outside the Network or by pressing the ESC key.
    /// The default is false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public bool? ClickToUse { get; set; }

    /// <summary>
    /// Options for the HTML part of the canvas.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public ConfigureOptions? Configure { get; set; }

    /// <summary>
    /// The global edge options and styles.
    /// </summary>
    /// <value></value>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public EdgeOption? Edges { get; set; }

    /// <summary>
    /// The global node options and styles.
    /// </summary>
    /// <value></value>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public NodeOption? Nodes { get; set; }

#pragma warning disable S1135 // Track uses of "TODO" tags
    // TODO groups, can add group:'myGroup' to node, and define styling for groups here
#pragma warning restore S1135 // Track uses of "TODO" tags

    /// <summary>
    /// Options for the layout module.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public LayoutOptions? Layout { get; set; }

    /// <summary>
    /// Options for the interaction module.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public InteractionOptions? Interaction { get; set; }

    /// <summary>
    /// Options for the manipulation module.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public ManipulationOptions? Manipulation { get; set; }

    /// <summary>
    /// Options for the physics module.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public PhysicsOptions? Physics { get; set; }
}
