using Microsoft.Playwright;

namespace VisNetwork.Blazor.UITests.Pages
{
    internal class IndexPage : BasePage
    {
        private readonly IPage page;
        private readonly ILocator networkDiv;
        private readonly ILocator heading;

        public IndexPage(PageTestContext pageTestContext) : base(pageTestContext)
        {
            page = pageTestContext.Page;
            networkDiv = page.Locator("#my-id");
            heading = GetByRoleHeading("VisNetwork Samples");
        }

        public async Task GotoAsync()
        {
            await page.GotoAsync(PageTestContext.RootUrl);
        }

        public ILocator Network => networkDiv;

        public ILocator Heading => heading;

        public async Task CaptureNetworkImage()
        {
            await networkDiv.ScreenshotAsync(new()
            {
                Path = "screenshot.png",
            });
        }
    }
}

