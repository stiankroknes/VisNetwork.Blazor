using System.Runtime.CompilerServices;

namespace VisNetwork.Blazor.UITests.Pages;

internal sealed class IssuePage : BasePage
{
    private readonly IPage page;
    private readonly ILocator networkDiv;
    private readonly ILocator input;
    private readonly ILocator submitButton;

    public IssuePage(PageTestContext pageTestContext) : base(pageTestContext)
    {
        page = pageTestContext.Page;
        networkDiv = page.Locator("#mynetwork");
        input = page.Locator("#name");
        submitButton = GetByRoleButton("Submit");
    }

    public async Task GotoAsync() =>
        await Page.GotoAsync(new Uri(new Uri(PageTestContext.RootUrl), "issue").ToString());

    public async Task Input(string text) => await input.FillAsync(text);

    public async Task Submit() => await submitButton.ClickAsync();

    public ILocator Network => networkDiv;

    public async Task<byte[]> CaptureNetworkImage([CallerMemberName] string? caller = null) =>
        await TakeScreenshot(networkDiv, nameof(IssuePage), caller);
}
