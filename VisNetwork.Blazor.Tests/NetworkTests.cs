using Bunit;
using FluentAssertions;
using Xunit;

namespace VisNetwork.Blazor.Tests;

public class NetworkTests : TestContext
{
    [Fact]
    public void Network_render_basic_structure()
    {
        JSInterop.Mode = JSRuntimeMode.Strict;
        var jsInvocation = JSInterop.SetupVoid("BlazorVisNetwork.create", invocationMatcher: arg =>
        {

            return true;
        });

        // Act
        var cut = RenderComponent<Network>();


        // Assert
        cut.Find("div").Should().NotBeNull();
        jsInvocation.Invocations.Should().HaveCount(1);
    }

    // [Fact]
    // public void Network_verify_events()
    // {
    //     var mockJS = Services.AddMockJSRuntime(JSRuntimeMockMode.Strict);
    //     var jsInvocation = mockJS.SetupVoid("BlazorVisNetwork.create", argumentsMatcher: arg => {

    //         return true;
    //     });    

    //     // Act
    //     var cut = RenderComponent<Network>();

    //     // Assert
    //     cut.Find("div").Should().NotBeNull();
    //     jsInvocation.Invocations.Should().HaveCount(1);
    // }
}

// <div class="vis-network" style="position: relative; overflow: hidden; touch-action: pan-y; user-select: none; width: 100%; height: 100%;" tabindex="900">
// <canvas style="position: relative; touch-action: none; user-select: none; width: 100%; height: 100%;" width="2433" height="600">
// </canvas><div class="vis-tooltip" style="left: 0px; top: 0px; visibility: hidden;"><
// /div></div>