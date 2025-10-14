using Microsoft.Playwright.TestAdapter;

namespace VisNetwork.Blazor.UITests;

public sealed class PlaywrightFixture : IAsyncLifetime
{
    private readonly Lazy<bool> BrowsersInstalled = new(InstallBrowsers);

    public IPlaywright Playwright { get; private set; } = default!;
    public IBrowser Browser { get; private set; } = default!;

    public string BrowserName { get; private set; } = default!;
    public IBrowserType BrowserType { get; private set; } = default!;

    public PlaywrightFixture()
    {
        _ = BrowsersInstalled.Value;
    }

    private static readonly string[] args = ["install"];

    private static bool InstallBrowsers()
    {
        var exitCode = Program.Main(args);
        if (exitCode != 0)
        {
            Environment.Exit(exitCode);
        }

        return exitCode == 0;
    }

    public async ValueTask InitializeAsync()
    {
        Playwright = await Microsoft.Playwright.Playwright.CreateAsync();
        Playwright.Selectors.SetTestIdAttribute("data-testid");

        // can use playwright.Firefox, playwright.Chromium, or playwright.WebKit
        //BrowserName = "firefox";

        BrowserName = PlaywrightSettingsProvider.BrowserName;
        BrowserType = Playwright[BrowserName];

        //Browser = await Playwright[BrowserName].LaunchAsync(new BrowserTypeLaunchOptions
        //{
        //    //Headless = false,
        //    //SlowMo = 1000,
        //    TracesDir = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile)
        //});

        Browser = await Playwright[BrowserName].LaunchAsync(new BrowserTypeLaunchOptions
        {
            Headless = true,
        });
    }

    public async ValueTask DisposeAsync()
    {
        await Browser.CloseAsync();
        Playwright.Dispose();
    }
}