using VisNetwork.Blazor.Serializers;

namespace VisNetwork.Blazor.Models;

/// <summary>
/// Create a <see cref="NodeColorTypeInner"/> from a simple string value such as '#234532', 'red' or 'rgba(120,32,12,1)'
/// The supplied string is passed through to the <see cref="NodeColorTypeInner.Background"/> property
/// </summary>
public class NodeColorType : NodeColorTypeInner, IValueOrObject<NodeColorType, NodeColorTypeInner>
{
    public NodeColorType FromInner(NodeColorTypeInner? inner)
    {
        if(inner is null)
            return new NodeColorType();

        var newColorType = new NodeColorType() {
            Background = inner.Background,
            Border = inner.Border
        };

        if(inner.Hover is not null)
        {
            newColorType.Hover = new NodeColorTypeInner.BorderBackgroundColor() {
                Background = inner.Hover.Background,
                Border = inner.Hover.Border
            };
        }

        if(inner.Highlight is not null)
        {
            newColorType.Highlight = new NodeColorTypeInner.BorderBackgroundColor() {
                Background = inner.Highlight.Background,
                Border = inner.Highlight.Border
            };
        }

        return newColorType;
    }

    public NodeColorType FromValue(string? value)
    {
        if(value is null)
            return new NodeColorType();

        return new NodeColorType() {
            Background = value,
            Border = value,
        };
    }
}

/// <summary>
/// The color object contains the color information of the node in every situation.
/// This is the full object. 
/// </summary>
public class NodeColorTypeInner
{
    /// <summary>
    /// The color of the background of the node when it is not selected or hovered over (assuming hover is enabled in the interaction module). 
    /// </summary>
    public string? Background { get; set; }

    /// <summary>
    /// The color of the border of the node when it is not selected or hovered over (assuming hover is enabled in the interaction module).
    /// </summary>
    public string? Border { get; set; }

    /// <summary>
    /// The color of the border and background of the node when the mouse hovers over it (assuming hover is enabled in the interaction module). 
    /// </summary>
    public BorderBackgroundColor? Hover { get; set; }

    /// <summary>
    /// The color of the border and background of the node when it is selected.
    /// </summary>
    public BorderBackgroundColor? Highlight { get; set; }

    public class BorderBackgroundColor
    {
        /// <summary>
        /// The color of the border of the node.
        /// </summary>
        public string? Border { get; set; }

        /// <summary>
        /// The color of the background of the node.
        /// </summary>
        public string? Background { get; set; }
    }
}
