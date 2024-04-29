using System.Collections.Generic;

namespace VisNetwork.Blazor.Models
{
    public class NodePositions
    {
        public Dictionary<string, Position> Positions { get; set; } = new();
    }

    public class Position
    {
        public int X { get; set; }
        public int Y { get; set; }
    }
}