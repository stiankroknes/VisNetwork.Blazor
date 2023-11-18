using System.Runtime.CompilerServices;

namespace VisNetwork.Blazor.UITests.Pages;

internal sealed class DotParsingPage(PageTestContext pageTestContext) : BasePage(pageTestContext)
{
    private readonly IPage page = pageTestContext.Page;

    public Task GotoAsync() => Page.GotoAsync(new Uri(new Uri(PageTestContext.RootUrl), "dot-parsing").ToString());

    public ILocator Network => page.Locator("#my-id");

    public ILocator Heading => GetByRoleHeading("DOT parsing");

    public ILocator ErrorMessage => page.Locator("#error");

    public Task<byte[]> CaptureNetworkImage([CallerMemberName] string? caller = null) =>
        TakeScreenshot(Network, nameof(DotParsingPage), caller);
}
