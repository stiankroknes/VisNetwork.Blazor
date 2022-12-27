using Microsoft.Playwright;
using System.Runtime.CompilerServices;

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

        public async Task<byte[]> CaptureNetworkImage([CallerMemberName] string? caller = null) =>
            await TakeScreenshot(networkDiv, nameof(IndexPage), caller);
    }
}
