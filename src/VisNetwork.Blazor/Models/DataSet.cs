using System;
using System.Collections.Generic;
using System.Linq;

namespace VisNetwork.Blazor.Models;

public interface IDataSet
{
    event EventHandler? Changed;
}

/// <summary>
/// Model of vis.js DataSet, supporting flexible item types and id property.
/// </summary>
public class DataSet<TItem> : IEnumerable<TItem>, IDataSet
{
    private readonly Dictionary<string, TItem> data = [];
    private readonly Func<TItem, string> idSelector;

    public int Length => data.Count;

    public event EventHandler? Changed;

    public DataSet(Func<TItem, string> idSelector)
    {
        ArgumentNullException.ThrowIfNull(idSelector);
        this.idSelector = idSelector;
    }

    public DataSet(IEnumerable<TItem> items, Func<TItem, string> idSelector)
        : this(idSelector)
    {
        AddRange(items);
    }

    private void NotifyChanged() => Changed?.Invoke(this, EventArgs.Empty);

    public IEnumerable<string> GetIds() => data.Keys;

    public TItem? Get(string id) => data.TryGetValue(id, out var item) ? item : default;

    public IEnumerable<TItem> GetAll() => data.Values;

    private string AddCore(TItem item)
    {
        var id = idSelector(item);

        if (data.ContainsKey(id))
        {
            throw new InvalidOperationException($"Item with id '{id}' already exists.");
        }

        data[id] = item;

        return id;
    }

    public void Add(TItem item)
    {
        AddCore(item);
        NotifyChanged();
    }

    public List<string> AddRange(IEnumerable<TItem> items)
    {
        var ids = new List<string>();
        foreach (var item in items)
        {
            ids.Add(AddCore(item));
        }

        NotifyChanged();
        return ids;
    }

    public List<string> Update(IEnumerable<TItem> items)
    {
        var ids = new List<string>();

        foreach (var item in items)
        {
            var id = idSelector(item);
            data[id] = item;
            ids.Add(id);
        }

        NotifyChanged();

        return ids;
    }

    public void Update(TItem item)
    {
        var id = idSelector(item);
        data[id] = item;
        NotifyChanged();
    }

    public bool Remove(string id)
    {
        var removed = data.Remove(id);
        if (removed)
        {
            NotifyChanged();
        }
        return removed;
    }

    public List<string> Remove(IEnumerable<string> ids)
    {
        List<string> removed = [.. ids.Where(data.Remove)];
        if (removed.Count > 0)
        {
            NotifyChanged();
        }
        return removed;
    }

    public void Clear()
    {
        data.Clear();
        NotifyChanged();
    }

    public TItem? Max<TKey>(Func<TItem, TKey> selector) where TKey : IComparable<TKey> => data.Values.OrderByDescending(selector).FirstOrDefault();

    public TItem? Min<TKey>(Func<TItem, TKey> selector) where TKey : IComparable<TKey> => data.Values.OrderBy(selector).FirstOrDefault();

    public IEnumerable<TValue> Distinct<TValue>(Func<TItem, TValue> selector) => data.Values.Select(selector).Distinct();

    public void ForEach(Action<TItem, string> action)
    {
        foreach (var kvp in data)
        {
            action(kvp.Value, kvp.Key);
        }
    }

    public IEnumerable<TResult> Map<TResult>(Func<TItem, string, TResult> selector) => data.Select(kvp => selector(kvp.Value, kvp.Key));

    public IEnumerator<TItem> GetEnumerator() => data.Values.GetEnumerator();

    System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator() => GetEnumerator();
}