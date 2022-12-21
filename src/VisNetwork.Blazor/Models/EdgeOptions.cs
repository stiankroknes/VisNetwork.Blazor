namespace VisNetwork.Blazor.Models;

public class EdgeOption
{
    /// <summary>
    /// Options for the size of the arrowheads.
    /// </summary>
    public Arrows? Arrows { get; set; }

    /// <summary>
    /// Adjust the endpoints. It can be useful if you want to have the endpoints placed on the nodes borders.
    /// This feature is only possible when the <see cref="ArrowStrikethrough"/> is true.
    /// </summary>
    public EndPointOffsetOption? EndPointOffset { get; set; }

    /// <summary>
    /// When false, the edge stops at the arrow.
    /// This can be useful if you have thick lines and you want the arrow to end in a point.
    /// Middle arrows are not affected by this. 
    /// The default is true.
    /// </summary>
    public bool? ArrowStrikethrough { get; set; }

    /// <summary>
    /// When true, selecting or hovering on an edge will change it and its label's characteristics according to the default.
    /// When false, no change to the edge or its label will occur when the edge is chosen.
    /// The defualt is true.
    /// </summary>
    public bool? Chosen { get; set; }

    /// <summary>
    /// Color information of the edge.
    /// </summary>
    public ColorType? Color { get; set; }

    /// <summary>
    /// When true, the edge will be drawn as a dashed line.
    /// Note: JS lib support Array or Boolean.
    /// The default is false.
    /// </summary>
    public bool? Dashes { get; set; }

    /// <summary>
    /// 
    /// </summary>
    public string? Font { get; set; }

    /// <summary>
    /// When true, the edge is not drawn.
    /// It is part still part of the physics simulation however!
    /// The default is false.
    /// </summary>
    public bool? Hidden { get; set; }

    /// <summary>
    /// Assuming the hover behaviour is enabled in the interaction module, the hoverWidth determines the width of the edge when the user hovers over it with the mouse.
    /// The default is 0.5.
    /// </summary>
    public decimal? HoverWidth { get; set; }

    /// <summary>
    /// The label of the edge.
    /// </summary>
    public string? Label { get; set; }

    /// <summary>
    /// Determines whether or not the label becomes bold when the edge is selected.
    /// The default is true.
    /// </summary>
    public bool? LabelHighlightBold { get; set; }

    /// <summary>
    /// The physics simulation gives edges a spring length. This value can override the length of the spring in rest.
    /// </summary>
    public int? Length { get; set; }

    /// <summary>
    /// When true, the edge is part of the physics simulation. When false, it will not act as a spring.
    /// The default is true.
    /// </summary>
    public bool? Physics { get; set; }

    public EdgeScalingOptions? Scaling { get; set; }

    /// <summary>
    /// The selectionWidth determines the width of the edge when the edge is selected.
    /// The defualt is 1.
    /// Note: JS lib support Number or Function.
    /// </summary>
    public int? SelectionWidth { get; set; }

    /// <summary>
    /// The width of the edge. If <see cref="Value"/> is set, this is not used.
    /// </summary>
    public int? Width { get; set; }

    /// <summary>
    /// If a number is specified, the maximum width of the edge's label is set to the value. The edge's label's lines will be broken on spaces to stay below the maximum.
    /// </summary>
    public int? WidthConstraint { get; set; }

    /// <summary>
    /// When a value is set, the edges' width will be scaled using the options in the scaling object defined above. 
    /// </summary>
    public int? Value { get; set; }

    /// <summary>
    /// Option for circle drawn when to and from nodes are the same.
    /// </summary>
    public EdgeSelfReferenceOption? SelfReference { get; set; }

    /// <summary>
    /// Option for edge shadow.
    /// </summary>
    public EdgeShadowOption? Shadow { get; set; }

    /// <summary>
    /// Options for edge smoothing.
    /// </summary>
    /// <value></value>
    public EdgeSmoothOptions? Smooth { get; set; }

    /// <summary>
    /// Title to be displayed in a pop-up when the user hovers over the edge.
    /// Note: JS lib support an HTML element or a string containing plain text.
    /// </summary>
    public string? Title { get; set; }
}

public class EdgeShadowOption
{
    /// <summary>
    ///  Toggle the casting of shadows.
    ///  If this option is not defined, it is set to true if any of the properties in this object are defined.
    ///  The default is false.
    /// </summary>
    public bool? Enabled { get; set; }

    /// <summary>
    /// The color size of the shadow as a string. Supported formats are 'rgb(255,255,255)', 'rgba(255,255,255,1)' and '#FFFFFF'.
    /// The default is 'rgba(0,0,0,0.5)'.
    /// </summary>
    public string? Color { get; set; }

    /// <summary>
    /// The blur size of the shadow.
    /// The default is 10.
    /// </summary>
    public int? Size { get; set; }

    /// <summary>
    /// The x offset.
    /// The default is 5.
    /// </summary>
    public int? X { get; set; }

    /// <summary>
    /// The y offset.
    /// The default is 5.
    /// </summary>
    public int? Y { get; set; }
}

public class EdgeSmoothOptions
{
    /// <summary>
    /// Toggle smooth curves on and off. This is an optional option. 
    /// If any of the other properties in this object are set, this option will be set to true.
    /// Default is true
    /// </summary>
    /// <value></value>
    public bool? Enabled { get; set;}

    /// <summary>
    /// Possible options: 'dynamic', 'continuous', 'discrete', 'diagonalCross', 'straightCross', 'horizontal', 'vertical', 'curvedCW', 'curvedCCW', 'cubicBezier'
    /// Default is 'dynamic'
    /// </summary>
    /// <value></value>
    public string? Type { get; set; }    

    /// <summary>
    /// Accepted options: ['horizontal', 'vertical', 'none']. This options is only used with the cubicBezier curves. 
    /// When true, horizontal is chosen, when false, the direction that is larger (x distance between nodes vs y distance between nodes) is used. 
    /// If the x distance is larger, horizontal. This is ment to be used with hierarchical layouts.
    /// JS lib supports bool or string
    /// Default is false/none
    /// </summary>
    /// <value></value>
    public string? ForceDirection { get; set; }

    /// <summary>
    /// Accepted range: 0 .. 1.0. This parameter tweaks the roundness of the smooth curves for all types EXCEPT dynamic.
    /// Default is 0.5
    /// </summary>
    /// <value></value>
    public decimal? Roundness { get; set; }
}

/// <summary>
/// Option for circle drawn when to and from nodes are the same.
/// </summary>
public class EdgeSelfReferenceOption
{
    /// <summary>
    /// This is the radius of circle.
    /// The default is 20.
    /// </summary>
    public int? Size { get; set; }

    /// <summary>
    /// This is the angle (Provided in radians) to indicate position for the circle.
    /// If position is not provided then it will be top-right (π / 4) corner. 
    /// The default is pi / 4.
    /// </summary>
    public decimal? Angle { get; set; }

    /// <summary>
    /// This is a flag that indicates whether self reference circle should be drawn as a full circle or rather should not overlap with parent node. 
    /// The feault is true.
    /// </summary>
    public bool? RenderBehindTheNode { get; set; }
}

public class EdgeScalingOptions
{
    /// <summary>
    ///  If edges have a value, their widths are determined by the value, the scaling function and the min max values.
    ///  The min value is the minimum allowed value. 
    ///  The default is 1.
    /// </summary>
    public int? Min { get; set; }

    /// <summary>
    /// This is the maximum allowed width when the edges are scaled using the value option.
    /// The default is 15.
    /// </summary>
    public int? Max { get; set; }

    /// <summary>
    /// When false, the label is not allowed to scale with the edge. If true it will scale using default settings.
    /// Note: JS lib supports Object or Boolean.
    /// </summary>
    public bool? Label { get; set; }
}

public class EndPointOffsetOption
{
    /// <summary>
    /// A negative number move the endpoint nearer the node's midpoint, and a positive number does the opposite.
    /// The default is 0.
    /// </summary>
    public int? From { get; set; }

    /// <summary>
    /// A negative number move the endpoint nearer the node's midpoint, and a positive number does the opposite.
    /// The default is 0.
    /// </summary>
    public int? To { get; set; }
}

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


    /// <summary>
    ///  The color of the edge when it is not selected or hovered over (assuming hover is enabled in the interaction module). 
    ///  The default is '#848484'.
    /// </summary>
    public string? Color { get; set; }

    /// <summary>
    /// The color the edge when it is selected.
    /// The default is '#848484'.
    /// </summary>
    public string? Highlight { get; set; }

    /// <summary>
    /// The color the edge when the mouse hovers over it (assuming hover is enabled in the interaction module).
    /// The default is '#848484'.
    /// </summary>
    public string? Hover { get; set; }

    /// <summary>
    /// The default value is 'from' the edge will inherit the color from the border of the node on the 'from' side.
    ///  When set to 'to', the border color from the 'to' node will be used.
    /// When set to 'both', the color will fade from the from color to the to color. 'both' is computationally intensive because the gradient is recomputed every redraw.
    /// This is required because the angles change when the nodes move.
    /// The default is 'from'.
    /// </summary>
    public string? Inherit { get; set; }

    /// <summary>
    /// It can be useful to set the opacity of an edge without manually changing all the colors.
    /// The opacity option will convert all colors (also when using inherit) to adhere to the supplied opacity.
    /// The allowed range of the opacity option is between 0 and 1.
    /// This is only done once so the performance impact is not too big. 
    /// The default is 1.0. 
    /// </summary>
    public double? Opacity { get; set; }
}

/// <summary>
/// Options for arrows for edge.
/// </summary>
public class Arrows
{
    /// <summary>
    /// Options for the 'to' side of the edge.
    /// </summary>
    public ArrowsOptions? To { get; set; }

    /// <summary>
    /// Similar to the 'to' object, but with an arrowhead in the center of the edge.
    /// The direction of the arrow can be flipped by using a negative value for arrows.middle.scaleFactor. 
    /// </summary>
    public ArrowsOptions? Middle { get; set; }

    /// <summary>
    /// Exactly the same as the to object but with an arrowhead at the from node of the edge. 
    /// </summary>
    public ArrowsOptions? From { get; set; }
}

/// <summary>
/// Options for arrow.
/// </summary>
public class ArrowsOptions
{
    /// <summary>
    /// Toggle the arrow on or off. 
    /// This option is optional, if undefined and the scaleFactor property is set, enabled will be set to true. 
    /// The default is false.
    /// </summary>
    public bool? Enabled { get; set; }

    /// <summary>
    /// The height of the image arrow. The height of the image file is used if this isn't defined.
    /// </summary>
    public int? ImageHeight { get; set; }

    /// <summary>
    /// The width of the image arrow. The width of the image file is used if this isn't defined. 
    /// </summary>
    public int? ImageWidth { get; set; }

    /// <summary>
    /// The scale factor allows you to change the size of the arrowhead.
    /// The default is 1.
    /// </summary>
    public int? ScaleFactor { get; set; } = 1;

    /// <summary>
    /// The URL for the image arrow type.
    /// </summary>
    public string? Src { get; set; }

    /// <summary>
    /// The type of endpoint.
    /// Possible values are: arrow, bar, circle and image. The default is arrow
    /// </summary>
    public string? Type { get; set; }
}
