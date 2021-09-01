import {getEndpointForNetwork, SUPPORTED_NETWORKS} from "./setProvider";
import {ApiPromise, WsProvider} from "@polkadot/api";


let _api = null;

export const getApi = async () => {

    //Singleton here :D
    if (_api !== null) {
        console.log("used api instance from singleton")
        return _api;
    }

    const endpoint = getEndpointForNetwork(SUPPORTED_NETWORKS.POLKADOT);

    const provider = new WsProvider(endpoint);
    const api = await ApiPromise.create({provider});

    const nodeName = await api.rpc.system.chain();

    console.log(`Connected to node ${nodeName}`);

    _api = api;
    return _api;
}
