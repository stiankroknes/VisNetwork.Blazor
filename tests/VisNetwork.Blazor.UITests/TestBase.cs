using Microsoft.Playwright.TestAdapter;
using System.Runtime.CompilerServices;

namespace VisNetwork.Blazor.UITests;

public class PageTestContext
{
    public required IPage Page { get; init; }

    public required string RootUrl { get; init; }
    public required string BrowserName { get; init; }

    public required ITestOutputHelper OutputHelper { get; init; }

    public string ScreenshotPrefix { get; init; } = "screenshot_";

    public string GetScreenshotPath(string context, [CallerMemberName] string? caller = null) =>
        $"{ScreenshotPrefix}{context}_{caller}.png";
}

public abstract class TestBase : IAsyncLifetime
{
    private readonly List<IBrowserContext> browserContexts = [];

    protected ITestOutputHelper TestOutputHelper { get; }

    protected BlazorWebAssemblyWebHostFixture Fixture { get; }
    protected PlaywrightFixture PlaywrightFixture { get; }

    // PlaywrightSettingsProvider.BrowserName
    public string BrowserName => PlaywrightFixture.BrowserName;
    public IBrowserType BrowserType => PlaywrightFixture.BrowserType;
    public IBrowser Browser => PlaywrightFixture.Browser;
    public IBrowserContext Context { get; private set; } = null!;
    public IPage Page { get; private set; } = null!;

    protected TestBase(BlazorWebAssemblyWebHostFixture fixture, PlaywrightFixture playwrightFixture, ITestOutputHelper testOutputHelper)
    {
        Fixture = fixture;
        PlaywrightFixture = playwrightFixture;
        TestOutputHelper = testOutputHelper;
        _ = Fixture.RootUri; // ensure webhost started
    }

    public async Task<IBrowserContext> NewContext(BrowserNewContextOptions? options = null)
    {
        var context = await Browser.NewContextAsync(options).ConfigureAwait(false);
        browserContexts.Add(context);
        return context;
    }

    public virtual BrowserNewContextOptions ContextOptions() => null!;

    public async ValueTask InitializeAsync()
    {
        Context = await NewContext(ContextOptions()).ConfigureAwait(false);
        Page = await Context.NewPageAsync().ConfigureAwait(false);
    }

    protected PageTestContext GetPageTestContext() =>
        new()
        {
            OutputHelper = TestOutputHelper,
            Page = Page,
            RootUrl = Fixture.RootUri.ToString(),
            BrowserName = BrowserName,
        };

    protected async Task<PageTestContext> GetNewPageTestContext() =>
        new()
        {
            OutputHelper = TestOutputHelper,
            Page = await Context.NewPageAsync(),
            RootUrl = Fixture.RootUri.ToString(),
            BrowserName = BrowserName,
        };

    async ValueTask IAsyncDisposable.DisposeAsync()
    {
        foreach (var context in browserContexts)
        {
            await context.CloseAsync().ConfigureAwait(false);
        }
    }

    public static ILocatorAssertions Expect(ILocator locator) => Assertions.Expect(locator);

    public static IPageAssertions Expect(IPage page) => Assertions.Expect(page);

    public static IAPIResponseAssertions Expect(IAPIResponse response) => Assertions.Expect(response);
}
