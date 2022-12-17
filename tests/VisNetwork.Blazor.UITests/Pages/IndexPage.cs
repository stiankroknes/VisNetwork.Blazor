using Microsoft.Playwright;

namespace VisNetwork.Blazor.UITests.Pages
{
    internal class IndexPage
    {
        private readonly IPage page;
        private readonly ILocator networkDiv;

        private PageTestContext pageTestContext;

        public IndexPage(PageTestContext pageTestContext)
        {
            this.pageTestContext = pageTestContext;

            page = pageTestContext.Page;
            networkDiv = page.Locator("#my-id");
        }

        public async Task GotoAsync()
        {
            await page.GotoAsync(pageTestContext.RootUrl);
        }

        public async Task CaptureNetworkImage()
        {
            await networkDiv.ScreenshotAsync(new()
            {
                Path = "screenshot.png",
            });
        }

        //public async Task SearchAsync(string text)
        //{
        //    await networkDiv.FillAsync(text);
        //    await networkDiv.PressAsync("Enter");
        //}
    }
}

