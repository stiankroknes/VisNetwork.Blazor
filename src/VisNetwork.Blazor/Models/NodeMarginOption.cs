using VisNetwork.Blazor.Serializers;

namespace VisNetwork.Blazor.Models;

public class NodeMarginOption : NodeMarginOptionInner, IValueOrObject<NodeMarginOption, NodeMarginOptionInner>
{
    public NodeMarginOption FromInner(NodeMarginOptionInner? inner)
    {
        if(inner is null)
            return new NodeMarginOption();

        return new NodeMarginOption() {
            Top = inner.Top,
            Right = inner.Right,
            Bottom = inner.Bottom,
            Left = inner.Left
        };
    }

    public NodeMarginOption FromValue(string? value)
    {
        if(value is null)
            return new NodeMarginOption();

        int margin = int.Parse(value);

        return NodeMarginOption.CreateWithEqualMargin(margin);   
    }

    public static NodeMarginOption CreateWithEqualMargin(int margin) =>
        new()
        {
            Top = margin,
            Right = margin,
            Bottom = margin,
            Left = margin,
        };

}

public class NodeMarginOptionInner
{
    /// <summary>
    /// The top margin of the label is set to this value.
    /// The default is 5.
    /// </summary>
    public int? Top { get; set; }

    /// <summary>
    /// The right margin of the label is set to this value.
    /// The default is 5.
    /// </summary>
    public int? Right { get; set; }

    /// <summary>
    /// The bottom margin of the label is set to this value.
    /// The default is 5.
    /// </summary>
    public int? Bottom { get; set; }

    /// <summary>
    /// The left margin of the label is set to this value.
    /// The default is 5.
    /// </summary>
    public int? Left { get; set; }
}
