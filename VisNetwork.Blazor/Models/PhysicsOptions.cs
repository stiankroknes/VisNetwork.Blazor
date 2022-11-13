namespace VisNetwork.Blazor.Models;

// Physics options
public class PhysicsOptions
{
    /// <summary>
    /// Toggle the physics system on or off. This property is optional.
    /// If you define any of the options below and enabled is undefined, this will be set to true.
    /// The default is true.
    /// </summary>
    public bool? Enabled { get; set; }

    /// <summary>
    /// Options for BarnesHut solver. Recommended solver for non-hierarchical layouts.
    /// </summary>
    public BarnesHutOption? BarnesHut { get; set; }

    /// <summary>
    /// Options for Force Atlas 2 solver.
    /// </summary>
    public ForceAtlas2BasedOption? ForceAtlas2Based { get; set; }

    /// <summary>
    /// Options for repulsion solver. Assumes nodes have a simplified repulsion field around them. 
    /// It's force linearly decreases from 1(at 0.5*nodeDistance and smaller) to 0 (at 2*nodeDistance).
    /// </summary>
    public RepulsionOption? Repulsion { get; set; }

    /// <summary>
    /// Options for the hierarchical repulsion model.
    /// Based on the repulsion solver but the levels are taken into account and the forces are normalized.
    /// </summary>
    public HierarchicalRepulsionOption? HierarchicalRepulsion { get; set; }

    /// <summary>
    ///  The physics module limits the maximum velocity of the nodes to increase the time to stabilization. This is the maximum value.
    ///  The default is 50.
    /// </summary>
    public decimal? MaxVelocity { get; set; }

    /// <summary>
    /// Once the minimum velocity is reached for all nodes, we assume the network has been stabilized and the simulation stops.
    /// The default is 0.1.
    /// </summary>
    public decimal? MinVelocity { get; set; }

    /// <summary>
    /// Possible options: 'barnesHut', 'repulsion', 'hierarchicalRepulsion', 'forceAtlas2Based'.
    /// When setting the hierarchical layout, the hierarchical repulsion solver is automatically selected, regardless of what you fill in here. 
    /// The default is barnesHut.
    /// </summary>
    public string? Solver { get; set; }

    /// <summary>
    /// Options for stabilization.
    /// </summary>
    public StabilizationOption? Stabilization { get; set; }

    /// <summary>
    /// The physics simulation is discrete. This means we take a step in time, calculate the forces, move the nodes and take another step.
    /// If you increase this number the steps will be too large and the network can get unstable.
    /// If you see a lot of jittery movement in the network, you may want to reduce this value a little.
    /// The default is 0.5.
    /// </summary>
    public decimal? Timestep { get; set; }


    /// <summary>
    /// If this is enabled, the timestep will intelligently be adapted (only during the stabilization stage if stabilization is enabled!) to greatly decrease stabilization times. 
    /// The timestep configured above is taken as the minimum timestep
    /// The default is true.
    /// </summary>
    public bool? AdaptiveTimestep { get; set; }

    /// <summary>
    /// A force that pushes all non-fixed nodes in the given direction.
    /// Requires all nodes are connected to nodes which are 'fixed' otherwise non-attached nodes will keep moving indefinitely.
    /// </summary>
    public WindOption? Wind { get; set; }
}


public class BarnesHutOption
{
    /// <summary>
    /// This parameter determines the boundary between consolidated long range forces and individual short range forces.
    /// To oversimplify higher values are faster but generate more errors, lower values are slower but with less errors. 
    /// The default is 0.5.
    /// </summary>
    public decimal? Theta { get; set; }

    /// <summary>
    ///  Gravity attracts. We like repulsion.
    ///  So the value is negative. If you want the repulsion to be stronger, decrease the value (so -10000, -50000). 
    ///  The default is -2000.
    /// </summary>
    public int? GravitationalConstant { get; set; }

    /// <summary>
    /// There is a central gravity attractor to pull the entire network back to the center.
    /// The default is 0.3.
    /// </summary>
    public decimal? CentralGravity { get; set; }

    /// <summary>
    /// The edges are modelled as springs. This springLength here is the rest length of the spring.
    /// The default is 95.
    /// </summary>
    public int? SpringLength { get; set; }

    /// <summary>
    /// This is how 'sturdy' the springs are. Higher values mean stronger springs.
    /// The default is 0.04.
    /// </summary>
    public decimal? SpringConstant { get; set; }

    /// <summary>
    /// Accepted range: [0 .. 1].
    /// The damping factor is how much of the velocity from the previous physics simulation iteration carries over to the next iteration. 
    /// The default is 0.09. 
    /// </summary>
    public decimal? Damping { get; set; }

    /// <summary>
    ///  Accepted range: [0 .. 1]. 
    ///  When larger than 0, the size of the node is taken into account.
    ///  The distance will be calculated from the radius of the encompassing circle of the node for both the gravity model. Value 1 is maximum overlap avoidance.
    ///  The default is 0.
    /// </summary>
    public double? AvoidOverlap { get; set; }
}

public class ForceAtlas2BasedOption
{
    /// <summary>
    ///  This parameter determines the boundary between consolidated long range forces and individual short range forces.
    ///  To oversimplify higher values are faster but generate more errors, lower values are slower but with less errors. 
    ///  The default is 0.5.
    /// </summary>
    public decimal? Theta { get; set; }

    /// <summary>
    ///  This is similar to the barnesHut method except that the falloff is linear instead of quadratic.
    ///  The connectivity is also taken into account as a factor of the mass.
    ///  If you want the repulsion to be stronger, decrease the value (so -1000, -2000).
    ///  The default is -50.
    /// </summary>
    public int? GravitationalConstant { get; set; }

    /// <summary>
    /// There is a central gravity attractor to pull the entire network back to the center.
    /// This is not dependent on distance.
    /// The default is 0.01.
    /// </summary>
    public decimal? CentralGravity { get; set; }

    /// <summary>
    /// The edges are modelled as springs. This springLength here is the rest length of the spring.
    /// The default is 100.
    /// </summary>
    public int? SpringLength { get; set; }

    /// <summary>
    /// This is how 'sturdy' the springs are. Higher values mean stronger springs.
    /// The default is 0.08.
    /// </summary>
    public decimal? SpringConstant { get; set; }

    /// <summary>
    /// Accepted range: [0 .. 1].
    /// The damping factor is how much of the velocity from the previous physics simulation iteration carries over to the next iteration.
    /// The default is 0.4.
    /// </summary>
    public decimal? Damping { get; set; }

    /// <summary>
    /// Accepted range: [0 .. 1].
    /// When larger than 0, the size of the node is taken into account.
    /// The distance will be calculated from the radius of the encompassing circle of the node for both the gravity model. Value 1 is maximum overlap avoidance. 
    /// The default is 0.
    /// </summary>
    public double? AvoidOverlap { get; set; }
}

public class RepulsionOption
{
    /// <summary>
    /// This is the range of influence for the repulsion.
    /// The default is 100.
    /// </summary>
    public int? NodeDistance { get; set; }

    /// <summary>
    /// There is a central gravity attractor to pull the entire network back to the center.
    /// The default is 0.2.
    /// </summary>
    public decimal? CentralGravity { get; set; }

    /// <summary>
    /// The edges are modelled as springs. This springLength here is the rest length of the spring.
    /// The default is 200.
    /// </summary>
    public int? SpringLength { get; set; }

    /// <summary>
    /// This is how 'sturdy' the springs are. Higher values mean stronger springs.
    /// The default is 0.05.
    /// </summary>
    public decimal? SpringConstant { get; set; }

    /// <summary>
    /// Accepted range: [0 .. 1].
    /// The damping factor is how much of the velocity from the previous physics simulation iteration carries over to the next iteration.
    /// The default is 0.09.
    /// </summary>
    public decimal? Damping { get; set; }
}

public class HierarchicalRepulsionOption
{

    /// <summary>
    /// This is the range of influence for the repulsion.
    /// The default is 120.
    /// </summary>
    public int? NodeDistance { get; set; }

    /// <summary>
    /// There is a central gravity attractor to pull the entire network back to the center.
    /// The default is 0.0.
    /// </summary>
    public decimal? CentralGravity { get; set; }

    /// <summary>
    /// The edges are modelled as springs. This springLength here is the rest length of the spring.
    /// The defualt is 100.
    /// </summary>
    public int? SpringLength { get; set; }

    /// <summary>
    /// This is how 'sturdy' the springs are. Higher values mean stronger springs.
    /// The default is 0.01.
    /// </summary>
    public decimal? SpringConstant { get; set; }

    /// <summary>
    /// Accepted range: [0 .. 1].
    /// The damping factor is how much of the velocity from the previous physics simulation iteration carries over to the next iteration. 
    /// The default is 0.09.
    /// </summary>
    public decimal? Damping { get; set; }

    /// <summary>
    /// Accepted range: [0 .. 1].
    /// When larger than 0, the size of the node is taken into account.
    /// The distance will be calculated from the radius of the encompassing circle of the node for both the gravity model. Value 1 is maximum overlap avoidance.
    /// The default is 0.
    /// </summary>
    public double? AvoidOverlap { get; set; }
}


public class StabilizationOption
{
    /// <summary>
    /// Toggle the stabilization.
    /// This is an optional property.
    /// If null, it is automatically set to true when any of the properties of this object are defined.
    /// The default is true.
    /// </summary>
    public bool? Enabled { get; set; }

    /// <summary>
    /// The physics module tries to stabilize the network on load up til a maximum number of iterations defined here.
    /// If the network stabilized with less, you are finished before the maximum number.
    /// The default is 1000.
    /// </summary>
    public int? Iterations { get; set; }

    /// <summary>
    /// When stabilizing, the DOM can freeze. You can chop the stabilization up into pieces to show a loading bar for instance.
    /// The interval determines after how many iterations the stabilizationProgress event is triggered. 
    /// The default is 50.
    /// </summary>
    public int? UpdateInterval { get; set; }

    /// <summary>
    /// If you have predefined the position of all nodes and only want to stabilize the dynamic smooth edges, set this to true.
    /// It freezes all nodes except the invisible dynamic smooth curve support nodes.
    /// If you want the visible nodes to move and stabilize, do not use this.
    /// The default is false.
    /// </summary>
    public bool? OnlyDynamicEdges { get; set; }

    /// <summary>
    /// Toggle whether or not you want the view to zoom to fit all nodes when the stabilization is finished.
    /// The default is true.
    /// </summary>
    public bool? Fit { get; set; }
}

public class WindOption
{
    /// <summary>
    ///  The amount of force to be applied pushing non-fixed nodes to the right (positive value) or to the left (negative value).
    ///  The default is 0.
    /// </summary>
    public int? X { get; set; }

    /// <summary>
    /// The amount of force to be applied pushing non-fixed nodes downwards (positive value) or upwards (negative value).
    /// The default is 0.
    /// </summary>
    public int? Y { get; set; }
}