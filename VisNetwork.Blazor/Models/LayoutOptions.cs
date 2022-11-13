namespace VisNetwork.Blazor.Models;

public class LayoutOptions
{
    /// <summary>
    /// Options for hierarchical layout.
    /// </summary>
    public HierarchicalOptions? Hierarchical { get; set; }

    /// <summary>
    /// When enabled, the network will use the Kamada Kawai algorithm for initial layout.
    /// For networks larger than 100 nodes, clustering will be performed automatically to reduce the amount of nodes.
    /// This can greatly improve the stabilization times.
    /// If the network is very interconnected (no or few leaf nodes), this may not work and it will revert back to the old method.
    /// Performance will be improved in the future.
    /// The default is true.
    /// </summary>
    public bool? ImprovedLayout { get; set; }

    /// <summary>
    /// Cluster threshold to which improvedLayout applies.
    /// The default is 150.
    /// </summary>
    public int? ClusterThreshold { get; set; }
}

public class HierarchicalOptions
{
    /// <summary>
    /// Toggle the usage of the hierarchical layout system. If this option is not defined, it is set to true if any of the properties in this object are defined.
    /// The default is false.
    /// </summary>
    public bool? Enabled { get; set; }

    /// <summary>
    /// The distance between the different levels.
    /// The default is 150.
    /// </summary>
    public int? LevelSeparation { get; set; }

    /// <summary>
    /// Minimum distance between nodes on the free axis.
    /// This is only for the initial layout.
    /// If you enable physics, the node distance there will be the effective node distance.
    /// The default is 100.
    /// </summary>
    public int? NodeSpacing { get; set; }

    /// <summary>
    /// Distance between different trees (independent networks).
    /// This is only for the initial layout. If you enable physics, the repulsion model will denote the distance between the trees.
    /// The default is 200.
    /// </summary>
    public int? TreeSpacing { get; set; }

    /// <summary>
    /// Method for reducing whitespace. Can be used alone or together with edge minimization.
    /// Each node will check for whitespace and will shift it's branch along with it for as far as it can, respecting the nodeSpacing on any level.
    /// This is mainly for the initial layout. If you enable physics, the layout will be determined by the physics.
    /// This will greatly speed up the stabilization time though!
    /// The default is true.
    /// </summary>
    public bool? BlockShifting { get; set; }

    /// <summary>
    /// Method for reducing whitespace. Can be used alone or together with block shifting.
    /// Enabling block shifting will usually speed up the layout process.
    /// Each node will try to move along its free axis to reduce the total length of it's edges.
    /// This is mainly for the initial layout. If you enable physics, the layout will be determined by the physics.
    /// This will greatly speed up the stabilization time though!
    /// The default is true.
    /// </summary>
    public bool? EdgeMinimization { get; set; }

    /// <summary>
    /// When true, the parents nodes will be centered again after the layout algorithm has been finished.
    /// </summary>
    public bool? ParentCentralization { get; set; }

    /// <summary>
    /// The direction of the hierarchical layout. The available options are: UD, DU, LR, RL.
    /// To simplify: up-down, down-up, left-right, right-left.
    /// The default is UD.
    /// </summary>
    public string? Direction { get; set; }

    /// <summary>
    /// he algorithm used to ascertain the levels of the nodes based on the data. The possible options are: hubsize, directed.
    /// Hubsize takes the nodes with the most edges and puts them at the top.From that the rest of the hierarchy is evaluated.
    /// Directed adheres to the to and from data of the edges.A --> B so B is a level lower than A.
    /// The default is hubSize.
    /// </summary>
    public string? SortMethod { get; set; }

    /// <summary>
    /// Controls whether in directed layout should all the roots be lined up at the top and their child nodes as close to their roots as possible (roots)
    /// or all the leaves lined up at the bottom and their parents as close to their children as possible (leaves, default). 
    /// The default is roots.
    /// </summary>
    public string? ShakeTowards { get; set; }
}