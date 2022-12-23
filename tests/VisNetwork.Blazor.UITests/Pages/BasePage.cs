using Microsoft.Playwright;

namespace VisNetwork.Blazor.UITests.Pages
{
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
    }
}
