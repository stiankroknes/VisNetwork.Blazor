using System;
using VisNetwork.Blazor.Serializers;

namespace VisNetwork.Blazor.Models;

public class Font : FontInner, IValueOrObject<Font, FontInner>
{
    private static int SizeFromString(string sizeStr, int defaultSize = 14)
    {
        int size;
        if(!int.TryParse(sizeStr, out size) && sizeStr.Contains("px"))
        {
            var noPx = sizeStr.Replace("px", "");
            if(!int.TryParse(noPx, out size))
            {
                size = defaultSize;
            }
        }
        return size;
    }

    public Font FromValue(string? value)
    {
        if(value is null)
            return new Font();

        var pieces = value.Split(' ');
        if(pieces.Length != 3)
            throw new ArgumentException($"Must be in for form 'size face color'");

        return new Font() {
            Size = SizeFromString(pieces[0]),
            Face = pieces[1],
            Color = pieces[2]
        };
    } 

    public Font FromInner(FontInner? inner)
    {
        if(inner is null)
            return new Font();

        return new Font() {
            Color = inner.Color,
            Size = inner.Size,
            Face = inner.Face,
            Background = inner.Background,
            StrokeWidth = inner.StrokeWidth,
            StrokeColor = inner.StrokeColor,
            Align = inner.Align,
            Vadjust = inner.Vadjust,
            Multi = inner.Multi
        };
    }
}

/// <summary>
/// This object defines the details of the label.
/// </summary>
public class FontInner
{
    /// <summary>
    /// Color of the label text.
    /// </summary>
    public virtual string? Color { get; set; }

    /// <summary>
    /// Size of the label text.
    /// The default is 14.
    /// </summary>
    public virtual int? Size { get; set; }

    /// <summary>
    /// Font face (or font family) of the label text.
    /// The default is 'arial'.
    /// </summary>
    public virtual string? Face { get; set; }

    /// <summary>
    /// When not null but a color string, a background rectangle will be drawn behind the label in the supplied color. 
    /// </summary>
    public virtual string? Background { get; set; }

    /// <summary>
    /// As an alternative to the background rectangle, a stroke can be drawn around the text. When a value higher than 0 is supplied, the stroke will be drawn.
    /// </summary>
    public virtual int? StrokeWidth { get; set; }

    /// <summary>
    ///  This is the color of the stroke assuming the value for stroke is higher than 0. 
    /// </summary>
    public virtual string? StrokeColor{ get; set; }

    /// <summary>
    /// Possible options: 'horizontal','top','middle','bottom'. The alignment determines how the label is aligned over the edge.
    /// The default value horizontal aligns the label horizontally, regardless of the orientation of the edge.
    /// When an option other than horizontal is chosen, the label will align itself according to the edge. 
    /// </summary>
    public virtual string? Align { get; set; }

    /// <summary>
    /// A font-specific correction to the vertical positioning of the base font in the label text. (Positive is down.) 
    /// </summary>
    public virtual string? Vadjust { get; set; }

    /// <summary>
    /// If false, the label is treated as pure text drawn with the base font.
    /// Note: Investigate use string or bool..
    /// </summary>
    public virtual bool? Multi { get; set; }

}
