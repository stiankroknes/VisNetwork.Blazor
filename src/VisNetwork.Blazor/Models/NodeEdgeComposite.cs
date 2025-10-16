using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace VisNetwork.Blazor.Models;

public class NodeEdgeComposite
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public IReadOnlyCollection<string>? Nodes { get; set; } 
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public IReadOnlyCollection<string>? Edges { get; set; } 
}
