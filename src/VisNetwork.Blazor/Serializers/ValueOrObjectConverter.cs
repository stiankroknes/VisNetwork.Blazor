using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace VisNetwork.Blazor.Serializers;

/// <summary>
/// Constructors can't be invoked on generic types
/// This interface provides the methods to do the conversions
/// </summary>
/// <typeparam name="TOuter">'Outer' type, the one that can handle the simplified version. Must derive from 'Inner'</typeparam>
/// <typeparam name="TInner">'Inner' type, the fully formed object</typeparam>
public interface IValueOrObject<out TOuter, in TInner>
    where TOuter : TInner, new()
    where TInner : new()
{
    public TOuter FromValue(string? value);

    public TOuter FromInner(TInner? inner);
}

/// <summary>
/// Generic converter that can handle either a full object 'inner' or a simplified verion handled by the 'outer' type
/// </summary>
/// <typeparam name="TOuter"></typeparam>
/// <typeparam name="TInner"></typeparam>
public class ValueOrObjectConverter<TOuter, TInner> : JsonConverter<TOuter> 
    where TOuter : class, TInner
    where TInner : class
{
    private readonly JsonTokenType _tokenType;

    private readonly Func<string?, JsonTokenType, TOuter?> _valueFactory;

    private readonly Func<TInner?, TOuter?> _wrapperFactory;

    public ValueOrObjectConverter(JsonTokenType jsonTokenType, Func<string?, JsonTokenType, TOuter?> valueFactory, Func<TInner?, TOuter?> wrapperFactory)
    {
        _tokenType = jsonTokenType;
        _valueFactory = valueFactory;
        _wrapperFactory = wrapperFactory;
    }

    private static JsonConverter<TInner> GetBaseConverter(JsonSerializerOptions options) =>
        (JsonConverter<TInner>)options.GetConverter(typeof(TInner));

    private static TInner? BaseTypeFromObject(ref Utf8JsonReader reader, JsonSerializerOptions options)
    {
        var baseConverter = GetBaseConverter(options);
        return baseConverter.Read(ref reader, typeof(TInner), options);
    }

    public override TOuter? Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        if(reader.TokenType == JsonTokenType.StartObject)
        {
            var baseObject = BaseTypeFromObject(ref reader, options);
            return _wrapperFactory.Invoke(baseObject);
        }
        else if(reader.TokenType == _tokenType)
        {
            string? rawValue;
            if(_tokenType == JsonTokenType.String)
                rawValue = reader.GetString();
            else if(_tokenType == JsonTokenType.Number)
            {
                rawValue = reader.GetDecimal().ToString();
            }
            else if(_tokenType == JsonTokenType.True || _tokenType == JsonTokenType.False)
                rawValue = reader.GetBoolean().ToString();
            else
                throw new JsonException($"Only JsonTokenType.String, Number, True/False supported");

            return _valueFactory.Invoke(rawValue, _tokenType);
        }
        else
        {
            throw new JsonException($"Expected token of type Object or {Enum.GetName<JsonTokenType>(_tokenType)} but got {Enum.GetName<JsonTokenType>(reader.TokenType)}");
        }       
    }

    public override void Write(Utf8JsonWriter writer, TOuter value, JsonSerializerOptions options)
    {
        var baseConverter = GetBaseConverter(options);
        baseConverter.Write(writer, value, options);
    }
}

/// <summary>
/// Factory to wrap the simpler conversions that use the <seealso cref="IValueOrObject{TOuter, TInner}"/> interface
/// </summary>
public static class ValueOrObjectConverterFactory
{
    /// <summary>
    /// Convert a full object <typeparamref name="TInner"/> or a simplified string form using <typeparamref name="TOuter"/>
    /// </summary>
    /// <typeparam name="TOuter"></typeparam>
    /// <typeparam name="TInner"></typeparam>
    /// <returns></returns>
    public static ValueOrObjectConverter<TOuter, TInner> StringOrObjectConverter<TOuter, TInner>()
        where TOuter : class, TInner, IValueOrObject<TOuter, TInner>, new()
        where TInner : class, new()
    {
        return new ValueOrObjectConverter<TOuter, TInner>(
                JsonTokenType.String,
                (string? value, JsonTokenType tokenType) => (new TOuter()).FromValue(value),
                (TInner? inner) => (new TOuter()).FromInner(inner)
        );
    }

    /// <summary>
    /// Convert a full object <typeparamref name="TInner"/> or a simplfied number form using <typeparamref name="TOuter"/>
    /// </summary>
    /// <typeparam name="TOuter"></typeparam>
    /// <typeparam name="TInner"></typeparam>
    /// <returns></returns>
    public static ValueOrObjectConverter<TOuter, TInner> NumberOrObjectConverter<TOuter, TInner>()
        where TOuter : class, TInner, IValueOrObject<TOuter, TInner>, new()
        where TInner : class, new()
    {
        return new ValueOrObjectConverter<TOuter, TInner>(
                JsonTokenType.Number,
                (string? value, JsonTokenType tokenType) => (new TOuter()).FromValue(value),
                (TInner? inner) => (new TOuter()).FromInner(inner)
        );
    }   
}