//// <reference types="vis-data/declarations" />
//// <reference types="vis-network/declarations/entry-esnext" />

import {
    Data,
    IdType,
    Network, NetworkEvents,
    Options,
    Position,
    BoundingBox,
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

    const cfg = options?.configure;
    if (cfg) {
        const realContainer = cfg.container instanceof HTMLElement
            ? cfg.container
            : unwrapReference(cfg.container);
        options.configure = { ...cfg, container: realContainer };
    }

    network.setOptions(options);
    options.configure
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

export function selectNodes(element: HTMLElement, nodeIds: IdType[], highlightEdges?: boolean) {
    console.log('VisNetwork.Blazor: [selectNodes] ', element, nodeIds, highlightEdges);
    const network: Network = getNetworkById(element.id);
    network.selectNodes(nodeIds, highlightEdges);
}

export function getSelectedEdges(element: HTMLElement): IdType[] {
    console.log('VisNetwork.Blazor: [getSelectedEdges] ', element);
    const network: Network = getNetworkById(element.id);
    return network.getSelectedEdges();
}

export function selectEdges(element: HTMLElement, edgeIds: IdType[]) {
    console.log('VisNetwork.Blazor: [selectEdges] ', element, edgeIds);
    const network: Network = getNetworkById(element.id);
    network.selectEdges(edgeIds);
}

export function getSelection(element: HTMLElement): { nodes: IdType[], edges: IdType[] } {
    console.log('VisNetwork.Blazor: [getSelection] ', element);
    const network: Network = getNetworkById(element.id);
    return network.getSelection();
}

export function setSelection(element: HTMLElement, selection: { nodes: IdType[], edges: IdType[] }, options?: SelectionOptions) {
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

// Manipulation
export function enableEditMode(element: HTMLElement) {
    console.log('VisNetwork.Blazor: [enableEditMode] ', element);
    const network: Network = getNetworkById(element.id);
    network.enableEditMode();
}

export function disableEditMode(element: HTMLElement) {
    console.log('VisNetwork.Blazor: [disableEditMode] ', element);
    const network: Network = getNetworkById(element.id);
    network.disableEditMode();
}

export function addNodeMode(element: HTMLElement) {
    console.log('VisNetwork.Blazor: [addNodeMode] ', element);
    const network: Network = getNetworkById(element.id);
    network.addNodeMode();
}

export function addEdgeMode(element: HTMLElement) {
    console.log('VisNetwork.Blazor: [addEdgeMode] ', element);
    const network: Network = getNetworkById(element.id);
    network.addEdgeMode();
}

export function deleteSelected(element: HTMLElement) {
    console.log('VisNetwork.Blazor: [deleteSelected] ', element);
    const network: Network = getNetworkById(element.id);
    network.deleteSelected();
}

// Information
export function getPositions(element: HTMLElement, nodeIds?: IdType[]): { [nodeId: string]: Position } {
    console.log('VisNetwork.Blazor: [getPositions] ', element);
    const network: Network = getNetworkById(element.id);
    return network.getPositions(nodeIds);
}

export function getPosition(element: HTMLElement, nodeId: IdType): Position {
    console.log('VisNetwork.Blazor: [getPosition] ', element);
    const network: Network = getNetworkById(element.id);
    return network.getPosition(nodeId);
}

export function getBoundingBox(element: HTMLElement, nodeId: IdType): BoundingBox {
    console.log('VisNetwork.Blazor: [getBoundingBox] ', element);
    const network: Network = getNetworkById(element.id);
    return network.getBoundingBox(nodeId);
}

export function getConnectedEdges(element: HTMLElement, nodeId: IdType): IdType[] {
    console.log('VisNetwork.Blazor: [getConnectedEdges] ', element);
    const network: Network = getNetworkById(element.id);
    return network.getConnectedEdges(nodeId);
}

// See: https://github.com/dotnet/aspnetcore/blob/28e5d3421e362e046b5391772159076f6ba382bf/src/Components/Web.JS/src/Rendering/ElementReferenceCapture.ts
function unwrapReference(stub?: { id: string }): HTMLElement | undefined {

    // Blazor only “unwraps” an ElementReference to a real DOM node when it’s passed as a top - level argument in a JS interop call
    // thus we need to do it ourselves for nested references.

    if (!stub?.id) { return; }
    const attr = `_bl_${stub.id}`;
    return document.querySelector<HTMLElement>(`[${attr}]`) ?? undefined;
}

//export function getConnectedNodes(element: HTMLElement, nodeId: IdType): IdType[] {
//    console.log('VisNetwork.Blazor: [getConnectedNodes] ', element);
//    const network: Network = getNetworkById(element.id);
//    // IdType[] | Array<{ fromId: IdType, toId: IdType }>
//    return network.getConnectedNodes(nodeId);
//}