using System;
using System.Collections.Generic;
using System.Linq;
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
        Dictionary<string, ArrowsOptions?> optionsMap = new() {
            {"to", null},
            {"middle", null},
            {"from", null}
        };

        if(reader.TokenType == JsonTokenType.StartObject)
        {
            //Object, look for to, middle and/or from sub objects
            var optionsConverter = (JsonConverter<ArrowsOptions>)options.GetConverter(typeof(ArrowsOptions));

            reader.Read(); //Read past the start object

            //Property name
            var arrowName = reader.GetString() ?? throw new JsonException();
            arrowName = arrowName.Trim().ToLowerInvariant();

            //Object
            reader.Read();
            var arrowOptions = optionsConverter.Read(ref reader, typeof(ArrowsOptions), options);

            optionsMap[arrowName] = arrowOptions;

            //Check at end of object
            reader.Read();
            if(reader.TokenType != JsonTokenType.EndObject)
                throw new JsonException();

        }
        else if(reader.TokenType == JsonTokenType.String)
        {
            //String
            string arrowsValue = reader.GetString() ?? throw new JsonException();

            foreach(var property in optionsMap.Keys.Where( k => arrowsValue.Contains(k, StringComparison.OrdinalIgnoreCase) ))
            {
                optionsMap[property] = DefaultArrowOptions;
            }
        }
        else
        {
            throw new JsonException();
        }

        //Return object
        return new Arrows() {
            To = optionsMap["to"],
            Middle = optionsMap["middle"],
            From = optionsMap["from"]
        };
    }

    public override void Write(Utf8JsonWriter writer, Arrows value, JsonSerializerOptions options)
    {
        throw new NotImplementedException();
    }
}