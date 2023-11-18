using VisNetwork.Blazor.UITests.Pages;
using VisNetwork.Blazor.UITests.Support;

namespace VisNetwork.Blazor.UITests;

[Collection("WebHostServerCollection")]
public class DotParsingTests(BlazorWebAssemblyWebHostFixture fixture, ITestOutputHelper testOutputHelper) : TestBase(fixture, testOutputHelper)
{
    [Fact]
    public async Task Basic()
    {
        var page = new DotParsingPage(GetPageTestContext());

        await page.GotoAsync();

        var image = await page.CaptureNetworkImage();
        ScreenshotHelper.PixelMatch("dotparse-page.png", image, BrowserName).Should().BeTrue();
        //await Expect(page.Heading).ToBeVisibleAsync();
        //await Expect(page.ErrorMessage).ToContainTextAsync("OK");
    }
}
