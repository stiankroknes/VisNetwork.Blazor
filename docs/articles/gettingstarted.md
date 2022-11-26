# Getting started:

### 1. Install from NuGet:

Install the NuGet package: [VisNetwork.Blazor](https://www.nuget.org/packages/VisNetwork.Blazor/).

Install using the Package Manager in your IDE or using the command line:
```csharp
dotnet add package VisNetwork.Blazor
```

### 2. Register library:

* Add the following to the relevant sections of `Program.cs`.
```csharp
using VisNetwork.Blazor;

builder.Services.AddVisNetwork();
```

* Add the following using directives to your root `_Imports.razor` file, or any other .razor file where you want to use vis-network.
```cs
 @using VisNetwork.Blazor
```

### 3. Basic usage:

* Add a `Network` component in your `.razor` file and configure it as you need. See Sample-app for example usage.
```html
<Network Id="my-id" Data="@data" />
```

### 4. [Browse the API Reference](../api/index.md)

### 5. Explore the sample on GitHub:

 - [Sample](https://github.com/stiankroknes/VisNetwork.Blazor/tree/main/sample/VisNetwork.Blazor.Sample) 
