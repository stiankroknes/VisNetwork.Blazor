using System.Diagnostics.CodeAnalysis;

namespace VisNetwork.Blazor.Models;

[System.Diagnostics.CodeAnalysis.SuppressMessage("Major Code Smell", "S4035:Classes implementing \"IEquatable<T>\" should be sealed", Justification = "<Pending>")]
public class Node : NodeOption, IEquatable<Node>
{
    /// <summary>
    /// The id of the node. The id is mandatory for nodes and they have to be unique. 
    /// This should obviously be set per node, not globally. 
    /// </summary>
    public required string Id { get; init; }

    public Node()
    {
    }

    /// <summary>
    /// Initializes a new instance of the Node class with the specified identifier, label, level, shape, and optional
    /// title.
    /// </summary>
    /// <param name="id">The unique identifier for the node.</param>
    /// <param name="label">The label is the piece of text shown in or under the node, depending on the shape.</param>
    /// <param name="level">When using the hierarchical layout, the level determines where the node is going to be positioned. </param>
    /// <param name="shape">The visual shape of the node, such as "circle" or "rectangle".</param>
    /// <param name="title">Title to be displayed in a pop-up when the user hovers over the node.</param>
    [SetsRequiredMembers]
    public Node(string id, string label, int? level, string shape, string? title = null)
    {
        Id = id;
        Label = label;
        Level = level;
        Shape = shape;
        Title = title;
    }

    public override bool Equals(object? obj) => obj is Node other && Equals(other);

    public bool Equals(Node? other) => other is not null && string.Equals(other.Id, Id, StringComparison.Ordinal);

    public override int GetHashCode() => Id?.GetHashCode(StringComparison.Ordinal) ?? 0;
}
