using VisNetwork.Blazor.UITests.Pages;

namespace VisNetwork.Blazor.UITests;

[Collection("WebHostServerCollection")]
public class IssueTests(BlazorWebAssemblyWebHostFixture fixture, ITestOutputHelper testOutputHelper)
    : TestBase(fixture, testOutputHelper)
{
    [Fact]
    public async Task Test1()
    {
        var page = new IssuePage(GetPageTestContext());
        await page.GotoAsync();
        await page.Input("some dummy not used");
        var before = await page.CaptureNetworkImage();

        await page.Submit();

        var after = await page.CaptureNetworkImage();
        after.Should().NotEqual(before);
    }
}