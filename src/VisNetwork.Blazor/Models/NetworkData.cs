using System.Collections.Generic;

namespace VisNetwork.Blazor.Models;

#nullable disable
public class NetworkData
{
    public IReadOnlyCollection<Edge> Edges { get; set; }
    public IReadOnlyCollection<Node> Nodes { get; set; }
}
#nullable enable