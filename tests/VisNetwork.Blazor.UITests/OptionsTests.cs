using VisNetwork.Blazor.UITests.Pages;
using VisNetwork.Blazor.UITests.Support;

namespace VisNetwork.Blazor.UITests;

[Collection("WebHostServerCollection")]
public class OptionsTests(BlazorWebAssemblyWebHostFixture fixture, ITestOutputHelper testOutputHelper)
    : TestBase(fixture, testOutputHelper)
{
    [Fact]
    public async Task Should_Render_Expected()
    {
        var page = new OptionsPage(GetPageTestContext());
        await page.GotoAsync();

        await page.ChangeOptionClick();

        var image = await page.CaptureScreenshot();
        ScreenshotHelper.PixelMatch("options-page.png", image, BrowserName).Should().BeTrue();
    }
}