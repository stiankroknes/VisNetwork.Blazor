using Bunit;
using FluentAssertions;
using System.Text.Json;
using System.Threading.Tasks;
using VisNetwork.Blazor.Models;
using Xunit;
using static VisNetwork.Blazor.Tests.VisNetworkConfig;

namespace VisNetwork.Blazor.Tests;

public partial class NetworkTests : TestContext
{
    public NetworkTests()
    {
        AddVisNetwork(Services);
        JSInterop.Mode = JSRuntimeMode.Strict;
    }

    [Fact]
    public void Network_Renders_Basic_Structure()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);

        // Act
        var cut = RenderComponent<Network>();

        // Assert
        cut.Find("div").Should().NotBeNull();
        JSInterop.VerifyInvoke("create");
    }

    [Fact]
    public void Network_Dispose()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.SetupVoid("destroy", _ => true).SetVoidResult();
        var cut = RenderComponent<Network>();

        // Act
        DisposeComponents();

        // Assert
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("destroy");
    }

    [Fact]
    public void Network_Data()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        var networkData = new NetworkData
        {
            Nodes = new[] { new Node("1", "Node1", 1, ""), new Node("2", "Node 2", 0, "") },
            Edges = new[] { new Edge("1", "2", "1 to 2") },
        };

        // Act
        var cut = RenderComponent<Network>(parameters => parameters
            .Add(n => n.Data, networkData)
        );

        // Assert 
        JSInterop.VerifyInvoke("create");
    }

    [Fact]
    public async Task Network_SetData()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.SetupVoid("setData", _ => true).SetVoidResult();
        // Act
        var cut = RenderComponent<Network>();
        await cut.Instance.SetData(new NetworkData
        {
            Nodes = new[] { new Node("1", "Node1", 1, ""), new Node("2", "Node 2", 0, "") },
            Edges = new[] { new Edge("1", "2", "1 to 2") },
        });

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("setData");
    }

    private static BunitJSModuleInterop CreateJSModuleInterop(BunitJSInterop jSInterop)
    {
        var module = jSInterop.SetupModule(
            new JSModule(jSInterop.JSRuntime, new DummyVersionProvider()).ModuleFileName);

        module.SetupVoid("create", _ => true).SetVoidResult();

        return module;
    }

    private static string Serialize<T>(T data) where T : class => JsonSerializer.Serialize(data);
}

// <div class="vis-network" style="position: relative; overflow: hidden; touch-action: pan-y; user-select: none; width: 100%; height: 100%;" tabindex="900">
// <canvas style="position: relative; touch-action: none; user-select: none; width: 100%; height: 100%;" width="2433" height="600">
// </canvas><div class="vis-tooltip" style="left: 0px; top: 0px; visibility: hidden;"><
// /div></div>