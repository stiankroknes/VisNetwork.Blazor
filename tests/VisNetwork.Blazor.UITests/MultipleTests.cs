using VisNetwork.Blazor.UITests.Pages;
using VisNetwork.Blazor.UITests.Support;

namespace VisNetwork.Blazor.UITests;

[Collection(typeof(CombinedTestCollectionFixture))]
public class MultipleTests(BlazorWebAssemblyWebHostFixture fixture, PlaywrightFixture playwrightFixture, ITestOutputHelper testOutputHelper)
    : TestBase(fixture, playwrightFixture, testOutputHelper)
{
    [Fact]
    public async Task Should_Render_Expected()
    {
        var page = new MultiplePage(GetPageTestContext());
        await page.GotoAsync();

        var image = await page.CaptureScreenshot();
        Assert.True(ScreenshotHelper.PixelMatch("multiple-page.png", image, BrowserName));
    }

    [Fact]
    public async Task Should_Handle_Click_Network1()
    {
        var page = new MultiplePage(GetPageTestContext());
        await page.GotoAsync();
        await page.ClickNetwork1();

        var clickedParagraph = await page.GetClickedParagraph();

        Assert.Contains("Network1", clickedParagraph, StringComparison.Ordinal);
    }

    [Fact]
    public async Task Should_Handle_Click_Network2()
    {
        var page = new MultiplePage(GetPageTestContext());
        await page.GotoAsync();
        await page.ClickNetwork2();

        var clickedParagraph = await page.GetClickedParagraph();
        Assert.Contains("Network2", clickedParagraph, StringComparison.Ordinal);
    }
}