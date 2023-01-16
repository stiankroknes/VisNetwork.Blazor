# UI Tests using Playwright


## Test Generator

Run generator in debug or run sample and update url accordingly.
```
pwsh bin/Debug/net7/playwright.ps1 codegen http://127.0.0.1:53433/
```

## Traces

Capture trace.
```csharp
await using var browser = playwright.Chromium.LaunchAsync();
await using var context = await browser.NewContextAsync();

// Start tracing before creating / navigating a page.
await context.Tracing.StartAsync(new()
{
  Screenshots = true,
  Snapshots = true,
  Sources = true
});

var page = context.NewPageAsync();
await page.GotoAsync("https://playwright.dev");

// Stop tracing and export it into a zip archive.
await context.Tracing.StopAsync(new()
{
  Path = "trace.zip"
});
```

Show output
```
pwsh bin/Debug/net7/playwright.ps1 show-trace trace.zip

```