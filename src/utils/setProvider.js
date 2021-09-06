export const getEndpointForNetwork = provider => {
    switch (provider) {
        case SUPPORTED_NETWORKS.POLKADOT:
            return "wss://service.elara.patract.io/Polkadot/88475bd54c97c29e56946c5340382120";
        case SUPPORTED_NETWORKS.KUSAMA :
            return "wss://service.elara.patract.io/Kusama/ed8790d0226590b545a7af8b5518066c";
        default:
            throw Error(`Unknown Provider ${provider}`);
    }
}

export const SUPPORTED_NETWORKS = Object.freeze({
    "POLKADOT": "POLKADOT",
    "KUSAMA": "KUSAMA"
})
