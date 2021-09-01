export const getEndpointForNetwork = provider => {
    switch (provider) {
        case SUPPORTED_NETWORKS.POLKADOT:
            return "wss://rpc.polkadot.io";
        // case SUPPORTED_NETWORKS.KUSAMA :
        //  return "wss://kusama-rpc.polkadot.io";
        default:
            throw Error(`Unknown Provider ${provider}`);
    }
}

export const SUPPORTED_NETWORKS = Object.freeze({
    "POLKADOT": "POLKADOT",
})
