namespace VisNetwork.Blazor.Models
{
    public class NetworkOptions
    {
        public bool? AutoResize { get; set; }
        public string Width { get; set; }
        public string Height { get; set; }
        public string Locale { get; set; }
        public bool? ClickToUSe { get; set; }

        public ConfigureOptions Configure { get; set; }

        /// <summary>
        /// Default options for all edges
        /// </summary>
        /// <value></value>
        public EdgeOption Edges { get; set; }

        /// <summary>
        /// Default options for all nodes
        /// </summary>
        /// <value></value>
        public NodeOption Nodes { get; set; }
        // TODO groups, can add group:'myGroup' to node, and define styling for groups here
        public LayoutOptions Layout { get; set; }

        public InteractionOptions Interaction { get; set; }
        public ManipulationOptions Manipulation { get; set; }

        public PhysicsOptions Physics { get; set; }
    }

    // Configure options

    public class ConfigureOptions
    {
        public bool? Enabled { get; set; }
        public string Filter { get; set; } // TODO: can be string, array, boolean, function
                                           // public ElementReference Container {get;set;}
        public bool? ShowButton { get; set; }
    }

    // Manipulation options
    public class ManipulationOptions
    {
        public bool? Enabled { get; set; }
        public bool? InitiallyActive { get; set; }
        public bool? AddNode { get; set; } // TODO: bool or function, wrap this
        public bool? AddEdge { get; set; } // TODO: bool or function, wrap this
        // public xxx EditNode { get; set; } // TODO function
        public bool? EditEdge { get; set; } // TODO bool or function, wrap this
        public bool? DeleteNode { get; set; }// TODO bool or function, wrap this
        public bool? DeleteEdge { get; set; }
        public NodeOption ControlNodeStyle { get; set; }
    }

    // Interaction options
    public class InteractionOptions
    {
        public bool? DragNodes { get; set; }
        public bool? DragView { get; set; }
        public bool? HideEdgesOnDrag { get; set; }
        public bool? HideEdgesOnZoom { get; set; }
        public bool? HideNodesOnDrag { get; set; }
        public bool? Hover { get; set; }
        public bool? HoverConnectedEdges { get; set; }
        public KeyboardOption Keyboard { get; set; }
        public bool? Multiselect { get; set; }
        public bool? NavigationButtons { get; set; }
        public bool? Selectable { get; set; }
        public bool? SelectConnectedEdges { get; set; }
        public int? TooltipDelay { get; set; }
        public int? ZoomSpeed { get; set; }
        public bool? ZoomView { get; set; }
    }

    public class KeyboardOption
    {
        public bool? Enabled { get; set; }
        public SpeedOption Speed { get; set; }
        public bool? BindToWindow { get; set; }
    }

    public class SpeedOption
    {
        public int? X { get; set; }
        public int? Y { get; set; }
        public decimal? Zoom { get; set; }
    }


    // Physics options

    public class PhysicsOptions
    {
        public bool? Enabled { get; set; }
        public BarnesHutOption BarnesHut { get; set; }
        public ForceAtlas2BasedOption ForceAtlas2Based { get; set; }
        public RepulsionOption Repulsion { get; set; }
        public HierarchicalRepulsionOption HierarchicalRepulsion { get; set; }
        public decimal? MaxVelocity { get; set; }
        public decimal? MinVelocity { get; set; }
        /// <summary>
        /// Possible options: 'barnesHut', 'repulsion', 'hierarchicalRepulsion', 'forceAtlas2Based'. 
        /// </summary>
        public string Solver { get; set; }
        public StabilizationOption Stabilization { get; set; }

        public decimal? Timestep { get; set; }
        public bool? AdaptiveTimestep { get; set; }
        public WindOption Wind { get; set; }
    }

    public class BarnesHutOption
    {
        public decimal? Theta { get; set; }
        public int? GravitationalConstant { get; set; }
        public decimal? CentralGravity { get; set; }
        public int? SpringLength { get; set; }
        public decimal? SpringConstant { get; set; }
        public decimal? Damping { get; set; }
        public double? AvoidOverlap { get; set; }
    }

    public class ForceAtlas2BasedOption
    {
        public decimal? Theta { get; set; }
        public int? GravitationalConstant { get; set; }
        public decimal? CentralGravity { get; set; }
        public decimal? SpringConstant { get; set; }
        public int? SpringLength { get; set; }
        public decimal? Damping { get; set; }
        public double? AvoidOverlap { get; set; }
    }

    public class RepulsionOption
    {
        public decimal? CentralGravity { get; set; }
        public int? SpringLength { get; set; }
        public decimal? SpringConstant { get; set; }
        public int? NodeDistance { get; set; }
        public decimal? Damping { get; set; }
    }

    public class HierarchicalRepulsionOption
    {
        public decimal? CentralGravity { get; set; }
        public int? SpringLength { get; set; }
        public decimal? SpringConstant { get; set; }
        public int? NodeDistance { get; set; }
        public decimal? Damping { get; set; }
        public double? AvoidOverlap { get; set; }
    }

    public class StabilizationOption
    {
        public bool? Enabled { get; set; }
        public int? Iterations { get; set; }
        public int? UpdateInterval { get; set; }
        public bool? OnlyDynamicEdges { get; set; }
        public bool? Fit { get; set; }
    }

    public class WindOption
    {
        public int? X { get; set; }
        public int? Y { get; set; }
    }

    // Layout options

    public class LayoutOptions
    {
        public HierarchicalOptions Hierarchical { get; set; }
        public bool? ImprovedLayout { get; set; }
        public int? ClusterThreshold { get; set; }
    }

    public class HierarchicalOptions
    {
        /// <summary>
        /// Toggle the usage of the hierarchical layout system. If this option is not defined, it is set to true if any of the properties in this object are defined. 
        /// </summary>
        public bool? Enabled { get; set; }
        public int? LevelSeparation { get; set; }
        public int? NodeSpacing { get; set; }
        public int? TreeSpacing { get; set; }
        public bool? BlockShifting { get; set; }
        public bool? EdgeMinimization { get; set; }

        /// <summary>
        /// When true, the parents nodes will be centered again after the layout algorithm has been finished.
        /// </summary>
        public bool? ParentCentralization { get; set; }

        /// <summary>
        /// The direction of the hierarchical layout. The available options are: UD, DU, LR, RL. To simplify: up-down, down-up, left-right, right-left.
        /// </summary>
        public string Direction { get; set; }

        /// <summary>
        /// he algorithm used to ascertain the levels of the nodes based on the data. The possible options are: hubsize, directed.
        /// Hubsize takes the nodes with the most edges and puts them at the top.From that the rest of the hierarchy is evaluated.
        /// Directed adheres to the to and from data of the edges.A --> B so B is a level lower than A.
        /// </summary>
        public string SortMethod { get; set; }

        /// <summary>
        /// Controls whether in directed layout should all the roots be lined up at the top and their child nodes as close to their roots as possible (roots)
        /// or all the leaves lined up at the bottom and their parents as close to their children as possible (leaves, default). 
        /// </summary>
        public string ShakeTowards { get; set; }
    }
}