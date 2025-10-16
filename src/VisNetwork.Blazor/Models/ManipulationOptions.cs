using System.Text.Json.Serialization;

namespace VisNetwork.Blazor.Models;

/// <summary>
/// The options for the manipulation module.
/// The manipulation module acts as the camera that looks on the canvas. Does the animation, zooming and focusing.
/// </summary>
[System.Diagnostics.CodeAnalysis.SuppressMessage("Info Code Smell", "S1135:Track uses of \"TODO\" tags", Justification = "<Pending>")]
public class ManipulationOptions
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public bool? Enabled { get; set; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public bool? InitiallyActive { get; set; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public bool? AddNode { get; set; } // TODO: bool or function, wrap this

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public bool? AddEdge { get; set; } // TODO: bool or function, wrap this

    // public xxx EditNode { get; set; } // TODO function

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public bool? EditEdge { get; set; } // TODO bool or function, wrap this

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public bool? DeleteNode { get; set; }// TODO bool or function, wrap this

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public bool? DeleteEdge { get; set; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public NodeOption? ControlNodeStyle { get; set; }
}
