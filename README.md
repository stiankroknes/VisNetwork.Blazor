# VisNetwork.Blazor

Blazor component for vis.js/[vis-network](https://github.com/visjs/vis-network).

## Demo

You may see a working example [here](https://salmon-dune-0701e470f.azurestaticapps.net/)

## Get Started

Nuget TODO
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

