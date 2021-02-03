using System.Collections.Generic;

namespace VisNetwork.Blazor.Models
{
    public class BaseClickEvent
    {
        public Microsoft.JSInterop.DotNetObjectReference<Network> Source { get; set; }

        /// <summary>
        ///  Selected node ids
        /// </summary>
        /// <value></value>
        public List<string> Nodes { get; set; }

        /// <summary>
        /// Selected edge ids
        /// </summary>
        /// <value></value>
        public List<string> Edges { get; set; }

        public object Event { get; set; }
        public object Pointer { get; set; }
    }

    public class ClickedItem
    {
        public string NodeId { get; set; }
        public string EdgeId { get; set; }
        public string LabelId { get; set; }
    }

    public class ClickEvent : BaseClickEvent
    {
        // The order of the items array is descending in z-order. Thus, to get the topmost item, get the value at index 0. 
        public List<ClickedItem> Items { get; set; }
    }

    public class DeselectClickEvent : BaseClickEvent
    {
        public NodeEdgeComposite PreviousSelection { get; set; }
    }

    public class DrawingEvent
    {
        public string CanvasDataUrl { get; set; }
    }
}