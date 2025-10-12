namespace VisNetwork.Blazor.Models;

public class Font
{
    /// <summary>
    /// Color of the label text.
    /// The default is: '#343434'
    /// </summary>
    public string? Color { get; set; }

    /// <summary>
    /// Size of the label text.
    /// The default is: 14
    /// </summary>
    public int? Size { get; set; }

    /// <summary>
    /// Font face (or font family) of the label text.
    /// The default is: 'arial'
    /// </summary>
    public string? Face { get; set; }

    /// <summary>
    /// When not null but a color string, a background rectangle will be drawn behind the label in the supplied color.
    /// </summary>
    public string? Background { get; set; }

    /// <summary>
    /// As an alternative to the background rectangle, a stroke can be drawn around the text. 
    /// When a value higher than 0 is supplied, the stroke will be drawn.
    /// Is pixel value.
    /// </summary>
    public int? StrokeWidth { get; set; }

    /// <summary>
    /// This is the color of the stroke assuming the value for stroke is higher than 0. 
    /// The default is: '#ffffff'
    /// </summary>
    public string? StrokeColor { get; set; }

    /// <summary>
    /// This can be set to 'left' to make the label left-aligned. Otherwise, defaults to 'center'.
    /// The default is: 'center'
    /// </summary>
    public string? Align { get; set; }

    /// <summary>
    /// A font-specific correction to the vertical positioning of the base font in the label text. (Positive is down.)
    /// </summary>
    public int? Vadjust { get; set; }

    /// <summary>
    /// If 'html' the label may be multifonted, with bold, italic and code markup, interpreted as html.
    /// If the value is 'markdown' or 'md' the label may be multifonted, with bold, italic and code markup, interpreted as markdown. 
    /// The bold, italic, bold-italic and monospaced fonts may be set up under in the font.bold, font.ital, font.boldital and font.mono properties, respectively.
    /// Note: JS lib supports both boolean and string.
    /// </summary>
    public string? Multi { get; set; } // bool or string

    /// <summary>
    /// Gets or sets the font style to apply bold formatting to the text, if specified.
    /// </summary>
    public FontStyles? Bold { get; set; }

    /// <summary>
    /// Gets or sets the italic font style to apply, if any.
    /// </summary>
    public FontStyles? Ital { get; set; }

    /// <summary>
    /// Gets or sets the font style to apply when both bold and italic formatting are required.
    /// </summary>
    public FontStyles? BoldItal { get; set; }

    /// <summary>
    /// Gets or sets the font style to use for monospaced text elements.
    /// </summary>
    public FontStyles? Mono { get; set; }
}

public class FontStyles
{
    /// <summary>
    /// Color of the font. 
    /// </summary>
    public string? Color { get; set; }

    /// <summary>
    /// Size of the font.
    /// </summary>
    public int? Size { get; set; }

    /// <summary>
    /// Font face (or font family).
    /// </summary>
    public string? Face { get; set; }

    /// <summary>
    /// A string added to the face and size when determining the font. 
    /// </summary>
    public string? Mod { get; set; }

    /// <summary>
    /// A font-specific correction to the vertical positioning of the font (Positive is down.)
    /// </summary>
    public int? Vadjust { get; set; }
}