using Microsoft.Playwright;
using VisNetwork.Blazor.UITests.Pages;
using Xunit.Abstractions;

namespace VisNetwork.Blazor.UITests
{
    public class IndexTests : TestBase
    {
        public IndexTests(BlazorWebAssemblyWebHostFixture<AssemblyClassLocator> fixture, ITestOutputHelper testOutputHelper) : base(fixture, testOutputHelper)
        {
        }

        [Fact]
        public async Task Test1()
        {
            //await Context.Tracing.StartAsync(new()
            //{
            //    Screenshots = true,
            //    Snapshots = true,
            //    Sources = true
            //});

            var page = new IndexPage(GetPageTestContext());

            await page.GotoAsync();

            await page.CaptureNetworkImage();

            //await Context.Tracing.StopAsync(new TracingStopOptions
            //{
            //    Path = "trace.zip"
            //});

            //await page.ClickAsync("#IncrementBtn");
            // Selectors are not only CSS selectors. You can use xpath, css, or text selectors
            // By default there is a timeout of 30s. If the selector isn't found after the timeout, an exception is thrown.
            // More about selectors: https://playwright.dev/#version=v1.4.2&path=docs%2Fselectors.md
            //await page.WaitForSelectorAsync("text=Current count: 1");
        }
    }
}