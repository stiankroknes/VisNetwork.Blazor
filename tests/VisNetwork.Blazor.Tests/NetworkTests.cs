using Bunit;
using FluentAssertions;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using VisNetwork.Blazor.Models;
using Xunit;
using static VisNetwork.Blazor.Tests.VisNetworkConfig;

namespace VisNetwork.Blazor.Tests;

public class NetworkTests : BunitContext
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
        var cut = Render<Network>();

        // Assert
        cut.Find("div").Should().NotBeNull();
        JSInterop.VerifyInvoke("create");
    }

    [Fact]
    public async Task Network_Dispose()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.SetupVoid("destroy", _ => true).SetVoidResult();
        var cut = Render<Network>();

        // Act
        await DisposeComponentsAsync();

        // Assert
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("destroy");
    }

    [Fact]
    public async Task Network_Dispose_DataSetSubscription()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.SetupVoid("destroy", _ => true).SetVoidResult();
        var networkData = new NetworkDataSet
        {
            Nodes = new DataSet<Node>([new Node("1", "Node1", 1, ""), new Node("2", "Node 2", 0, "")], idSelector: n => n.Id),
            Edges = new DataSet<Edge>([new Edge("1", "2", title: "1 to 2")], idSelector: n => n.Id),
        };
        var cut = Render<Network>(p => p.Add(n => n.Data, networkData));

        // Act
        await DisposeComponentsAsync();
        networkData.Nodes.Add(new Node("3", "Node 3", 0, ""));

        // Assert
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("destroy");
        JSInterop.VerifyNotInvoke("setData");
    }

    [Fact]
    public void Network_Data()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        var networkData = new NetworkData
        {
            Nodes = [new Node("1", "Node1", 1, ""), new Node("2", "Node 2", 0, "")],
            Edges = [new Edge("1", "2", title: "1 to 2")],
        };

        // Act
        var cut = Render<Network>(parameters => parameters.Add(n => n.Data, networkData));

        // Assert 
        JSInterop.VerifyInvoke("create");
    }

    [Fact]
    public void Network_Data_Using_DataSet_Changes()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.SetupVoid("setData", _ => true).SetVoidResult();
        var networkData = new NetworkDataSet
        {
            Nodes = new DataSet<Node>([new Node("1", "Node1", 1, ""), new Node("2", "Node 2", 0, "")], idSelector: n => n.Id),
            Edges = new DataSet<Edge>([new Edge("1", "2", title: "1 to 2")], idSelector: n => n.Id),
        };
        var cut = Render<Network>(parameters => parameters.Add(n => n.Data, networkData));

        // Act
        networkData.Nodes.Add(new Node("3", "Node 3", 0, ""));

        // Assert 
        JSInterop.VerifyInvoke("create");
        cut.WaitForAssertion(() => JSInterop.VerifyInvoke("setData"));
    }

    // Global 

    [Fact]
    public async Task Network_SetData_Using_NetworkData()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.SetupVoid("setData", _ => true).SetVoidResult();
        var cut = Render<Network>();

        // Act
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
    public async Task Network_SetData_Using_NetworkDataSet()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.SetupVoid("setData", _ => true).SetVoidResult();
        var cut = Render<Network>();

        // Act
        await cut.Instance.SetData(new NetworkDataSet
        {
            Nodes = new DataSet<Node>([new Node("1", "Node1", 1, ""), new Node("2", "Node 2", 0, "")], idSelector: n => n.Id),
            Edges = new DataSet<Edge>([new Edge("1", "2", "1 to 2")], idSelector: n => n.Id),
        });

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("setData");
    }

    [Fact]
    public async Task Network_SetSize()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.SetupVoid("setSize", _ => true).SetVoidResult();
        var cut = Render<Network>();

        // Act
        await cut.Instance.SetSize(100, 200);

        // Assert 
        JSInterop.VerifyInvoke("setSize");
        var invocation = JSInterop.Invocations["setSize"].Single();
        invocation.Arguments[0].Should().BeOfType<ElementReference>();
        invocation.Arguments[1].Should().Be("100");
        invocation.Arguments[2].Should().Be("200");
    }

    [Fact]
    public async Task Network_Redraw()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.SetupVoid("redraw", _ => true).SetVoidResult();
        var cut = Render<Network>();

        // Act
        await cut.Instance.Redraw();

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("redraw");
        var invocation = JSInterop.Invocations["redraw"].Single();
        invocation.Arguments[0].Should().BeOfType<ElementReference>();
    }

    [Fact]
    public async Task Network_CanvasToDOM()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.Setup<Position>("canvasToDOM", _ => true).SetResult(new Position { X = 2, Y = 3, });
        var cut = Render<Network>();
        var positionArg = new Position { X = 1, Y = 2, };

        // Act
        var result = await cut.Instance.CanvasToDOM(positionArg);

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("canvasToDOM");
        var invocation = JSInterop.Invocations["canvasToDOM"].Single();
        invocation.Arguments[0].Should().BeOfType<ElementReference>();
        invocation.Arguments[1].Should().Be(positionArg);
        result.X.Should().Be(2);
        result.Y.Should().Be(3);
    }

    [Fact]
    public async Task Network_DOMToCanvas()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.Setup<Position>("DOMToCanvas", _ => true).SetResult(new Position { X = 2, Y = 3, });
        var cut = Render<Network>();
        var positionArg = new Position { X = 1, Y = 2, };

        // Act
        var result = await cut.Instance.DOMToCanvas(positionArg);

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("DOMToCanvas");
        var invocation = JSInterop.Invocations["DOMToCanvas"].Single();
        invocation.Arguments[0].Should().BeOfType<ElementReference>();
        invocation.Arguments[1].Should().Be(positionArg);
        result.X.Should().Be(2);
        result.Y.Should().Be(3);
    }

    // Clustering
    [Fact]
    public async Task Network_ClusterOutliers()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.SetupVoid("clusterOutliers", _ => true).SetVoidResult();
        var cut = Render<Network>();

        // Act
        await cut.Instance.ClusterOutliers();

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("clusterOutliers");
        var invocation = JSInterop.Invocations["clusterOutliers"].Single();
        invocation.Arguments[0].Should().BeOfType<ElementReference>();
    }

    // Import

    [Fact]
    public async Task Network_ParseDOTNetwork()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.SetupVoid("populateDotNetwork", _ => true).SetVoidResult();
        var cut = Render<Network>();

        // Act
        await cut.Instance.ParseDOTNetwork("some dot string");

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("populateDotNetwork");
        var invocation = JSInterop.Invocations["populateDotNetwork"].Single();
        invocation.Arguments[0].Should().BeOfType<ElementReference>();
        invocation.Arguments[1].Should().Be("some dot string");
    }

    // Selection
    [Fact]
    public async Task Network_GetSelectedNodes()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.Setup<string[]>("getSelectedNodes", _ => true).SetResult(["1"]);
        var cut = Render<Network>();

        // Act
        await cut.Instance.GetSelectedNodes();

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("getSelectedNodes");
        var invocation = JSInterop.Invocations["getSelectedNodes"].Single();
        invocation.Arguments[0].Should().BeOfType<ElementReference>();
    }

    [Fact]
    public async Task Network_SelectNodes()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.SetupVoid("selectNodes", _ => true).SetVoidResult();
        string[] args = ["1"];
        var cut = Render<Network>();

        // Act
        await cut.Instance.SelectNodes(args);

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("selectNodes");
        var invocation = JSInterop.Invocations["selectNodes"].Single();
        invocation.Arguments[0].Should().BeOfType<ElementReference>();
        invocation.Arguments[1].Should().Be(args);
    }

    [Fact]
    public async Task Network_GetSelectedEdges()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.Setup<string[]>("getSelectedEdges", _ => true).SetResult(["1"]);
        var cut = Render<Network>();

        // Act
        await cut.Instance.GetSelectedEdges();

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("getSelectedEdges");
        var invocation = JSInterop.Invocations["getSelectedEdges"].Single();
        invocation.Arguments[0].Should().BeOfType<ElementReference>();
    }

    [Fact]
    public async Task Network_SelectEdges()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.SetupVoid("selectEdges", _ => true).SetVoidResult();
        string[] args = ["1"];
        var cut = Render<Network>();

        // Act
        await cut.Instance.SelectEdges(args);

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("selectEdges");
        var invocation = JSInterop.Invocations["selectEdges"].Single();
        invocation.Arguments[0].Should().BeOfType<ElementReference>();
        invocation.Arguments[1].Should().Be(args);
    }

    [Fact]
    public async Task Network_GetSelection()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.Setup<NodeEdgeComposite>("getSelection", _ => true).SetResult(new NodeEdgeComposite { Nodes = ["1"], Edges = ["1"], });
        var cut = Render<Network>();

        // Act
        await cut.Instance.GetSelection();

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("getSelection");
        var invocation = JSInterop.Invocations["getSelection"].Single();
        invocation.Arguments[0].Should().BeOfType<ElementReference>();
    }

    [Fact]
    public async Task Network_SetSelection()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.SetupVoid("setSelection", _ => true).SetVoidResult();
        var args = new NodeEdgeComposite { Nodes = ["1"], Edges = ["1"], };
        var cut = Render<Network>();

        // Act
        await cut.Instance.SetSelection(args);

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("setSelection");
        var invocation = JSInterop.Invocations["setSelection"].Single();
        invocation.Arguments[0].Should().BeOfType<ElementReference>();
        invocation.Arguments[1].Should().Be(args);
    }


    [Fact]
    public async Task Network_UnselectAll()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.SetupVoid("unselectAll", _ => true).SetVoidResult();
        var cut = Render<Network>();

        // Act
        await cut.Instance.UnselectAll();

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("unselectAll");
        var invocation = JSInterop.Invocations["unselectAll"].Single();
        invocation.Arguments[0].Should().BeOfType<ElementReference>();
    }

    // Manipulation
    [Fact]
    public async Task Network_EnableEditMode()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.SetupVoid("enableEditMode", _ => true).SetVoidResult();
        var cut = Render<Network>();

        // Act
        await cut.Instance.EnableEditMode();

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("enableEditMode");
        var invocation = JSInterop.Invocations["enableEditMode"].Single();
        invocation.Arguments[0].Should().BeOfType<ElementReference>();
    }

    [Fact]
    public async Task Network_DisableEditMode()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.SetupVoid("disableEditMode", _ => true).SetVoidResult();
        var cut = Render<Network>();

        // Act
        await cut.Instance.DisableEditMode();

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("disableEditMode");
        var invocation = JSInterop.Invocations["disableEditMode"].Single();
        invocation.Arguments[0].Should().BeOfType<ElementReference>();
    }

    [Fact]
    public async Task Network_AddNodeMode()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.SetupVoid("addNodeMode", _ => true).SetVoidResult();
        var cut = Render<Network>();

        // Act
        await cut.Instance.AddNodeMode();

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("addNodeMode");
        var invocation = JSInterop.Invocations["addNodeMode"].Single();
        invocation.Arguments[0].Should().BeOfType<ElementReference>();
    }

    [Fact]
    public async Task Network_AddEdgeMode()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.SetupVoid("addEdgeMode", _ => true).SetVoidResult();
        var cut = Render<Network>();

        // Act
        await cut.Instance.AddEdgeMode();

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("addEdgeMode");
        var invocation = JSInterop.Invocations["addEdgeMode"].Single();
        invocation.Arguments[0].Should().BeOfType<ElementReference>();
    }

    [Fact]
    public async Task Network_DeleteSelected()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.SetupVoid("deleteSelected", _ => true).SetVoidResult();
        var cut = Render<Network>();

        // Act
        await cut.Instance.DeleteSelected();

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("deleteSelected");
        var invocation = JSInterop.Invocations["deleteSelected"].Single();
        invocation.Arguments[0].Should().BeOfType<ElementReference>();
    }

    // Information 

    [Fact]
    public async Task Network_GetPosition()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.Setup<Position>("getPosition", _ => true).SetResult(new Position { X = 1, Y = 2, });
        var cut = Render<Network>();

        // Act
        await cut.Instance.GetPosition(nodeId: "1");

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("getPosition");
        var invocation = JSInterop.Invocations["getPosition"].Single();
        invocation.Arguments[0].Should().BeOfType<ElementReference>();
        invocation.Arguments[1].Should().Be("1");
    }

    [Fact]
    public async Task Network_GetPositions()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.Setup<IDictionary<string, Position>>("getPositions", _ => true).SetResult(new Dictionary<string, Position>
        {
            { "1", new Position { X = 1, Y = 2, } },
            { "2", new Position { X = 5, Y = 5, } },
        });
        var cut = Render<Network>();
        string[] args = ["1", "2"];

        // Act
        await cut.Instance.GetPositions(args);

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("getPositions");
        var invocation = JSInterop.Invocations["getPositions"].Single();
        invocation.Arguments[0].Should().BeOfType<ElementReference>();
        invocation.Arguments[1].Should().Be(args);
    }

    [Fact]
    public async Task Network_GetBoundingBox()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.Setup<BoundingBox>("getBoundingBox", _ => true).SetResult(new BoundingBox { Top = 1, Left = 2, Right = 3, Bottom = 4, });
        var cut = Render<Network>();

        // Act
        await cut.Instance.GetBoundingBox(nodeId: "1");

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("getBoundingBox");
        var invocation = JSInterop.Invocations["getBoundingBox"].Single();
        invocation.Arguments[0].Should().BeOfType<ElementReference>();
        invocation.Arguments[1].Should().Be("1");
    }


    [Fact]
    public async Task Network_GetConnectedEdges()
    {
        BunitJSModuleInterop module = CreateJSModuleInterop(JSInterop);
        module.Setup<string[]>("getConnectedEdges", _ => true).SetResult(["1"]);
        var cut = Render<Network>();

        // Act
        await cut.Instance.GetConnectedEdges(nodeId: "1");

        // Assert 
        JSInterop.VerifyInvoke("create");
        JSInterop.VerifyInvoke("getConnectedEdges");
        var invocation = JSInterop.Invocations["getConnectedEdges"].Single();
        invocation.Arguments[0].Should().BeOfType<ElementReference>();
        invocation.Arguments[1].Should().Be("1");
    }

    public class EventTests : BunitContext
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
            var cut = Render<Network>(c => c.Add(n => n.OnClick, _ => eventInvoked = true));

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
            var cut = Render<Network>(c => c.Add(n => n.OnDoubleClick, _ => eventInvoked = true));

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
            var cut = Render<Network>(c => c.Add(n => n.OnContext, _ => eventInvoked = true));

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
            var cut = Render<Network>(c => c.Add(n => n.OnHold, _ => eventInvoked = true));

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
            var cut = Render<Network>(c => c.Add(n => n.OnRelease, _ => eventInvoked = true));

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
            var cut = Render<Network>(c => c.Add(n => n.OnSelect, _ => eventInvoked = true));

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
            var cut = Render<Network>(c => c.Add(n => n.OnSelectNode, _ => eventInvoked = true));

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
            var cut = Render<Network>(c => c.Add(n => n.OnDeselectNode, _ => eventInvoked = true));

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
            var cut = Render<Network>(c => c.Add(n => n.OnSelectEdge, _ => eventInvoked = true));

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
            var cut = Render<Network>(c => c.Add(n => n.OnDeselectEdge, _ => eventInvoked = true));

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
            var cut = Render<Network>(c => c.Add(n => n.OnShowPopup, _ => eventInvoked = true));

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
            var cut = Render<Network>(c => c.Add(n => n.OnHidePopup, _ => eventInvoked = true));

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
            var cut = Render<Network>(c => c.Add(n => n.OnBeforeDrawing, _ => eventInvoked = true));

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
            var cut = Render<Network>(c => c.Add(n => n.OnAfterDrawing, _ => eventInvoked = true));

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
            var cut = Render<Network>(c => c.Add(n => n.OnStartStabilizing, _ => eventInvoked = true));

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
            var cut = Render<Network>(c => c.Add(n => n.OnStabilizationProgress, _ => eventInvoked = true));

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
            var cut = Render<Network>(c => c.Add(n => n.OnStabilizationIterationsDone, _ => eventInvoked = true));

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
            var cut = Render<Network>(c => c.Add(n => n.OnStabilized, _ => eventInvoked = true));

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