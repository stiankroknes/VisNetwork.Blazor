using Microsoft.Playwright;

namespace VisNetwork.Blazor.UITests.Pages
{
    internal class LayoutPage
    {
        private readonly PageTestContext pageTestContext;
        private readonly IPage page;
        private readonly ILocator interactionMenuLink;
        private readonly ILocator multipleMenuLink;
        private readonly ILocator arrowsMenuLink;
        private readonly ILocator optionsMenuLink;
        private readonly ILocator shapesMenuLink;
        private readonly ILocator eventsMenuLink;

        public LayoutPage(PageTestContext pageTestContext)
        {
            this.pageTestContext = pageTestContext;
            page = pageTestContext.Page;
            interactionMenuLink = page.GetByRole(AriaRole.Link, new() { NameString = "Interaction" });
            multipleMenuLink = page.GetByRole(AriaRole.Link, new() { NameString = "Multiple" });
            arrowsMenuLink = page.GetByRole(AriaRole.Link, new() { NameString = "Arrows" });
            optionsMenuLink = page.GetByRole(AriaRole.Link, new() { NameString = "Options" });
            shapesMenuLink = page.GetByRole(AriaRole.Link, new() { NameString = "Shapes" });
            eventsMenuLink = page.GetByRole(AriaRole.Link, new() { NameString = "Events" });
        }

        public async Task GotoMultiple() => await multipleMenuLink.ClickAsync();
        public async Task GotoInteraction() => await interactionMenuLink.ClickAsync();
        public async Task GotoArrows() => await arrowsMenuLink.ClickAsync();
        public async Task GotoOptions() => await optionsMenuLink.ClickAsync();
        public async Task GotoShapes() => await shapesMenuLink.ClickAsync();
        public async Task GotoEvents() => await eventsMenuLink.ClickAsync();


    }
}
