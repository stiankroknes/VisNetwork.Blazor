//// <reference types="vis-data/declarations" />
//// <reference types="vis-network/declarations/entry-esnext" />

import * as network from 'vis-network';
// import * as visData from 'vis-data';

type DotNetObjectReference = any;

interface NetworkHolder {
    id: string;
    network: network.Network;
}

export default class BlazorVisNetwork {

    static networks = [];

    // Helper to store vis-network instances
    static getNetworkById(id: string, unobstrusive: boolean = false) {
        const networkHolder: NetworkHolder = this.networks.find(e => e.id === id);

        if (!networkHolder) {

            if (unobstrusive) {
                return null;
            }

            throw new Error("Could not find the network with id: " + id + " network.length: " + this.networks.length);
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

    static create(element: HTMLElement, component: DotNetObjectReference, options: network.Options, data: any) {
        console.log('VisNetwork.Blazor: [create]', element, options, data);

        var oldNetwork = this.getNetworkById(element.id, true);
        if (oldNetwork !== null) {

            this.networks.splice(this.networks.findIndex(item => item.id === element.id), 1);
            oldNetwork.destroy();
            console.log('VisNetwork.Blazor: [destroy] old network destroyed.');
        }

        const control: network.Network = new network.Network(element, data, options);
        console.log('VisNetwork.Blazor: [create] network created.', control);

        this.networks.push({ id: element.id, network: control });
    }

    static setData(element: HTMLElement, data: network.Data) {
        const network: network.Network = this.getNetworkById(element.id);
        network.setData(data);
    }

    static on(element: HTMLElement, component: DotNetObjectReference, eventName: network.NetworkEvents) {
        console.log('VisNetwork.Blazor: [on] ', element, eventName);

        const network: network.Network = this.getNetworkById(element.id);
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
                catch(error) {
                    //  TypeError: cyclic object value: Occurs for deselectNode/Edge event, consider other solutions.
                    const seen = [];
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

    static off(element: HTMLElement, component: DotNetObjectReference, eventName: network.NetworkEvents) {
        console.log('VisNetwork.Blazor: [off] ', element, eventName);
        const network: network.Network = this.getNetworkById(element.id);
        // Remove an event listener. The function you supply has to be the exact same as the one you used in the on function. 
        // If no function is supplied, all listeners will be removed. Look at the event section of the documentation for more information. 
        network.off(eventName);
    }

    // Canvas

    static redraw(element: HTMLElement) {
        const network: network.Network = this.getNetworkById(element.id);
        network.redraw();
    }

    // Clustering

    static clusterOutliers(element: HTMLElement) {
        const network: network.Network = this.getNetworkById(element.id);
        // options?: network.ClusterOptions
        // TODO create obj with string for functions and make js function
        network.clusterOutliers();
    }

    // Selection

    static getSelectedNodes(element: HTMLElement): network.IdType[] {
        const network: network.Network = this.getNetworkById(element.id);
        return network.getSelectedNodes();
    }

    static selectNodes(element: HTMLElement, nodeIds: string[], higlightEdges?: boolean) {
        const network: network.Network = this.getNetworkById(element.id);
        network.selectNodes(nodeIds, higlightEdges);
    }

    static getSelectedEdges(element: HTMLElement): network.IdType[] {
        const network: network.Network = this.getNetworkById(element.id);
        return network.getSelectedEdges();
    }

    static selectEdges(element: HTMLElement, edgeIds: string[]) {
        const network: network.Network = this.getNetworkById(element.id);
        network.selectEdges(edgeIds);
    }

    static getSelection(element: HTMLElement): { nodes: network.IdType[], edges: network.IdType[] } {
        const network: network.Network = this.getNetworkById(element.id);
        return network.getSelection();
    }

    static setSelection(element: HTMLElement, selection: { nodes: string[], edges: string[] }, options?: network.SelectionOptions) {
        const network: network.Network = this.getNetworkById(element.id);
        network.setSelection(selection, options);
    }

    static unselectAll(element: HTMLElement) {
        const network: network.Network = this.getNetworkById(element.id);
        network.unselectAll();
    }
}
