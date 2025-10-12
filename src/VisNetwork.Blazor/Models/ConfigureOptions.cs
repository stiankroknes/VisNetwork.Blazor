namespace VisNetwork.Blazor.Models;

/// <summary>
/// The options for the canvas.
/// </summary>
public class ConfigureOptions
{
    /// <summary>
    /// Toggle the configuration interface on or off.
    /// This is an optional parameter. If left undefined and any of the other properties of this object are defined, this will be set to true.
    /// The default is true.
    /// </summary>
    public bool? Enabled { get; set; }

    /// <summary>
    /// Any combination of the following is allowed: nodes, edges, layout, interaction, manipulation, physics, selection, renderer.
    /// Note: JS lib allos String, Array, Boolean and Function.
    /// </summary>
    public string? Filter { get; set; }

#pragma warning disable S125 // Sections of code should not be commented out
    /// <summary>
    /// This allows you to put the configure list in another HTML container than below the network. 
    /// </summary>
    //public ElementReference? Container {get;set;}
#pragma warning restore S125 // Sections of code should not be commented out

    /// <summary>
    /// Show the generate options button at the bottom of the configurator.
    /// The default is true.
    /// </summary>
    public bool? ShowButton { get; set; }
}
