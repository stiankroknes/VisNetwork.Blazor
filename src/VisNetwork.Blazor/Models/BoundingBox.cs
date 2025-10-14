namespace VisNetwork.Blazor.Models;

public sealed class BoundingBox
{
    public required double Top { get; init; }
    public required double Left { get; init; }
    public required double Right { get; init; }
    public required double Bottom { get; init; }
}
