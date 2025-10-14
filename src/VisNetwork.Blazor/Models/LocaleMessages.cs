namespace VisNetwork.Blazor.Models;

/// <summary>
/// Represents locale-specific messages for vis-network UI elements and errors.
/// </summary>
public class LocaleMessages
{
    public required string Edit { get; init; }
    public required string Del { get; init; }
    public required string Back { get; init; }
    public required string AddNode { get; init; }
    public required string AddEdge { get; init; }
    public required string EditNode { get; init; }
    public required string EditEdge { get; init; }
    public required string AddDescription { get; init; }
    public required string EdgeDescription { get; init; }
    public required string EditEdgeDescription { get; init; }
    public required string CreateEdgeError { get; init; }
    public required string DeleteClusterError { get; init; }
    public required string EditClusterError { get; init; }
}
