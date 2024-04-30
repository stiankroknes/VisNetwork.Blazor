//// <reference types="vis-data/declarations" />
//// <reference types="vis-network/declarations/entry-esnext" />

import {
    Network, NetworkEvents,
    SelectionOptions, IdType, Options, Data, parseDOTNetwork
} from "vis-network/standalone";
import {Edge, Position} from "vis-network/declarations/network/Network";

type DotNetObjectReference = any;

interface NetworkHolder {
    id: string;
    network: Network;
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
export function create(element: HTMLElement, component: DotNetObjectReference, options: Options, data: any) {
    console.log('VisNetwork.Blazor: [create]', element, options, data);

    const oldNetwork: Network = getNetworkById(element.id, true);
    if (oldNetwork !== null) {

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
        if (network !== null && network !== undefined) {
            network.destroy();
            _networks.splice(_networks.findIndex(item => item.id === element.id), 1);
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

export function off(element: HTMLElement, component: DotNetObjectReference, eventName: NetworkEvents) {
    console.log('VisNetwork.Blazor: [off] ', element, eventName);
    const network: Network = getNetworkById(element.id);
    // Remove an event listener. The function you supply has to be the exact same as the one you used in the on function.
    // If no function is supplied, all listeners will be removed. Look at the event section of the documentation for more information. 
    network.off(eventName);
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

export function selectNodes(element: HTMLElement, nodeIds: string[], higlightEdges?: boolean) {
    console.log('VisNetwork.Blazor: [selectNodes] ', element, nodeIds, higlightEdges);
    const network: Network = getNetworkById(element.id);
    network.selectNodes(nodeIds, higlightEdges);
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

// Modification

export function addNode(element: HTMLElement, node: Node) {
    console.log('VisNetwork.Blazor: [addNode] ', node);
    const currentNetwork: Network = getNetworkById(element.id);
    
    // @ts-ignore
    currentNetwork.body.data.nodes.getDataSet().add(node);
}

export function addEdge(element: HTMLElement, edge: Edge) {
    console.log('VisNetwork.Blazor: [addEdge] ', edge);
    const currentNetwork: Network = getNetworkById(element.id);

    // @ts-ignore
    currentNetwork.body.data.edges.getDataSet().add(edge);
}

export function updateNode(element: HTMLElement, node: Node) {
    console.log('VisNetwork.Blazor: [updateNode] ', node);
    const currentNetwork: Network = getNetworkById(element.id);

    // @ts-ignore
    currentNetwork.body.data.nodes.getDataSet().update(node);
}

export function updateNodes(element: HTMLElement, nodes: Node[]) {
    console.log('VisNetwork.Blazor: [updateNode] ', nodes);
    const currentNetwork: Network = getNetworkById(element.id);

    // @ts-ignore
    currentNetwork.body.data.nodes.getDataSet().update(nodes);
}

export function updateEdge(element: HTMLElement, edge: Edge) {
    console.log('VisNetwork.Blazor: [updateEdge] ', edge);
    const currentNetwork: Network = getNetworkById(element.id);

    // @ts-ignore
    currentNetwork.body.data.edges.getDataSet().update(edge);
}

export function updateEdges(element: HTMLElement, edges: Edge[]) {
    console.log('VisNetwork.Blazor: [updateEdge] ', edges);
    const currentNetwork: Network = getNetworkById(element.id);

    // @ts-ignore
    currentNetwork.body.data.edges.getDataSet().update(edges);
}

export function removeNode(element: HTMLElement, node: Node) {
    console.log('VisNetwork.Blazor: [removeNode] ', node);
    const currentNetwork: Network = getNetworkById(element.id);
    
    // @ts-ignore
    currentNetwork.body.data.nodes.getDataSet().remove(node);
}

export function removeEdge(element: HTMLElement, edge: Edge) {
    console.log('VisNetwork.Blazor: [removeEdge] ', edge);
    const currentNetwork: Network = getNetworkById(element.id);

    // @ts-ignore
    currentNetwork.body.data.edges.getDataSet().remove(edge);
}

// Information

export function getNodePositions(element: HTMLElement, nodeIds: string[]) : { [nodeId: string]: Position } {
    console.log('VisNetwork.Blazor: [getNodePositions] ', nodeIds);
    const currentNetwork: Network = getNetworkById(element.id);

    return currentNetwork.getPositions(nodeIds);
}