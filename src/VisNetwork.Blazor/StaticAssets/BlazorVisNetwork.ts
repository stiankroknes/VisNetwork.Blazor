//// <reference types="vis-data/declarations" />
//// <reference types="vis-network/declarations/entry-esnext" />

import * as network from 'vis-network';


type DotNetObjectReference = any;

interface NetworkHolder {
    id: string;
    network: network.Network;
}

const _networks: NetworkHolder[] = [];


function getNetworkById(id: string, unobstrusive: boolean = false) {

    const networkHolder: NetworkHolder = _networks.find(e => e.id === id);

    if (!networkHolder) {

        if (unobstrusive) {
            return null;
        }

        throw new Error("Could not find the network with id: '" + id + "', network.length: " + _networks.length);
    }
    else if (!networkHolder.network) {

        if (unobstrusive) {
            return null;
        }

        throw new Error("network is null in networkHolder for network with id:  " + id);
    }

    return networkHolder.network;
}


// Global
export function create(element: HTMLElement, component: DotNetObjectReference, options: network.Options, data: any) {
    console.log('VisNetwork.Blazor: [create]', element, options, data);

    const oldNetwork: network.Network = getNetworkById(element.id, true);
    if (oldNetwork !== null) {

        _networks.splice(_networks.findIndex(item => item.id === element.id), 1);
        oldNetwork.destroy();
        console.log('VisNetwork.Blazor: [destroy] old network destroyed.');
    }

    const control: network.Network = new network.Network(element, data, options);
    console.log('VisNetwork.Blazor: [create] network created.', control);

    _networks.push({ id: element.id, network: control });
}

export function setData(element: HTMLElement, data: network.Data) {
    console.log('VisNetwork.Blazor: [setData].', data);
    const network: network.Network = getNetworkById(element.id);
    network.setData(data);
}

export function setOptions(element: HTMLElement, options: network.Options) {
    console.log('VisNetwork.Blazor: [setOptions].', options);
    const network: network.Network = getNetworkById(element.id);
    network.setOptions(options);
}

export function setSize(element: HTMLElement, width: string, height: string) {
    console.log('VisNetwork.Blazor: [setSize].', element, width, height);
    const network: network.Network = getNetworkById(element.id);
    network.setSize(width, height);
}

export function destroy(element: HTMLElement) {
    console.log('VisNetwork.Blazor: [destroy] ', element);

    const network: network.Network = getNetworkById(element.id);
    if (network !== null && network !== undefined) {
        network.destroy();
        _networks.splice(_networks.findIndex(item => item.id === element.id), 1);
        console.log('VisNetwork.Blazor: [destroy] done.');
    }
}

export function on(element: HTMLElement, component: DotNetObjectReference, eventName: network.NetworkEvents) {
    console.log('VisNetwork.Blazor: [on] ', element, eventName);

    const network: network.Network = getNetworkById(element.id);
    // const network: network.Network = element['_network'];

    const listener = function (e: any) {
        console.log('VisNetwork.Blazor: [on] ' + eventName + ' fired.', e);

        if (eventName === 'afterDrawing' ||
            eventName === 'beforeDrawing') {
            const data = { canvasDataUrl: '' };
            const canvasContext = e as CanvasRenderingContext2D;
            component.invokeMethodAsync("EventCallback", eventName, JSON.stringify(data));

        } else {

            var params;
            try {
                params = JSON.stringify(e);
            }
            catch (error) {
                //  TypeError: cyclic object value: Occurs for deselectNode/Edge event, consider other solutions.
                const seen: any = [];
                params = JSON.stringify(e, function (key, val) {
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

    network.on(eventName, listener);
}

export function off(element: HTMLElement, component: DotNetObjectReference, eventName: network.NetworkEvents) {
    console.log('VisNetwork.Blazor: [off] ', element, eventName);
    const network: network.Network = getNetworkById(element.id);
    // Remove an event listener. The function you supply has to be the exact same as the one you used in the on function.
    // If no function is supplied, all listeners will be removed. Look at the event section of the documentation for more information. 
    network.off(eventName);
}

// Canvas

export function redraw(element: HTMLElement) {
    console.log('VisNetwork.Blazor: [redraw] ', element);
    const network: network.Network = getNetworkById(element.id);
    network.redraw();
}

// Clustering

export function clusterOutliers(element: HTMLElement) {
    console.log('VisNetwork.Blazor: [clusterOutliers] ', element);
    const network: network.Network = getNetworkById(element.id);
    // options?: network.ClusterOptions
    // TODO create obj with string for functions and make js function
    network.clusterOutliers();
}

// Selection

export function getSelectedNodes(element: HTMLElement): network.IdType[] {
    console.log('VisNetwork.Blazor: [getSelectedNodes] ', element);
    const network: network.Network = getNetworkById(element.id);
    return network.getSelectedNodes();
}

export function selectNodes(element: HTMLElement, nodeIds: string[], higlightEdges?: boolean) {
    console.log('VisNetwork.Blazor: [selectNodes] ', element, nodeIds, higlightEdges);
    const network: network.Network = getNetworkById(element.id);
    network.selectNodes(nodeIds, higlightEdges);
}

export function getSelectedEdges(element: HTMLElement): network.IdType[] {
    console.log('VisNetwork.Blazor: [getSelectedEdges] ', element);
    const network: network.Network = getNetworkById(element.id);
    return network.getSelectedEdges();
}

export function selectEdges(element: HTMLElement, edgeIds: string[]) {
    console.log('VisNetwork.Blazor: [selectEdges] ', element, edgeIds);
    const network: network.Network = getNetworkById(element.id);
    network.selectEdges(edgeIds);
}

export function getSelection(element: HTMLElement): { nodes: network.IdType[], edges: network.IdType[] } {
    console.log('VisNetwork.Blazor: [getSelection] ', element);
    const network: network.Network = getNetworkById(element.id);
    return network.getSelection();
}

export function setSelection(element: HTMLElement, selection: { nodes: string[], edges: string[] }, options?: network.SelectionOptions) {
    console.log('VisNetwork.Blazor: [setSelection] ', element, selection, options);
    const network: network.Network = getNetworkById(element.id);
    network.setSelection(selection, options);
}

export function unselectAll(element: HTMLElement) {
    console.log('VisNetwork.Blazor: [unselectAll] ', element);
    const network: network.Network = getNetworkById(element.id);
    network.unselectAll();
}

// DOT parsing
export function parseDOTNetwork(dot: string): string {
    console.log('VisNetwork.Blazor: [parseDOTNetwork before]', dot);
    const parsedData: any = network.network.convertDot(dot);
    console.log('VisNetwork.Blazor: [parseDOTNetwork after]', parsedData);
    return JSON.stringify(parsedData);
}