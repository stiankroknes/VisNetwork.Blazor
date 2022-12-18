﻿using System;

namespace VisNetwork.Blazor.Models;

[System.Diagnostics.CodeAnalysis.SuppressMessage("Major Code Smell", "S4035:Classes implementing \"IEquatable<T>\" should be sealed", Justification = "<Pending>")]
public class Edge : EdgeOption, IEquatable<Edge>
{
    public Edge() { }

    public Edge(string from, string to, string? title = null)
    {
        From = from;
        To = to;
        Title = title;
    }

    /// <summary>
    /// The id of the edge. 
    /// The id is optional for edges.
    /// When not supplied, an UUID will be assigned to the edge. This naturally only applies to individual edges.
    /// </summary>
    public string? Id { get; set; }

    /// <summary>
    ///  Edges are between two nodes, one to and one from.
    ///  This is where you define the from node. You have to supply the corresponding node ID.
    ///  This naturally only applies to individual edges. 
    /// </summary>
    public string? From { get; set; }

    /// <summary>
    /// Edges are between two nodes, one to and one from.
    /// This is where you define the to node. You have to supply the corresponding node ID.
    /// This naturally only applies to individual edges. 
    /// </summary>
    public string? To { get; set; }

    public override int GetHashCode() => HashCode.Combine(From, To);

    public override bool Equals(object? obj) => obj is Edge other && Equals(other);

    public bool Equals(Edge? other) => other is object && other.From == From && other.To == To;
}