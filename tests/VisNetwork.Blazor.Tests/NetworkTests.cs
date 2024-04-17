using Bunit;
using FluentAssertions;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using VisNetwork.Blazor.Models;
using Xunit;
using static VisNetwork.Blazor.Tests.VisNetworkConfig;

namespace VisNetwork.Blazor.Tests;

public class NetworkTests : TestContext
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
            Nodes = [new Node("1", "Node1", 1, ""), new Node("2", "Node 2", 0, "")],
            Edges = [new Edge("1", "2", "1 to 2")],
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
            Nodes = [new Node("1", "Node1", 1, ""), new Node("2", "Node 2", 0, "")],
            Edges = [new Edge("1", "2", "1 to 2")],
        });

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("setData");
    }

    [Fact]
    public async Task Network_ParseDOTNetwork()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.SetupVoid("populateDotNetwork", _ => true).SetVoidResult();
        // Act
        var cut = RenderComponent<Network>();
        await cut.Instance.ParseDOTNetwork("some dot string");

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("populateDotNetwork");
        var invocation = JSInterop.Invocations["populateDotNetwork"].Single();
        invocation.Arguments[0].Should().BeOfType<ElementReference>();
        invocation.Arguments[1].Should().Be("some dot string");
    }

    public class EventTests : TestContext
    {
        public EventTests()
        {
            AddVisNetwork(Services);
            JSInterop.Mode = JSRuntimeMode.Strict;
        }


        [Fact]
        public async Task EventCallback_Should_Trigger_Click()
        {
            // Arrange
            BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
            module.SetupVoid("on", _ => true);
            bool eventInvoked = false;
            var cut = RenderComponent<Network>(c => c.Add(n => n.OnClick, _ => eventInvoked = true));

            // Act
            await cut.Instance.EventCallback("click", Serialize(CreateEvent<ClickEvent>(cut.Instance)));

            // Assert
            cut.Find("div").Should().NotBeNull();
            eventInvoked.Should().BeTrue();
        }

        [Fact]
        public async Task EventCallback_Should_Trigger_DoubleClick()
        {
            // Arrange
            BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
            module.SetupVoid("on", _ => true);
            bool eventInvoked = false;
            var cut = RenderComponent<Network>(c => c.Add(n => n.OnDoubleClick, _ => eventInvoked = true));

            // Act
            await cut.Instance.EventCallback("doubleClick", Serialize(CreateEvent<ClickEvent>(cut.Instance)));

            // Assert
            cut.Find("div").Should().NotBeNull();
            eventInvoked.Should().BeTrue();
        }

        [Fact]
        public async Task EventCallback_Should_Trigger_OnContext()
        {
            // Arrange
            BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
            module.SetupVoid("on", _ => true);
            bool eventInvoked = false;
            var cut = RenderComponent<Network>(c => c.Add(n => n.OnContext, _ => eventInvoked = true));

            // Act
            await cut.Instance.EventCallback("oncontext", Serialize(CreateEvent<ClickEvent>(cut.Instance)));

            // Assert
            cut.Find("div").Should().NotBeNull();
            eventInvoked.Should().BeTrue();
        }

        [Fact]
        public async Task EventCallback_Should_Trigger_Hold()
        {
            // Arrange
            BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
            module.SetupVoid("on", _ => true);
            bool eventInvoked = false;
            var cut = RenderComponent<Network>(c => c.Add(n => n.OnHold, _ => eventInvoked = true));

            // Act
            await cut.Instance.EventCallback("hold", Serialize(CreateEvent<ClickEvent>(cut.Instance)));

            // Assert
            cut.Find("div").Should().NotBeNull();
            eventInvoked.Should().BeTrue();
        }

        [Fact]
        public async Task EventCallback_Should_Trigger_Release()
        {
            // Arrange
            BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
            module.SetupVoid("on", _ => true);
            bool eventInvoked = false;
            var cut = RenderComponent<Network>(c => c.Add(n => n.OnRelease, _ => eventInvoked = true));

            // Act
            await cut.Instance.EventCallback("release", Serialize(CreateEvent<ClickEvent>(cut.Instance)));

            // Assert
            cut.Find("div").Should().NotBeNull();
            eventInvoked.Should().BeTrue();
        }

        [Fact]
        public async Task EventCallback_Should_Trigger_Select()
        {
            // Arrange
            BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
            module.SetupVoid("on", _ => true);
            bool eventInvoked = false;
            var cut = RenderComponent<Network>(c => c.Add(n => n.OnSelect, _ => eventInvoked = true));

            // Act
            await cut.Instance.EventCallback("select", Serialize(CreateEvent<ClickEvent>(cut.Instance)));

            // Assert
            cut.Find("div").Should().NotBeNull();
            eventInvoked.Should().BeTrue();
        }

        [Fact]
        public async Task EventCallback_Should_Trigger_SelectNode()
        {
            // Arrange
            BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
            module.SetupVoid("on", _ => true);
            bool eventInvoked = false;
            var cut = RenderComponent<Network>(c => c.Add(n => n.OnSelectNode, _ => eventInvoked = true));

            // Act
            await cut.Instance.EventCallback("selectNode", Serialize(CreateEvent<ClickEvent>(cut.Instance)));

            // Assert
            cut.Find("div").Should().NotBeNull();
            eventInvoked.Should().BeTrue();
        }

        [Fact]
        public async Task EventCallback_Should_Trigger_DeselectNode()
        {
            // Arrange
            BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
            module.SetupVoid("on", _ => true);
            bool eventInvoked = false;
            var cut = RenderComponent<Network>(c => c.Add(n => n.OnDeselectNode, _ => eventInvoked = true));

            // Act
            await cut.Instance.EventCallback("deselectNode", Serialize(CreateEvent<DeselectClickEvent>(cut.Instance)));

            // Assert
            cut.Find("div").Should().NotBeNull();
            eventInvoked.Should().BeTrue();
        }

        [Fact]
        public async Task EventCallback_Should_Trigger_SelectEdge()
        {
            // Arrange
            BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
            module.SetupVoid("on", _ => true);
            bool eventInvoked = false;
            var cut = RenderComponent<Network>(c => c.Add(n => n.OnSelectEdge, _ => eventInvoked = true));

            // Act
            await cut.Instance.EventCallback("selectEdge", Serialize(CreateEvent<ClickEvent>(cut.Instance)));

            // Assert
            cut.Find("div").Should().NotBeNull();
            eventInvoked.Should().BeTrue();
        }

        [Fact]
        public async Task EventCallback_Should_Trigger_DeselectEdge()
        {
            // Arrange
            BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
            module.SetupVoid("on", _ => true);
            bool eventInvoked = false;
            var cut = RenderComponent<Network>(c => c.Add(n => n.OnDeselectEdge, _ => eventInvoked = true));

            // Act
            await cut.Instance.EventCallback("deselectEdge", Serialize(CreateEvent<DeselectClickEvent>(cut.Instance)));

            // Assert
            cut.Find("div").Should().NotBeNull();
            eventInvoked.Should().BeTrue();
        }

        [Fact]
        public async Task EventCallback_Should_Trigger_ShowPopup()
        {
            // Arrange
            BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
            module.SetupVoid("on", _ => true);
            bool eventInvoked = false;
            var cut = RenderComponent<Network>(c => c.Add(n => n.OnShowPopup, _ => eventInvoked = true));

            // Act
            await cut.Instance.EventCallback("showPopup", "some data");

            // Assert
            cut.Find("div").Should().NotBeNull();
            eventInvoked.Should().BeTrue();
        }

        [Fact]
        public async Task EventCallback_Should_Trigger_HidePopup()
        {
            // Arrange
            BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
            module.SetupVoid("on", _ => true);
            bool eventInvoked = false;
            var cut = RenderComponent<Network>(c => c.Add(n => n.OnHidePopup, _ => eventInvoked = true));

            // Act
            await cut.Instance.EventCallback("hidePopup", "");

            // Assert
            cut.Find("div").Should().NotBeNull();
            eventInvoked.Should().BeTrue();
        }

        [Fact]
        public async Task EventCallback_Should_Trigger_BeforeDrawing()
        {
            // Arrange
            BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
            module.SetupVoid("on", _ => true);
            bool eventInvoked = false;
            var cut = RenderComponent<Network>(c => c.Add(n => n.OnBeforeDrawing, _ => eventInvoked = true));

            // Act
            await cut.Instance.EventCallback("beforeDrawing", Serialize(new DrawingEvent()));

            // Assert
            cut.Find("div").Should().NotBeNull();
            eventInvoked.Should().BeTrue();
        }

        [Fact]
        public async Task EventCallback_Should_Trigger_AfterDrawing()
        {
            // Arrange
            BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
            module.SetupVoid("on", _ => true);
            bool eventInvoked = false;
            var cut = RenderComponent<Network>(c => c.Add(n => n.OnAfterDrawing, _ => eventInvoked = true));

            // Act
            await cut.Instance.EventCallback("afterDrawing", Serialize(new DrawingEvent()));

            // Assert
            cut.Find("div").Should().NotBeNull();
            eventInvoked.Should().BeTrue();
        }

        [Fact]
        public async Task EventCallback_Should_Trigger_StartStabilizing()
        {
            // Arrange
            BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
            module.SetupVoid("on", _ => true);
            bool eventInvoked = false;
            var cut = RenderComponent<Network>(c => c.Add(n => n.OnStartStabilizing, _ => eventInvoked = true));

            // Act
            await cut.Instance.EventCallback("startStabilizing", "");

            // Assert
            cut.Find("div").Should().NotBeNull();
            eventInvoked.Should().BeTrue();
        }

        [Fact]
        public async Task EventCallback_Should_Trigger_StabilizationProgress()
        {
            // Arrange
            BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
            module.SetupVoid("on", _ => true);
            bool eventInvoked = false;
            var cut = RenderComponent<Network>(c => c.Add(n => n.OnStabilizationProgress, _ => eventInvoked = true));

            // Act
            await cut.Instance.EventCallback("stabilizationProgress", Serialize(new StabilizationProgressEvent()));

            // Assert
            cut.Find("div").Should().NotBeNull();
            eventInvoked.Should().BeTrue();
        }

        [Fact]
        public async Task EventCallback_Should_Trigger_StabilizationIterationsDone()
        {
            // Arrange
            BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
            module.SetupVoid("on", _ => true);
            bool eventInvoked = false;
            var cut = RenderComponent<Network>(c => c.Add(n => n.OnStabilizationIterationsDone, _ => eventInvoked = true));

            // Act
            await cut.Instance.EventCallback("stabilizationIterationsDone", "");

            // Assert
            cut.Find("div").Should().NotBeNull();
            eventInvoked.Should().BeTrue();
        }

        [Fact]
        public async Task EventCallback_Should_Trigger_Stabilized()
        {
            // Arrange
            BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
            module.SetupVoid("on", _ => true);
            bool eventInvoked = false;
            var cut = RenderComponent<Network>(c => c.Add(n => n.OnStabilized, _ => eventInvoked = true));

            // Act
            await cut.Instance.EventCallback("stabilized", Serialize(new StabilizedEvent()));

            // Assert
            cut.Find("div").Should().NotBeNull();
            eventInvoked.Should().BeTrue();
        }
        private static T CreateEvent<T>(Network network) where T : BaseClickEvent
        {
            var instance = Activator.CreateInstance<T>();
            instance.Source = DotNetObjectReference.Create(network);
            return instance;
        }
    }

    private static BunitJSModuleInterop CreateJSModuleInterop(BunitJSInterop jSInterop)
    {
        var module = jSInterop.SetupModule(
            new JSModule(jSInterop.JSRuntime, new DummyVersionProvider(), new JsFilePathProvider()).ModuleFileName);

        module.SetupVoid("create", _ => true).SetVoidResult();

        return module;
    }

    private static string Serialize<T>(T data) where T : class => JsonSerializer.Serialize(data);
}

// <div class="vis-network" style="position: relative; overflow: hidden; touch-action: pan-y; user-select: none; width: 100%; height: 100%;" tabindex="900">
// <canvas style="position: relative; touch-action: none; user-select: none; width: 100%; height: 100%;" width="2433" height="600">
// </canvas><div class="vis-tooltip" style="left: 0px; top: 0px; visibility: hidden;"><
// /div></div>