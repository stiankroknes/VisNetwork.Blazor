namespace VisNetwork.Blazor.Models;

/// <summary>
/// This object defines the details of the label.
/// </summary>
public class Font
{
    /// <summary>
    /// Color of the label text.
    /// </summary>
    public string? Color { get; set; }

    /// <summary>
    /// Size of the label text.
    /// The default is 14.
    /// </summary>
    public int? Size { get; set; }

    /// <summary>
    /// Font face (or font family) of the label text.
    /// The default is 'arial'.
    /// </summary>
    public string? Face { get; set; }

    /// <summary>
    /// When not null but a color string, a background rectangle will be drawn behind the label in the supplied color. 
    /// </summary>
    public string? Background { get; set; }

    /// <summary>
    /// As an alternative to the background rectangle, a stroke can be drawn around the text. When a value higher than 0 is supplied, the stroke will be drawn.
    /// </summary>
    public int? StrokeWidth { get; set; }

    /// <summary>
    ///  This is the color of the stroke assuming the value for stroke is higher than 0. 
    /// </summary>
    public string? StrokeColor{ get; set; }

    /// <summary>
    /// Possible options: 'horizontal','top','middle','bottom'. The alignment determines how the label is aligned over the edge.
    /// The default value horizontal aligns the label horizontally, regardless of the orientation of the edge.
    /// When an option other than horizontal is chosen, the label will align itself according to the edge. 
    /// </summary>
    public string? Align { get; set; }

    /// <summary>
    /// A font-specific correction to the vertical positioning of the base font in the label text. (Positive is down.) 
    /// </summary>
    public string? Vadjust { get; set; }

    /// <summary>
    /// If false, the label is treated as pure text drawn with the base font.
    /// Note: Investigate use string or bool..
    /// </summary>
    public bool? Multi { get; set; }

}
