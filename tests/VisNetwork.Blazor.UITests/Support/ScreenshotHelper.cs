using SixLabors.ImageSharp;
using SixLabors.ImageSharp.PixelFormats;

namespace VisNetwork.Blazor.UITests.Support;

// https://github.com/microsoft/playwright-dotnet/blob/main/src/Playwright.Tests/Helpers/ScreenshotHelper.cs

internal static class ScreenshotHelper
{
    internal static bool PixelMatch(string screenShotFile, string fileName, string browserName) =>
        PixelMatch(screenShotFile, File.ReadAllBytes(fileName), browserName);

    internal static bool PixelMatch(string screenShotFile, byte[] screenshot, string browserName)
    {
        const int pixelThreshold = 10;
        const decimal totalTolerance = 0.05m;

        var imagePath = Path.Combine(FindParentDirectory("Screenshots"), browserName);
        Directory.CreateDirectory(imagePath);

        var compareImage = Image.Load<Rgb24>(screenshot);

        var screenShotDumpFile = Path.Combine(imagePath, $"test.png");
        Console.WriteLine("screenShotDumpFile " + screenShotDumpFile);
        //compareImage.Save(Path.Combine(imagePath, $"test-{screenShotFile}"));
        compareImage.Save(screenShotDumpFile);

        var baseImage = Image.Load<Rgb24>(Path.Combine(imagePath, screenShotFile));

        if (baseImage.Width != compareImage.Width || baseImage.Height != compareImage.Height)
        {
            return false;
        }

        int invalidPixelsCount = 0;

        for (int y = 0; y < baseImage.Height; y++)
        {
            for (int x = 0; x < baseImage.Width; x++)
            {
                var pixelA = baseImage[x, y];
                var pixelB = compareImage[x, y];


                if (Math.Abs(pixelA.R - pixelB.R) > pixelThreshold ||
                    Math.Abs(pixelA.G - pixelB.G) > pixelThreshold ||
                    Math.Abs(pixelA.B - pixelB.B) > pixelThreshold)
                {
                    invalidPixelsCount++;
                }
            }
        }

        return (invalidPixelsCount / (baseImage.Height * baseImage.Width)) < totalTolerance;
    }

    private static string FindParentDirectory(string directory)
    {
        string current = AppContext.BaseDirectory;

        while (!Directory.Exists(Path.Combine(current, directory)))
        {
            current = Directory.GetParent(current)!.FullName;
        }

        return Path.Combine(current, directory);
    }
}
