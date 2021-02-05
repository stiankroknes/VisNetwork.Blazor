[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/stiankroknes/visNetwork.blazor)](https://github.com/stiankroknes/VisNetwork.Blazor/issues)
[![GitHub forks](https://img.shields.io/github/forks/stiankroknes/visNetwork.blazor)](https://github.com/stiankroknes/VisNetwork.Blazornetwork/members)
[![GitHub stars](https://img.shields.io/github/stars/stiankroknes/visNetwork.blazor)](https://github.com/stiankroknes/VisNetwork.Blazor/stargazers)

[![NuGet Downloads (official NuGet)](https://img.shields.io/nuget/dt/VisNetwork.Blazor?label=NuGet%20Downloads)](https://www.nuget.org/packages/VisNetwork.Blazor/)

# VisNetwork.Blazor

Blazor component for vis.js/[vis-network](https://github.com/visjs/vis-network).

## Demo

You may see a working example [here](https://salmon-dune-0701e470f.azurestaticapps.net/)

## Get Started

Install the NuGet package: [VisNetwork.Blazor](https://www.nuget.org/packages/VisNetwork.Blazor/)

Install using the Package Manager in your IDE or using the command line:

```bash
dotnet add package VisNetwork.Blazor
```

* Add the following using directives to your root `_Imports.razor` file, or any other .razor file where you want to use vis-network.
```csharp
@using VisNetwork.Blazor
```

* Add the below Javascript and CSS links to your `index.html` file.
```html
<head>
    <link href="_content/VisNetwork.Blazor/blazor-vis-network.css" rel="stylesheet" />
</head>
<body>
    ...
    <script src="_content/VisNetwork.Blazor/BlazorVisNetwork.js"></script>
    ...
</body>
```

## vis-network

* Add a `Network` component in your .razor file and configure it as you need.
```html
<Network Id="my-id" Data="@data" />
```

### Providing custom options

