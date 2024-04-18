using System;
using System.Reflection;

namespace VisNetwork.Blazor;

public interface IVersionProvider
{
    string Version { get; }
}

internal class VersionProvider : IVersionProvider
{
    private readonly Lazy<Version> version;

    public VersionProvider()
    {
        // Version returns 2.0.0 which is assembly version, but should be 2.2.1 which is current file version
        //version = new Lazy<Version>(() => Assembly.GetExecutingAssembly().GetName()?.Version ?? new Version(0, 0, 1));
        version = new Lazy<Version>(() => new Version(2, 2, 1));
    }

    public string Version => version.Value.ToString();
}
