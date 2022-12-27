using FluentAssertions;
using VisNetwork.Blazor.UITests.Pages;
using Xunit.Abstractions;

namespace VisNetwork.Blazor.UITests
{
    [Collection("WebHostServerCollection")]
    public class IndexTests : TestBase
    {
        public IndexTests(BlazorWebAssemblyWebHostFixture fixture, ITestOutputHelper testOutputHelper) : base(fixture, testOutputHelper)
        {
        }

        [Fact]
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Info Code Smell", "S1135:Track uses of \"TODO\" tags", Justification = "<Pending>")]
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


            (await page.CaptureNetworkImage()).Should().NotBeEmpty();
            await Expect(page.Heading).ToBeVisibleAsync();

            // TODO: compare screenshot with baseline.

            //await Context.Tracing.StopAsync(new TracingStopOptions
            //{
            //    Path = "trace.zip"
            //});
        }
    }
}