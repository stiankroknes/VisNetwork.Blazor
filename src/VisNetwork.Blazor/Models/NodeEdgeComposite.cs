using System;
using System.Collections.Generic;

namespace VisNetwork.Blazor.Models;

public class NodeEdgeComposite
{
    public IReadOnlyCollection<string> Nodes { get; set; } = Array.Empty<string>();
    public IReadOnlyCollection<string> Edges { get; set; } = Array.Empty<string>();
}
