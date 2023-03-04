using Microsoft.Playwright;
using System.Runtime.CompilerServices;

namespace VisNetwork.Blazor.UITests.Pages;

internal class BasePage
{
    protected PageTestContext PageTestContext { get; }
    protected IPage Page { get; }

    public BasePage(PageTestContext pageTestContext)
    {
        Page = pageTestContext.Page;
        PageTestContext = pageTestContext;
    }

    protected ILocator GetByRoleHeading(string name) =>
        Page.GetByRole(AriaRole.Heading, new() { NameString = name });

    protected ILocator GetByRoleButton(string name) =>
        Page.GetByRole(AriaRole.Button, new() { NameString = name });

    protected ILocator GetByRoleParagraph(string name) =>
        Page.GetByRole(AriaRole.Paragraph, new() { NameString = name });


    protected async Task<byte[]> TakeScreenshot(ILocator locator, string context, [CallerMemberName] string? caller = null) =>
        await locator.ScreenshotAsync(new()
        {
            Path = PageTestContext.GetScreenshotPath(context, caller),
        });

    protected async Task<byte[]> TakePageScreenshot(string context, [CallerMemberName] string? caller = null) =>
        await Page.ScreenshotAsync(new()
        {
            Path = PageTestContext.GetScreenshotPath(context, caller),
        });
}
