using System;

namespace VisNetwork.Blazor.Models
{
    public class NodeOption
    {
        public int? BorderWidth { get; set; }
        public int? BorderWidthSelected { get; set; }
        public bool? Chosen { get; set; }
        public string Font { get; set; }
        public string Group { get; set; }
        public bool? Hidden { get; set; }
        public string Image { get; set; } // TODO can be string , or object with selected, unselected
        public int? Level { get; set; }
        public string Title { get; set; }
        public int? X { get; set; }

        public int? Y { get; set; }

        public string Label { get; set; }
        // The types with the label inside of it are: ellipse, circle, database, box, text.
        // The ones with the label outside of it are: image, circularImage, diamond, dot, star, triangle, triangleDown, hexagon, square and icon.
        public string Shape { get; set; }
        public NodeColorType Color { get; set; }
        public double? Opacity { get; set; }


        /// <summary>
        /// Only when <see cref="Shape"/> is set to icon.
        /// </summary>
        public Icon Icon { get; set; }
    }

    public class Node : NodeOption, IEquatable<Node>
    {
        public string Id { get; set; }

        public Node() { }
        
        public Node(string id, string label, int level, string shape, string title = null)
        {
            Id = id;
            Label = label;
            Level = level;
            Shape = shape;
            Title = title;
        }
        public override bool Equals(object obj) => obj is Node other && Equals(other);

        public bool Equals(Node other) => other is object && other != null && other.Id == Id;

        public override int GetHashCode() => Id.GetHashCode();
    }

    public class NodeColorType
    {
        public string Color { get; set; }
        public string Background { get; set; }
        public BorderBackgroundColor Hover { get; set; }
        public BorderBackgroundColor Highlight { get; set; }
        public double? Opacity { get; set; }

        public class BorderBackgroundColor
        {
            public string Border { get; set; }
            public string Background { get; set; }
        }
    }

}