using System.Runtime.CompilerServices;

namespace VisNetwork.Blazor.UITests.Pages;

internal sealed class OptionsPage(PageTestContext pageTestContext) : BasePage(pageTestContext)
{
    private readonly IPage page = pageTestContext.Page;

    public async Task GotoAsync() =>
        await Page.GotoAsync(new Uri(new Uri(PageTestContext.RootUrl), "options").ToString());


    public async Task ChangeOptionClick() => await GetByRoleButton("ChangeOption").ClickAsync();

    public async Task<byte[]> CaptureScreenshot([CallerMemberName] string? caller = null) =>
        await TakeScreenshot(page.Locator("#my-id"), nameof(OptionsPage), caller);
}
