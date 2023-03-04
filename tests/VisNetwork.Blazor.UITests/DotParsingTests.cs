using VisNetwork.Blazor.UITests.Pages;
using Xunit.Abstractions;

namespace VisNetwork.Blazor.UITests;

[Collection("WebHostServerCollection")]
public class DotParsingTests : TestBase {
    public DotParsingTests(BlazorWebAssemblyWebHostFixture fixture, ITestOutputHelper testOutputHelper) : base(fixture, testOutputHelper) {
    }

    [Fact]
    public async Task Basic() {
        var page = new DotParsingPage(GetPageTestContext());

        await page.GotoAsync();

        await Expect(page.Heading).ToBeVisibleAsync();
        await Expect(page.ErrorMessage).ToContainTextAsync("OK");
    }
}
