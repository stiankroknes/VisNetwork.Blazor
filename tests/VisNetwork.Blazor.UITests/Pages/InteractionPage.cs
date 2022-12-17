using Microsoft.Playwright;
using Xunit.Abstractions;
using Xunit.Sdk;

namespace VisNetwork.Blazor.UITests.Pages
{
    internal class InteractionPage : BasePage
    {
        private readonly LayoutPage layoutPage;

        private readonly ILocator networkDiv;
        private readonly ILocator selectNode1Button;
        private readonly ILocator selectionParagraph;
        private readonly ILocator clearSelectionButton;

        public InteractionPage(PageTestContext pageTestContext) : base(pageTestContext)
        {
            layoutPage = new LayoutPage(pageTestContext);

            networkDiv = Page.Locator("#my-id");
            selectNode1Button = GetByRoleButton("SelectNode1");
            selectionParagraph = GetByRoleParagraph("selection");
            clearSelectionButton = GetByRoleButton("ClearSelection");
        }

        public async Task GotoAsync()
        {
            await Page.GotoAsync(new Uri(new Uri(PageTestContext.RootUrl), "interaction").ToString());
            //await layoutPage.GotoInteraction();
        }

        public async Task SelectNode1()
        {
            // Why 2 needed?
            await selectNode1Button.ClickAsync(new LocatorClickOptions { ClickCount = 2 });
        }

        public ILocator GetSelection() => selectionParagraph;

        public async Task ClearSelection() => await clearSelectionButton.ClickAsync();

        public async Task CaptureNetworkImage()
        {
            await networkDiv.ScreenshotAsync(new()
            {
                Path = $"screenshot_{nameof(InteractionPage)}.png",
            });
        }

        //public async Task SearchAsync(string text)
        //{
        //    await networkDiv.FillAsync(text);
        //    await networkDiv.PressAsync("Enter");
        //}
    }
}
