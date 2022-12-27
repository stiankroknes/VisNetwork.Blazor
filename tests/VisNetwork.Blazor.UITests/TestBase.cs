using Microsoft.Playwright;
using Microsoft.Playwright.TestAdapter;
using System.Runtime.CompilerServices;
using Xunit.Abstractions;

namespace VisNetwork.Blazor.UITests
{
    public class PageTestContext
    {
        public required IPage Page { get; init; }
        public required string RootUrl { get; init; }
        public required ITestOutputHelper OutputHelper { get; init; }

        public string ScreenshotPrefix { get; init; } = "screenshot_";

        public string GetScreenshotPath(string context, [CallerMemberName] string? caller = null)
        {
            return $"{ScreenshotPrefix}{context}_{caller}.png";
        }
    }

    public abstract class TestBase : IAsyncLifetime
    {
        private readonly Task<IPlaywright> playwrightTask = Microsoft.Playwright.Playwright.CreateAsync();
        private readonly Lazy<bool> BrowsersInstalled = new(InstallBrowsers);

        private readonly List<IBrowserContext> browserContexts = new();
        protected ITestOutputHelper TestOutputHelper { get; }
        public string BrowserName { get; internal set; } = null!;
        public IPlaywright Playwright { get; private set; } = null!;
        public IBrowserType BrowserType { get; private set; } = null!;
        public IBrowser Browser { get; internal set; } = null!;
        public IBrowserContext Context { get; private set; } = null!;

        public IPage Page { get; private set; } = null!;

        protected BlazorWebAssemblyWebHostFixture Fixture { get; }

        protected TestBase(BlazorWebAssemblyWebHostFixture fixture, ITestOutputHelper testOutputHelper)
        {
            Fixture = fixture;
            TestOutputHelper = testOutputHelper;
            _ = Fixture.RootUri; // ensure webhost started
            _ = BrowsersInstalled.Value;
        }

        private static bool InstallBrowsers()
        {
            var exitCode = Program.Main(new[] { "install" });
            if (exitCode != 0)
            {
                Environment.Exit(exitCode);
            }

            return exitCode == 0;
        }

        public async Task<IBrowserContext> NewContext(BrowserNewContextOptions? options = null)
        {
            var context = await Browser.NewContextAsync(options).ConfigureAwait(false);
            browserContexts.Add(context);
            return context;
        }

        public virtual BrowserNewContextOptions ContextOptions() => null!;

        public async Task InitializeAsync()
        {
            Playwright = await playwrightTask.ConfigureAwait(false);
            // can use playwright.Firefox, playwright.Chromium, or playwright.WebKit
            //BrowserName = "firefox";  
            BrowserName = PlaywrightSettingsProvider.BrowserName;
            BrowserType = Playwright[BrowserName];
            Playwright.Selectors.SetTestIdAttribute("data-testid");
            Browser = await Playwright.Firefox.LaunchAsync(new BrowserTypeLaunchOptions
            {
                //Headless = false,
                //SlowMo = 1000,
                TracesDir = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile)
            });

            Context = await NewContext(ContextOptions()).ConfigureAwait(false);
            Page = await Context.NewPageAsync().ConfigureAwait(false);
        }

        protected PageTestContext GetPageTestContext() =>
            new() { OutputHelper = TestOutputHelper, Page = Page, RootUrl = Fixture.RootUri.ToString() };

        protected async Task<PageTestContext> GetNewPageTestContext() =>
            new() { OutputHelper = TestOutputHelper, Page = await Context.NewPageAsync(), RootUrl = Fixture.RootUri.ToString() };

        async Task IAsyncLifetime.DisposeAsync()
        {
            foreach (var context in browserContexts)
            {
                await context.CloseAsync().ConfigureAwait(false);
            }

            Browser?.CloseAsync();
            Playwright?.Dispose();
        }

        public static ILocatorAssertions Expect(ILocator locator) => Assertions.Expect(locator);

        public static IPageAssertions Expect(IPage page) => Assertions.Expect(page);

        public static IAPIResponseAssertions Expect(IAPIResponse response) => Assertions.Expect(response);
    }
}
