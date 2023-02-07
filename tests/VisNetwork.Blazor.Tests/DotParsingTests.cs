using System.Linq;
using System.Text.Json;
using VisNetwork.Blazor.Models;
using Xunit;

namespace VisNetwork.Blazor.Tests;

public partial class NetworkTests
{
    public class DotParsingTests
    {
        [Fact]
        public void ArrowsDeserializer_Should_HandleTo_AsString()
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
            Assert.True( networkData.Edges.First().Arrows.To.Enabled);
        }

        [Fact]
        public void ArrowsDeserializer_Should_HandleToFromMiddle_AsStrings()
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
                        "arrows": "from,to;middle"
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
            Assert.True( networkData.Edges.First().Arrows.To.Enabled);
            Assert.True( networkData.Edges.First().Arrows.From.Enabled);
            Assert.True( networkData.Edges.First().Arrows.Middle.Enabled);
        }

        [Fact]
        public void ArrowsDeserializer_Should_HandleTo_AsObject()
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
                        "arrows": {
                            "to" : {
                                "enabled": true
                            }
                        }
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
            Assert.True( networkData.Edges.First().Arrows.To.Enabled);
        }


        [Fact]
        public void ArrowsDeserializer_Should_HandleToMiddleFrom_AsObjects()
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
                        "arrows": {
                            "to" : {
                                "enabled": true
                            },
                            "middle" : {
                                "enabled": true
                            },
                            "from" : {
                                "enabled": true
                            }                                                        
                        }
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
            Assert.True( networkData.Edges.First().Arrows.To.Enabled);
            Assert.True( networkData.Edges.First().Arrows.From.Enabled);
            Assert.True( networkData.Edges.First().Arrows.Middle.Enabled);
        }

    }
}