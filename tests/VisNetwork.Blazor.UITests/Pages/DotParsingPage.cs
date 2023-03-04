﻿using Microsoft.Playwright;
using System.Runtime.CompilerServices;

namespace VisNetwork.Blazor.UITests.Pages;

internal class DotParsingPage : BasePage
{
    private readonly IPage page;

    public DotParsingPage(PageTestContext pageTestContext) : base(pageTestContext)
    {
        page = pageTestContext.Page;            
    }

    public async Task GotoAsync()
    {
        await Page.GotoAsync(new Uri(new Uri(PageTestContext.RootUrl), "dot-parsing").ToString());
    }

    public ILocator Network => page.Locator("#my-id");

    public ILocator Heading => GetByRoleHeading("VisNetwork Samples");

    public ILocator ErrorMessage => page.Locator("#error");

    public async Task<byte[]> CaptureNetworkImage([CallerMemberName] string? caller = null) =>
        await TakeScreenshot(Network, nameof(IndexPage), caller);
}
