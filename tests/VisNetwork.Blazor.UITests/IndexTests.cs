using VisNetwork.Blazor.UITests.Pages;
using VisNetwork.Blazor.UITests.Support;

namespace VisNetwork.Blazor.UITests;

[Collection(typeof(CombinedTestCollection))]
public class IndexTests(BlazorWebAssemblyWebHostFixture fixture, PlaywrightFixture playwrightFixture, ITestOutputHelper testOutputHelper)
    : TestBase(fixture, playwrightFixture, testOutputHelper)
{
    [Fact]
    public async Task Basic()
    {
        //await Context.Tracing.StartAsync(new()
        //{
        //    Screenshots = true,
        //    Snapshots = true,
        //    Sources = true
        //});

        var page = new IndexPage(GetPageTestContext());
        await page.GotoAsync();

        var image = await page.CaptureNetworkImage();
        ScreenshotHelper.PixelMatch("index-page.png", image, BrowserName).Should().BeTrue();
        await Expect(page.Heading).ToBeVisibleAsync();

        //await Context.Tracing.StopAsync(new TracingStopOptions
        //{
        //    Path = "trace.zip"
        //});
    }
}