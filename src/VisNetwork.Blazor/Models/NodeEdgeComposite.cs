using System.Collections.Generic;

namespace VisNetwork.Blazor.Models;

public class NodeEdgeComposite
{
    public IReadOnlyCollection<string> Nodes { get; set; } = [];
    public IReadOnlyCollection<string> Edges { get; set; } = [];
}
