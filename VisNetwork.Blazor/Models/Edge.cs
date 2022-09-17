using System;

namespace VisNetwork.Blazor.Models;

public class EdgeOption
{
    public bool? ArrowStrikethrough { get; set; }
    public bool? Chosen { get; set; }
    public bool? Hidden { get; set; }
    public string Font { get; set; }
    public string Label { get; set; }
    public bool? LabelHighlightBold { get; set; }
    public int? Length { get; set; }
    /// <summary>
    /// Tooltip
    /// </summary>
    public string Title { get; set; }
    public ColorType Color { get; set; }
    public bool? Dashes { get; set; }
    // public int? Width { get; set; } 
    public bool? Physics { get; set; }
    public int? SelectionWidth { get; set; }// TODO: vis supports: function(width) {return width*2;}
    public Arrows Arrows { get; set; }
}

public class Edge : EdgeOption, IEquatable<Edge>
{
    public Edge() { }

    public Edge(string from, string to, string title = null)
    {
        From = from;
        To = to;
        Title = title;
    }
    public string Id { get; set; }

    public string From { get; set; }
    public string To { get; set; }

    public override int GetHashCode() => HashCode.Combine(From, To);

    public override bool Equals(object obj) => obj is Edge other && Equals(other);

    public bool Equals(Edge other) => other is object && other != null && other.From == From && other.To == To;
}