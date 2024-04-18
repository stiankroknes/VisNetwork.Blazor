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
        version = new Lazy<Version>(() => Assembly.GetExecutingAssembly().GetName()?.Version ?? new Version(0, 0, 1));
    }

    public string Version => version.Value.ToString();
}
