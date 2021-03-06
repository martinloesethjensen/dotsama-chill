import {getEndpointForNetwork} from "./setProvider";
import {ApiPromise, WsProvider} from "@polkadot/api";


export const getApi = async (selectedNetwork) => {

    const endpoint = getEndpointForNetwork(selectedNetwork);

    const provider = new WsProvider(endpoint);
    const api = await ApiPromise.create({provider});

    const nodeName = await api.rpc.system.chain();

    console.log(`Connected to node ${nodeName}`);
    return api;
}
