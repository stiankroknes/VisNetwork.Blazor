namespace VisNetwork.Blazor
{
    public interface IJsFilePathProvider
    {
        string GetJsPath();
    }

    internal class JsFilePathProvider : IJsFilePathProvider
    {
        public string GetJsPath()
        {
            return "./_content/Fsd.VisNetwork.Blazor/BlazorVisNetwork.js";
        }
    }
}
