//provider can be kusama or polkadot
import {ApiPromise, WsProvider} from "@polkadot/api";
import {getEndpointForNetwork} from "./setProvider";


export const fetchNominators = async (networkName, onSuccess) => {
    const endpoint = getEndpointForNetwork(networkName);

    const provider = new WsProvider(endpoint);
    const api = await ApiPromise.create({provider});

    const nodeName = await api.rpc.system.chain();

    console.log(`Connected to node ${nodeName}`);

    const [nominatorKeys, minNominatorBond] = await Promise.all([
            api.query.staking.nominators.keys(),
            api.query.staking.minNominatorBond(),
        ],
    );


    const nominatorIds = nominatorKeys.map(({args: [nominatorId]}) => nominatorId)

    const nominatorsBalancesBelow = new Map();

    await api.query.balances.locks.multi(nominatorIds, (locks) => {
        let idx = 0

        locks.forEach((lock) => {
            const {id, amount} = lock[0];
            if (id.toHuman().trim() === "staking" && amount < minNominatorBond.toNumber()) {
                nominatorsBalancesBelow.set(nominatorIds[idx], amount);
            }
            idx++;
        })
        const res = Array.from(nominatorsBalancesBelow).map(([addr, amount]) => ({
            address: addr.toHuman().trim(),
            amount : amount.toHuman()
        }));
        onSuccess(res.slice(0, 5));//Slice for dev purposes
    })

}


