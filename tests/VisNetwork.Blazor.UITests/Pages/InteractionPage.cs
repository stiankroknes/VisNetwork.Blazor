using Microsoft.Playwright;

namespace VisNetwork.Blazor.UITests.Pages
{
    internal class InteractionPage : BasePage
    {
        private readonly LayoutPage layoutPage;

        private readonly ILocator networkDiv;
        private readonly ILocator selectNode1Button;
        private readonly ILocator selectNode2Button;
        private readonly ILocator selectNode3Button;

        private readonly ILocator selectEdge12Button;
        private readonly ILocator selectEdge23Button;
        private readonly ILocator setSelectionNode1AndEdge12Button;

        private readonly ILocator getSelectionButton;
        private readonly ILocator getSelectedNodesButton;
        private readonly ILocator getSelectedEdgesButton;

        private readonly ILocator selectionParagraph;
        private readonly ILocator selectedNodesParagraph;
        private readonly ILocator selectedEdgesPagraph;

        private readonly ILocator clearSelectionButton;

        public InteractionPage(PageTestContext pageTestContext) : base(pageTestContext)
        {
            layoutPage = new LayoutPage(pageTestContext);

            networkDiv = Page.Locator("#my-id");
            selectNode1Button = GetByRoleButton("SelectNode1");
            selectNode2Button = GetByRoleButton("SelectNode2");
            selectNode3Button = GetByRoleButton("SelectNode3");

            selectEdge12Button = GetByRoleButton("SelectEdge12");
            selectEdge23Button = GetByRoleButton("SelectEdge23");
            setSelectionNode1AndEdge12Button = GetByRoleButton("SetSelectionNode1Edge12");

            getSelectionButton = GetByRoleButton("GetSelection");
            getSelectedNodesButton = GetByRoleButton("GetSelectedNodes");
            getSelectedEdgesButton = GetByRoleButton("GetSelectedEdges");

            selectionParagraph = Page.GetByTestId("selectionParagraph");
            selectedNodesParagraph = Page.GetByTestId("selectedNodesParagraph");
            selectedEdgesPagraph = Page.GetByTestId("selectedEdgesParagraph");

            clearSelectionButton = GetByRoleButton("ClearSelection");
        }

        public async Task GotoAsync()
        {
            await Page.GotoAsync(new Uri(new Uri(PageTestContext.RootUrl), "interaction").ToString());
            //await layoutPage.GotoInteraction();
        }

        public async Task SelectNode1() => await selectNode1Button.ClickAsync(new LocatorClickOptions { ClickCount = 2 });
        public async Task SelectNode2() => await selectNode2Button.ClickAsync(new LocatorClickOptions { ClickCount = 2 });
        public async Task SelectNode3() => await selectNode3Button.ClickAsync(new LocatorClickOptions { ClickCount = 2 });

        public async Task SelectEdge12Click() => await selectEdge12Button.ClickAsync(new LocatorClickOptions { ClickCount = 2 });
        public async Task SelectEdge23Click() => await selectEdge23Button.ClickAsync(new LocatorClickOptions { ClickCount = 2 });
        public async Task SelectNode1AndEdge12() => await setSelectionNode1AndEdge12Button.ClickAsync(new LocatorClickOptions { ClickCount = 2 });

        //public async Task<string?> GetSelectionText() => await selectionParagraph.TextContentAsync();
        //public async Task<string?> GetSelectedNodesText() => await selectedNodesParagraph.TextContentAsync();
        //public async Task<string?> GetSelectedEdgesText() => await selectedEdgesPagraph.TextContentAsync();
        public ILocator GetSelectionText() => selectionParagraph;
        public ILocator GetSelectedNodesText() => selectedNodesParagraph;
        public ILocator GetSelectedEdgesText() => selectedEdgesPagraph;

        public async Task GetSelectionClick() => await getSelectionButton.ClickAsync();
        public async Task GetSelectedNodesClick() => await getSelectedNodesButton.ClickAsync();
        public async Task GetSelectedEdgesClick() => await getSelectedEdgesButton.ClickAsync();


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
