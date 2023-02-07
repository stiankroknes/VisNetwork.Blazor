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

    private readonly Dictionary<string, ArrowsOptions?> optionsMap = new() {
        {"to", null},
        {"middle", null},
        {"from", null}
    };

    public override Arrows? Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        if(reader.TokenType == JsonTokenType.StartObject)
        {
            reader = ArrowOptionsFromObject(reader, options);
        }
        else if(reader.TokenType == JsonTokenType.String)
        {
            reader = ArrowOptionsFromString(reader);
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

    private Utf8JsonReader ArrowOptionsFromString(Utf8JsonReader reader)
    {
        //String
        string arrowsValue = reader.GetString() ?? throw new JsonException();

        foreach (var property in optionsMap.Keys.Where(k => arrowsValue.Contains(k, StringComparison.OrdinalIgnoreCase)))
        {
            optionsMap[property] = DefaultArrowOptions;
        }

        return reader;
    }

    private Utf8JsonReader ArrowOptionsFromObject(Utf8JsonReader reader, JsonSerializerOptions options)
    {
        //Object: look for to, middle and/or from as sub objects
        var optionsConverter = (JsonConverter<ArrowsOptions>)options.GetConverter(typeof(ArrowsOptions));

        reader.Read(); // past object start
        while (reader.TokenType == JsonTokenType.PropertyName)
        {
            //Property name
            var arrowName = reader.GetString() ?? throw new JsonException();
            arrowName = arrowName.Trim().ToLowerInvariant();

            reader.Read(); //past object start

            //Object
            var arrowOptions = optionsConverter.Read(ref reader, typeof(ArrowsOptions), options);
            optionsMap[arrowName] = arrowOptions;

            reader.Read(); //past object end
        }

        //Check at end of object
        if (reader.TokenType != JsonTokenType.EndObject)
            throw new JsonException();

        return reader;
    }

    public override void Write(Utf8JsonWriter writer, Arrows value, JsonSerializerOptions options)
    {
        throw new NotImplementedException();
    }
}