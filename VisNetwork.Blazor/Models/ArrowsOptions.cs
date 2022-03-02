namespace VisNetwork.Blazor.Models
{
    public class ArrowsOptions
    {
        public bool Enabled { get; set; }

        public int ImageHeight { get; set; }

        public int ImageWidth { get; set; }

        public int ScaleFactor { get; set; } = 1;
        
        //The URL for the image arrow type.
        public string Src { get; set; }

        /// <summary>
        /// Possible values are: arrow, bar, circle and image. The default is arrow
        /// </summary>
        public string Type { get; set; } = "arrow";
    }
}