//// <reference types="vis-data/declarations" />
//// <reference types="vis-network/declarations/entry-esnext" />

import {
    Data,
    IdType,
    Network, NetworkEvents,
    Options,
    SelectionOptions,
    parseDOTNetwork
} from "vis-network/standalone";

type DotNetObjectReference = {
    invokeMethodAsync: (method: string, ...args: any[]) => Promise<any>;
};

interface NetworkHolder {
    id: string;
    network: Network;
}

const _networks: NetworkHolder[] = [];
const _listeners: { [id: string]: { [event: string]: Function } } = {};

function getNetworkById(id: string): Network {

    if (!id) {
        throw new Error("Element id is required.");
    }

    const networkHolder: NetworkHolder | undefined = _networks.find(e => e.id === id);

    if (!networkHolder) {
        throw new Error("Could not find the network with id: '" + id + "', network.length: " + _networks.length);
    }
    else if (!networkHolder.network) {
        throw new Error("network is null in networkHolder for network with id:  " + id);
    }

    return networkHolder.network;
}

function getNetworkByIdOrUndefined(id: string): Network | undefined {

    if (!id) {
        throw new Error("Element id is required.");
    }

    const networkHolder: NetworkHolder | undefined = _networks.find(e => e.id === id);

    if (!networkHolder) {

        return undefined;

    }
    else if (!networkHolder.network) {

        return undefined;
    }

    return networkHolder.network;
}

// Global
export function create(element: HTMLElement, _component: DotNetObjectReference, options: Options, data: any) {
    console.log('VisNetwork.Blazor: [create]', element, options, data);

    const oldNetwork: Network | undefined = getNetworkByIdOrUndefined(element.id);
    if (oldNetwork !== undefined) {

        _networks.splice(_networks.findIndex(item => item.id === element.id), 1);
        oldNetwork.destroy();
        console.log('VisNetwork.Blazor: [destroy] old network destroyed.');
    }

    const control: Network = new Network(element, data, options);
    console.log('VisNetwork.Blazor: [create] network created.', control);

    _networks.push({ id: element.id, network: control });
}

export function setData(element: HTMLElement, data: Data) {
    console.log('VisNetwork.Blazor: [setData].', data);
    const network: Network = getNetworkById(element.id);
    network.setData(data);
}

export function setOptions(element: HTMLElement, options: Options) {
    console.log('VisNetwork.Blazor: [setOptions].', options);
    const network: Network = getNetworkById(element.id);
    network.setOptions(options);
}

export function setSize(element: HTMLElement, width: string, height: string) {
    console.log('VisNetwork.Blazor: [setSize].', element, width, height);
    const network: Network = getNetworkById(element.id);
    network.setSize(width, height);
}

export function destroy(element: HTMLElement) {
    console.log('VisNetwork.Blazor: [destroy] ', element);
    if (element) {
        const network: Network = getNetworkById(element.id);
        if (network) {
            network.destroy();
            _networks.splice(_networks.findIndex(item => item.id === element.id), 1);
            delete _listeners[element.id];
            console.log('VisNetwork.Blazor: [destroy] done.');
        }
    } else {
        console.log('VisNetwork.Blazor: [destroy] element not present.');
    }
}

export function on(element: HTMLElement, component: DotNetObjectReference, eventName: NetworkEvents) {
    console.log('VisNetwork.Blazor: [on] ', element, eventName);

    const network: Network = getNetworkById(element.id);
    // const network: Network = element['_network'];

    const listener = function (e: any) {
        console.log('VisNetwork.Blazor: [on] ' + eventName + ' fired.', e);

        if (eventName === 'afterDrawing' ||
            eventName === 'beforeDrawing') {
            const data = { canvasDataUrl: '' };
            // const canvasContext = e as CanvasRenderingContext2D;
            component.invokeMethodAsync("EventCallback", eventName, JSON.stringify(data));

        } else {

            var params;
            try {
                params = JSON.stringify(e);
            }
            catch (error) {
                //  TypeError: cyclic object value: Occurs for deselectNode/Edge event, consider other solutions.
                const seen: any = [];
                params = JSON.stringify(e, function (_key, val) {
                    if (val != null && typeof val == 'object') {
                        if (seen.indexOf(val) >= 0) {
                            return;
                        }
                        seen.push(val);
                    }
                    return val;
                });
            }
            component.invokeMethodAsync("EventCallback", eventName, params);

        }
    };

    _listeners[element.id] = _listeners[element.id] || {};
    _listeners[element.id][eventName] = listener;

    network.on(eventName, listener);
}

export function off(element: HTMLElement, _component: DotNetObjectReference, eventName: NetworkEvents) {
    console.log('VisNetwork.Blazor: [off] ', element, eventName);
    const network: Network = getNetworkById(element.id);
    const listener: any = _listeners[element.id]?.[eventName];
    if (listener) {
        // Remove an event listener. The function you supply has to be the exact same as the one you used in the on function.
        network.off(eventName, listener);
        delete _listeners[element.id][eventName];
    } else {
        // If no function is supplied, all listeners will be removed. Look at the event section of the documentation for more information. 
        network.off(eventName);
    }
}

// Canvas

export function redraw(element: HTMLElement) {
    console.log('VisNetwork.Blazor: [redraw] ', element);
    const network: Network = getNetworkById(element.id);
    network.redraw();
}

// Clustering

export function clusterOutliers(element: HTMLElement) {
    console.log('VisNetwork.Blazor: [clusterOutliers] ', element);
    const network: Network = getNetworkById(element.id);
    // options?: network.ClusterOptions
    // TODO create obj with string for functions and make js function
    network.clusterOutliers();
}

// Selection

export function getSelectedNodes(element: HTMLElement): IdType[] {
    console.log('VisNetwork.Blazor: [getSelectedNodes] ', element);
    const network: Network = getNetworkById(element.id);
    return network.getSelectedNodes();
}

export function selectNodes(element: HTMLElement, nodeIds: string[], highlightEdges?: boolean) {
    console.log('VisNetwork.Blazor: [selectNodes] ', element, nodeIds, highlightEdges);
    const network: Network = getNetworkById(element.id);
    network.selectNodes(nodeIds, highlightEdges);
}

export function getSelectedEdges(element: HTMLElement): IdType[] {
    console.log('VisNetwork.Blazor: [getSelectedEdges] ', element);
    const network: Network = getNetworkById(element.id);
    return network.getSelectedEdges();
}

export function selectEdges(element: HTMLElement, edgeIds: string[]) {
    console.log('VisNetwork.Blazor: [selectEdges] ', element, edgeIds);
    const network: Network = getNetworkById(element.id);
    network.selectEdges(edgeIds);
}

export function getSelection(element: HTMLElement): { nodes: IdType[], edges: IdType[] } {
    console.log('VisNetwork.Blazor: [getSelection] ', element);
    const network: Network = getNetworkById(element.id);
    return network.getSelection();
}

export function setSelection(element: HTMLElement, selection: { nodes: string[], edges: string[] }, options?: SelectionOptions) {
    console.log('VisNetwork.Blazor: [setSelection] ', element, selection, options);
    const network: Network = getNetworkById(element.id);
    network.setSelection(selection, options);
}

export function unselectAll(element: HTMLElement) {
    console.log('VisNetwork.Blazor: [unselectAll] ', element);
    const currentNetwork: Network = getNetworkById(element.id);
    currentNetwork.unselectAll();
}

export function populateDotNetwork(element: HTMLElement, dot: string): any {
    console.log('VisNetwork.Blazor: [populateDotNetwork]', dot);

    const network: Network = getNetworkById(element.id);
    const parsedData: any = parseDOTNetwork(dot);

    if (!parsedData) {
        console.warn('VisNetwork.Blazor: [populateDotNetwork] no parse result.');
        return;
    }

    var data = {
        nodes: parsedData.nodes,
        edges: parsedData.edges
    };
    network.setData(data);

    if (parsedData.options) {
        network.setOptions(parsedData.options);
    }
    //const json: string = JSON.stringify(parsedData, null, '\t');
    //console.log('VisNetwork.Blazor: [parseDotNetwork json]', json);
    //return json;
    //return parsedData;
}