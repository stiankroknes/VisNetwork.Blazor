using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using VisNetwork.Blazor.Models;

namespace VisNetwork.Blazor.Serializers;

public class ArrowsJsonConverter : JsonConverter<Arrows>
{
    private readonly ArrowsOptions DefaultArrowOptions = new() {
        Enabled = true
    };

    private readonly char[] Separators = new char[] { ',', ';', '|', ' ' };

    public override Arrows? Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        ArrowsOptions? to = null;
        ArrowsOptions? middle = null;
        ArrowsOptions? from = null;

        if(reader.TokenType == JsonTokenType.StartObject)
        {
            //Object, look for to, middle and/or from sub objects

        }
        else if(reader.TokenType == JsonTokenType.String)
        {
            //String
            string arrowsValue = reader.GetString() ?? throw new JsonException();

            if(arrowsValue.Contains("to", StringComparison.OrdinalIgnoreCase))
            {
                to = DefaultArrowOptions;
            }

            if(arrowsValue.Contains("middle", StringComparison.OrdinalIgnoreCase))
            {
                middle = DefaultArrowOptions;
            }

            if(arrowsValue.Contains("from", StringComparison.OrdinalIgnoreCase))
            {
                from = DefaultArrowOptions;
            }
        }
        else
        {
            throw new JsonException();
        }

        //Return object
        return new Arrows() {
            To = to,
            Middle = middle,
            From = from
        };
    }

    public override void Write(Utf8JsonWriter writer, Arrows value, JsonSerializerOptions options)
    {
        throw new NotImplementedException();
    }
}