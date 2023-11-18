using System.Runtime.CompilerServices;

namespace VisNetwork.Blazor.UITests.Pages;

internal class BasePage(PageTestContext pageTestContext)
{
    protected PageTestContext PageTestContext { get; } = pageTestContext;
    protected IPage Page { get; } = pageTestContext.Page;

    protected ILocator GetByRoleHeading(string name) =>
        Page.GetByRole(AriaRole.Heading, new() { NameString = name });

    protected ILocator GetByRoleButton(string name) =>
        Page.GetByRole(AriaRole.Button, new() { NameString = name });

    protected ILocator GetByRoleParagraph(string name) =>
        Page.GetByRole(AriaRole.Paragraph, new() { NameString = name });


    protected Task<byte[]> TakeScreenshot(ILocator locator, string context, [CallerMemberName] string? caller = null) =>
        locator.ScreenshotAsync(new()
        {
            Path = PageTestContext.GetScreenshotPath($"{PageTestContext.BrowserName}_{context}", caller),
        });

    protected Task<byte[]> TakePageScreenshot(string context, [CallerMemberName] string? caller = null) =>
        Page.ScreenshotAsync(new()
        {
            Path = PageTestContext.GetScreenshotPath($"{PageTestContext.BrowserName}_{context}", caller),
        });
}
