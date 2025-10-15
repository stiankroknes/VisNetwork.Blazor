using System.Runtime.CompilerServices;

namespace VisNetwork.Blazor.UITests.Pages;

internal sealed class IndexPage : BasePage
{
    private readonly IPage page;

    public IndexPage(PageTestContext pageTestContext) : base(pageTestContext)
    {
        page = pageTestContext.Page;
        Network = page.Locator("#my-id");
        Heading = GetByRoleHeading("VisNetwork Samples");
    }

    public async Task GotoAsync() => await page.GotoAsync(PageTestContext.RootUrl);

    public ILocator Network { get; }

    public ILocator Heading { get; }

    public async Task<byte[]> CaptureNetworkImage([CallerMemberName] string? caller = null) =>
        await TakeScreenshot(Network, nameof(IndexPage), caller);
}
