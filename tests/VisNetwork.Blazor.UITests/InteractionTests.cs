using Microsoft.Playwright;
using VisNetwork.Blazor.UITests.Pages;
using Xunit.Abstractions;

namespace VisNetwork.Blazor.UITests
{
    [Collection("WebHostServerCollection")]
    public class InteractionTests : TestBase
    {
        public InteractionTests(BlazorWebAssemblyWebHostFixture fixture, ITestOutputHelper testOutputHelper) : base(fixture, testOutputHelper)
        {
        }

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
}
