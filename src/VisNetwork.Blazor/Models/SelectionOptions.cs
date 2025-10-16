using System.Text.Json.Serialization;

namespace VisNetwork.Blazor.Models;

public class SelectionOptions
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public bool? UnselectAll { get; set; }
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public bool? GighlightEdges { get; set; }
}