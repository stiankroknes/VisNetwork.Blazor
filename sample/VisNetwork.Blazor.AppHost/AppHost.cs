var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.VisNetwork_Blazor_Server>("visnetwork-blazor-server");

builder.AddProject<Projects.VisNetwork_Blazor_Wasm>("visnetwork-blazor-wasm");

builder.Build().Run();
