using System;
using System.Collections.Generic;
using System.Linq;
using VisNetwork.Blazor.Serializers;

namespace VisNetwork.Blazor.Models;

/// <summary>
/// Internal class for Options for arrows for edge.
/// </summary>
public class ArrowsInner
{
    /// <summary>
    /// Options for the 'to' side of the edge.
    /// </summary>
    public virtual ArrowsOptions? To { get; set; }

    /// <summary>
    /// Similar to the 'to' object, but with an arrowhead in the center of the edge.
    /// The direction of the arrow can be flipped by using a negative value for arrows.middle.scaleFactor. 
    /// </summary>
    public virtual ArrowsOptions? Middle { get; set; }

    /// <summary>
    /// Exactly the same as the to object but with an arrowhead at the from node of the edge. 
    /// </summary>
    public virtual ArrowsOptions? From { get; set; }
}

/// <summary>
/// Options for arrows for edge.
/// Provides a way to construct Arrows fully or from a simplified string version
/// </summary>
public class Arrows : ArrowsInner, IValueOrObject<Arrows, ArrowsInner>
{
    private readonly ArrowsOptions DefaultArrowOptions = new() {
        Enabled = true
    };

    private readonly Dictionary<string, ArrowsOptions?> optionsMap = new() {
        {"to", null},
        {"middle", null},
        {"from", null}
    };

    public Arrows() : base() {}

    public Arrows FromValue(string? value)
    {
        if(value is null)
            return new Arrows();

        foreach (var property in optionsMap.Keys.Where(k => value.Contains(k, StringComparison.OrdinalIgnoreCase)))
        {
            optionsMap[property] = DefaultArrowOptions;
        }

        var result = new Arrows() {
            To = optionsMap["to"],
            Middle = optionsMap["middle"],
            From = optionsMap["from"]
        };

        return result;
    }

    public Arrows FromInner(ArrowsInner? inner)
    {
        if(inner is null)
            return new Arrows();

        return new Arrows() {
            To = inner.To,
            Middle = inner.Middle,
            From = inner.From
        };
    }
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
