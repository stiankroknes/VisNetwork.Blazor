using Bunit;
using FluentAssertions;
using System.Text.Json;
using System.Threading.Tasks;
using VisNetwork.Blazor.Models;
using Xunit;
using static VisNetwork.Blazor.Tests.VisNetworkConfig;

namespace VisNetwork.Blazor.Tests;

public partial class NetworkTests
{
    public class DotParsingTests : TestContext
    {
        public DotParsingTests()
        {
            AddVisNetwork(Services);
            JSInterop.Mode = JSRuntimeMode.Strict;
        }

        [Fact]
        public void ArrowsDeserializer_Should_HandleToAsString()
        {
            // Arrange
            var dotParserOutput = """
            {
                "nodes": [
                    {
                        "id": "A",
                        "label": "A",
                        "shape": "circle",
                        "font": {
                            "size": 16,
                            "color": "white"
                        },
                        "color": {
                            "border": "red",
                            "background": "red"
                        }
                    },
                    {
                        "id": "B",
                        "label": "B",
                        "shape": "circle",
                        "font": {
                            "size": 16
                        }
                    }
                ],
                "edges": [
                    {
                        "from": "A",
                        "to": "B",
                        "length": 100,
                        "color": {
                            "color": "gray"
                        },
                        "font": {
                            "color": "black"
                        },
                        "label": "0.5",
                        "arrows": "to"
                    }
                ],
                "options": {}
            }
            """;

            var jsonOptions = new JsonSerializerOptions() {
                PropertyNameCaseInsensitive = true
            };

            //Act
            var networkData = JsonSerializer.Deserialize<NetworkData>(dotParserOutput, jsonOptions);

            //Assert
            Assert.NotEmpty(networkData.Nodes);
            Assert.NotEmpty(networkData.Edges);
        }
    }
}