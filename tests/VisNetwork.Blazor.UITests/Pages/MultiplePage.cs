using System.Runtime.CompilerServices;

namespace VisNetwork.Blazor.UITests.Pages;

internal sealed class MultiplePage(PageTestContext pageTestContext) : BasePage(pageTestContext)
{
    private readonly IPage page = pageTestContext.Page;

    public async Task GotoAsync() =>
        await Page.GotoAsync(new Uri(new Uri(PageTestContext.RootUrl), "multiple").ToString());

    public async Task ClickNetwork1() => await page.Locator("#first").ClickAsync();
    
    public async Task ClickNetwork2() => await page.Locator("#second").ClickAsync();

    public async Task<string?> GetClickedParagraph() => await page.Locator("p").TextContentAsync();

    public async Task<byte[]> CaptureScreenshot([CallerMemberName] string? caller = null) =>
        await TakeScreenshot(page.Locator("#multiple-wrapper"), nameof(MultiplePage), caller);
}
