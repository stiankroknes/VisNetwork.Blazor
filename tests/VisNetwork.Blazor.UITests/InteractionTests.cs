using VisNetwork.Blazor.UITests.Pages;

namespace VisNetwork.Blazor.UITests;

[Collection(typeof(CombinedTestCollection))]
public class InteractionTests(BlazorWebAssemblyWebHostFixture fixture, PlaywrightFixture playwrightFixture, ITestOutputHelper testOutputHelper)
    : TestBase(fixture, playwrightFixture, testOutputHelper)
{
    [Fact]
    public async Task SelectNode1()
    {
        var page = new InteractionPage(GetPageTestContext());
        await page.GotoAsync();
        await page.SelectNode1();

        await page.GetSelectionClick();

        await Expect(page.GetSelectionText()).ToContainTextAsync("Nodes:1 Edges:1-2");
    }

    [Fact]
    public async Task SelectEdge12Click()
    {
        var page = new InteractionPage(GetPageTestContext());
        await page.GotoAsync();
        await page.SelectEdge12Click();

        await page.GetSelectionClick();

        await Expect(page.GetSelectionText()).ToContainTextAsync("Edges:1-2");
    }
}
