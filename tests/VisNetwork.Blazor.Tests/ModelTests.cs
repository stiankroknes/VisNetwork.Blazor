using FluentAssertions;
using FluentAssertions.Execution;
using System;
using System.Linq;
using System.Reflection;
using Xunit;

namespace VisNetwork.Blazor.Tests;

public class ModelTests
{
    [Fact(Skip = "TODO: only check properties defined as nullable...")]
    public void AllModels_Should_Have_JsonIgnoreAttributes_For_Nullable_Properties()
    {
        // Arrange
        var modelNamespace = "VisNetwork.Blazor.Models";
        var models = typeof(Models.NodeEdgeComposite).Assembly
            .GetTypes()
            .Where(type => type.IsClass && type.Namespace == modelNamespace)
            .ToArray();

        using (new AssertionScope())
        {
            foreach (var model in models)
            {
                foreach (var property in model.GetProperties())
                {
                    var nullable = IsNullable(property);
                    if (nullable)
                    {
                        var hasJsonIgnoreAttribute = property.GetCustomAttributes(typeof(System.Text.Json.Serialization.JsonIgnoreAttribute), false).Length != 0;
                        hasJsonIgnoreAttribute.Should().BeTrue(because: $"Property '{property.Name}' in '{model.Name}' should have [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)] attribute.");
                    }
                }
            }
        }
    }

    private static bool IsNullable(PropertyInfo info) => !info.PropertyType.IsValueType || (Nullable.GetUnderlyingType(info.PropertyType) != null);
}
