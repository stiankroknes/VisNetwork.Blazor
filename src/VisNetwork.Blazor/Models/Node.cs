using System;

namespace VisNetwork.Blazor.Models;

[System.Diagnostics.CodeAnalysis.SuppressMessage("Major Code Smell", "S4035:Classes implementing \"IEquatable<T>\" should be sealed", Justification = "<Pending>")]
public class Node : NodeOption, IEquatable<Node>
{
    /// <summary>
    /// The id of the node. The id is mandatory for nodes and they have to be unique. 
    /// This should obviously be set per node, not globally. 
    /// </summary>
    public string? Id { get; set; }

    public Node() { }

    public Node(string id, string label, int level, string shape, string? title = null)
    {
        Id = id;
        Label = label;
        Level = level;
        Shape = shape;
        Title = title;
    }
    public override bool Equals(object? obj) => obj is Node other && Equals(other);

    public bool Equals(Node? other) => other is not null && other.Id == Id;

    public override int GetHashCode() => Id?.GetHashCode() ?? 0;
}
