using System.Text.Json.Serialization;

namespace VisNetwork.Blazor.Models;

public class BorderBackgroundColor
{
    /// <summary>
    /// The color of the border of the node.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string? Border { get; init; }

    /// <summary>
    /// The color of the background of the node.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)] 
    public string? Background { get; init; }
}
