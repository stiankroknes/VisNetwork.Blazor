using VisNetwork.Blazor.UITests.Pages;
using VisNetwork.Blazor.UITests.Support;

namespace VisNetwork.Blazor.UITests;

[Collection(typeof(CombinedTestCollection))]
public class MultipleTests(BlazorWebAssemblyWebHostFixture fixture, PlaywrightFixture playwrightFixture, ITestOutputHelper testOutputHelper)
    : TestBase(fixture, playwrightFixture, testOutputHelper)
{
    [Fact]
    public async Task Should_Render_Expected()
    {
        var page = new MultiplePage(GetPageTestContext());
        await page.GotoAsync();

        var image = await page.CaptureScreenshot();
        ScreenshotHelper.PixelMatch("multiple-page.png", image, BrowserName).Should().BeTrue();
    }

    [Fact]
    public async Task Should_Handle_Click_Network1()
    {
        var page = new MultiplePage(GetPageTestContext());
        await page.GotoAsync();
        await page.ClickNetwork1();

        (await page.GetClickedParagraph()).Should().Contain("Network1");
    }

    [Fact]
    public async Task Should_Handle_Click_Network2()
    {
        var page = new MultiplePage(GetPageTestContext());
        await page.GotoAsync();
        await page.ClickNetwork2();

        (await page.GetClickedParagraph()).Should().Contain("Network2");
    }
}