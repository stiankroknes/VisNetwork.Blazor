using System.Collections.Generic;

namespace VisNetwork.Blazor.Models;

public class ColorType
{
    public ColorType() { }

    public ColorType(string color, string hover, string highlight, double? opacity)
    {
        Color = color;
        Hover = hover;
        Highlight = highlight;
        Opacity = opacity;
    }

    public static ColorType Create(string color) => new ColorType(color, color, color, 1.0);

    public string Color { get; set; }
    public string Hover { get; set; }
    public string Highlight { get; set; }
    public double? Opacity { get; set; }
}

public class Icon
{
    public string Face { get; set; }
    public string Code { get; set; }
    public int? Size { get; set; }
    public string Color { get; set; }
    public string Weight { get; set; }
}

public class NodeEdgeComposite
{
    public IReadOnlyCollection<string> Nodes { get; set; }
    public IReadOnlyCollection<string> Edges { get; set; }
}


public class NodeEdgeSelection
{
    public IReadOnlyCollection<NodeSelection> Nodes { get; set; }
    public IReadOnlyCollection<EdgeSelection> Edges { get; set; }
}

public class NodeSelection
{
    public string Id { get; set; }
    public double X { get; set; }
    public double Y { get; set; }
}

public class EdgeSelection
{
    public string Id { get; set; }
    public string FromId { get; set; }
    public string ToId { get; set; }
}