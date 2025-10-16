using System.Text.Json.Serialization;

namespace VisNetwork.Blazor.Models;

/// <summary>
/// Represents the data for a network, including nodes and edges.
/// </summary>
/// <remarks>
/// When using DataSet in the <see cref="INetworkData"/> implementations ensure that Nodes and Edges properties are init only properties to avoid memory leaks due to event subscriptions.
/// </remarks>
public interface INetworkData
{
    IEnumerable<Node> Nodes { get; }
    IEnumerable<Edge> Edges { get; }
}

public class NetworkData : INetworkData
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public required IReadOnlyCollection<Edge> Edges { get; init; }
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public required IReadOnlyCollection<Node> Nodes { get; init; }

    IEnumerable<Node> INetworkData.Nodes => Nodes;
    IEnumerable<Edge> INetworkData.Edges => Edges;
}

public class NetworkDataSet : INetworkData
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public required DataSet<Edge> Edges { get; init; }
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public required DataSet<Node> Nodes { get; init; }

    IEnumerable<Node> INetworkData.Nodes => Nodes;
    IEnumerable<Edge> INetworkData.Edges => Edges;
}

public class NetworkDataSet<TNode, TEdge> : INetworkData
    where TNode : Node
    where TEdge : Edge
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public required DataSet<TEdge> Edges { get; init; }
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public required DataSet<TNode> Nodes { get; init; }

    IEnumerable<Node> INetworkData.Nodes => Nodes;
    IEnumerable<Edge> INetworkData.Edges => Edges;
}