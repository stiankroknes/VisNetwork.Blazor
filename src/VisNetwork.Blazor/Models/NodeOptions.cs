namespace VisNetwork.Blazor.Models;

public class NodeOption
{
    /// <summary>
    /// The width of the border of the node.
    /// </summary>
    public int? BorderWidth { get; set; }

    /// <summary>
    /// The width of the border of the node when it is selected. When undefined, the borderWidth * 2 is used.
    /// </summary>
    public int? BorderWidthSelected { get; set; }

    /// <summary>
    /// When the shape is set to image or circularImage, this option can be an URL to a backup image in case the URL supplied in the image option cannot be resolved.
    /// </summary>
    public string? BrokenImage { get; set; }

    /// <summary>
    /// When true, selecting or hovering on a node will cahnge it and itss label's characteristics according to the defaulult.
    /// When false, no change to the node or its label will occur when the node is chosen.
    /// Note: JS lib support boolen or object.
    /// </summary>
    public bool? Chosen { get; set; }

    /// <summary>
    /// Color options for node.
    /// Note: JS lib support setting single color value directly in this preoperty.
    /// </summary>
    public NodeColorType? Color { get; set; }

    /// <summary>
    /// Overall opacity of a node (overrides any opacity on border, background, image, and shadow).
    /// </summary>
    public double? Opacity { get; set; }

    /// <summary>
    /// Control if movement in either X or Y direction is enabled.
    /// Note: JS lib support setting boolean or object with fixed x or y.
    /// </summary>
    public NodeFixedOption? Fixed { get; set; }

    /// <summary>
    /// Defines the font of the label.
    /// Note: JS lib supports both string and object.
    /// </summary>
    public string? Font { get; set; }

    /// <summary>
    /// When not null, the node will belong to the defined group. 
    /// Styling information of that group will apply to this node.
    /// Node specific styling overrides group styling. 
    /// </summary>
    public string? Group { get; set; }

    /// <summary>
    /// Node height constraints. The default is no height constraint applied.
    /// </summary>
    public NodeHeightConstraint? NodeHeightConstraint { get; set; }

    /// <summary>
    /// When true, the node will not be shown. 
    /// It will still be part of the physics simulation though! 
    /// </summary>
    public bool? Hidden { get; set; }

    /// <summary>
    /// Icon option only used when shape is set to icon.
    /// </summary>
    public Icon? Icon { get; set; }

    /// <summary>
    /// When the shape is set to image or circularImage, this option should be the URL to an image. 
    /// If the image cannot be found, the brokenImage option can be used.
    /// Note: JS lib support string and object with selected image and unselected image.
    /// </summary>
    public string? Image { get; set; }

    /// <summary>
    /// Options for image padding inside the shape. Only used when shape is image or circularImage.
    /// </summary>
    public NodeImagePaddingOption? ImagePadding { get; set; }

    /// <summary>
    /// The label is the piece of text shown in or under the node, depending on the shape. 
    /// </summary>
    public string? Label { get; set; }

    /// <summary>
    /// Determines whether or not the label becomes bold when the node is selected.
    /// </summary>
    public bool? LabelHighlightBold { get; set; }

    /// <summary>
    /// When using the hierarchical layout, the level determines where the node is going to be positioned. 
    /// </summary>
    public int? Level { get; set; }

    /// <summary>
    /// The margins of the label. Only used when the shape is set to box, circle, database, icon or text.
    /// </summary>
    public NodeMarginOption? Margin { get; set; }

    /// <summary>
    /// The barnesHut physics model (which is enabled by default) is based on an inverted gravity model. 
    /// By increasing the mass of a node, you increase it's repulsion.
    /// Values between 0 and 1 are not recommended.
    /// Negative or zero values are not allowed.These will generate a console error and will be set to 1. 
    /// </summary>
    public int? Mass { get; set; }

    /// <summary>
    /// When false, the node is not part of the physics simulation. It will not move except for from manual dragging.
    /// </summary>
    public bool? Physics { get; set; }

    /// <summary>
    /// If the <see cref="Value"/> option is specified, the size of the nodes will be scaled according to the properties in this object.
    /// All node shapes can be scaled, but some only when label scaling is enabled as their size is based on the size of the label.
    /// Only scalable when label scaling is enabled are: ellipse, cricle, database, box, text.
    /// Always scalable are: image, circularImage, diamon, dot, star, triangle, triangleDown, hexagon, square and icon.
    /// Keep in mind that when using scaling, the <see cref="Size"/> option is neglected.
    /// </summary>
    public NodeScalingOptions? Scaling { get; set; }

    /// <summary>
    /// Option for node shadow.
    /// </summary>
    public NodeShadowOption? Shadow { get; set; }

    /// <summary>
    /// The shape defines what the node looks like. There are three types of nodes. 
    /// One type has the label inside of it and the other type has the label underneath it. 
    /// The third type is a custom shape you can draw whatever you want to represent the node. 
    /// 
    /// The types with the label inside of it are: ellipse, circle, database, box, text.
    /// The ones with the label outside of it are: image, circularImage, diamond, dot, star, triangle, triangleDown, hexagon, square and icon.
    /// 
    /// NOTE: JS lib support custom and create own using ctxRender option.
    /// </summary>
    public string? Shape { get; set; }


    //public NodeShapePropertiesOption? ShapeProperties { get; set; }

    /// <summary>
    /// The size is used to determine the size of node shapes that do not have the label inside of them. 
    /// These shapes are: image, circularImage, diamond, dot, star, triangle, triangleDown, hexagon, square and icon.
    /// </summary>
    public int? Size { get; set; }

    /// <summary>
    /// Title to be displayed in a pop-up when the user hovers over the node. 
    /// 
    /// NOTE: JS lib the title can be an HTML element or a string containing plain text.
    /// </summary>
    public string? Title { get; set; }

    /// <summary>
    /// When a value is set, the nodes will be scaled using the options in the scaling object defined above.
    /// </summary>
    public string? Value { get; set; }

    /// <summary>
    /// This gives a node its initial position on the x axis. When using hierarchical layout, this value has no effect. 
    /// When using stabilization, the stabilized position may be different from the initial one 
    /// (the node will start at this position but may move to different location based on the stabilization configuration). 
    /// To lock the node to this position, turn off physics or set fixed.x node option to true. 
    /// </summary>
    public int? X { get; set; }

    /// <summary>
    /// This gives a node its initial position on the y axis. When using hierarchical layout, this value has no effect. 
    /// When using stabilization, the stabilized position may be different from the initial one 
    /// (the node will start at this position but may move to different location based on the stabilization configuration). 
    /// To lock the node to this position, turn off physics or set fixed.y node option to true. 
    /// </summary>
    public int? Y { get; set; }
}

public class NodeShadowOption
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

public class NodeImagePaddingOption
{
    /// <summary>
    /// The top padding of the image inside the shape is set to this value. 
    /// The default is 0.
    /// </summary>
    public int? Top { get; set; }

    /// <summary>
    /// The right margin of the image inside the shape is set to this value. 
    /// The default is 0.
    /// </summary>
    public int? Right { get; set; }

    /// <summary>
    /// The bottom margin of the image inside the shape is set to this value. 
    /// The default is 0.
    /// </summary>
    public int? Bottom { get; set; }

    /// <summary>
    /// The left margin of the image inside the shape is set to this value. 
    /// The default is 0.
    /// </summary>
    public int? Left { get; set; }

    public static NodeImagePaddingOption CreateWithEqualPadding(int padding) =>
        new()
        {
            Top = padding,
            Right = padding,
            Bottom = padding,
            Left = padding,
        };
}

public class NodeFixedOption
{
    /// <summary>
    /// When true, the node will not move in the X direction.
    /// </summary>
    public bool X { get; set; }

    /// <summary>
    /// When true, the node will not move in the Y direction.
    /// </summary>
    public bool Y { get; set; }
}


public class NodeHeightConstraint
{
    /// <summary>
    ///  If a number is specified, the value is used as the minimum height of the node. 
    ///  The node's height will be set to the minimum if less than the value. 
    /// </summary>
    public int? Minimum { get; set; }

    /// <summary>
    /// Valid values are 'top', 'middle', and 'bottom'. 
    /// When specified, if the height of the label text is less than the minimum (including any top or bottom margins), it will be offset vertically to the designated position. 
    /// </summary>
    public string? Valign { get; set; }
}

public class NodeMarginOption
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

    public static NodeMarginOption CreateWithEqualPadding(int padding) =>
        new()
        {
            Top = padding,
            Right = padding,
            Bottom = padding,
            Left = padding,
        };
}

public class Icon
{
    /// <summary>
    /// The possible values for the face option are any font faces that are loaded on given page such as 'FontAwesome' or 'Ionicons'.
    /// </summary>
    public string? Face { get; set; }

    /// <summary>
    /// This is the code of the icon, for example '\uf007'. 
    /// </summary>
    public string? Code { get; set; }

    /// <summary>
    /// The size of the icon.
    /// </summary>
    public int? Size { get; set; }

    /// <summary>
    /// The color of the icon.
    /// </summary>
    public string? Color { get; set; }

    /// <summary>
    /// This allows for weight to be forced regardless of selection status. For example Font Awesome 5 doesn't work properly unless weight is forced to 'bold' or 700. 
    /// If this option is set then selection is indicated by bigger size instead of bold font face. 
    /// </summary>

    public string? Weight { get; set; }
}

/// <summary>
/// The color object contains the color information of the node in every situation.
/// </summary>
public class NodeColorType
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

public class NodeScalingOptions
{
    /// <summary>
    /// If nodes have a value, their sizes are determined by the value, the scaling function and the min max values.
    /// The min value is the minimum allowed value. 
    ///  The default is 10.
    /// </summary>
    public int? Min { get; set; }

    /// <summary>
    /// This is the maximum allowed size when the nodes are scaled using the value option. 
    /// The default is 30.
    /// </summary>
    public int? Max { get; set; }

    /// <summary>
    /// This can be false if the label is not allowed to scale with the node. If true it will scale using default settings.
    /// Note: JS lib supports Object or Boolean.
    /// </summary>
    public bool? Label { get; set; }
}