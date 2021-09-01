//provider can be kusama or polkadot
import {ApiPromise, WsProvider} from "@polkadot/api";
import {getEndpointForNetwork} from "./setProvider";
import {chillNominators} from "./chillNominators";


export const fetchNominators = async (api, statistics, onSuccess) => {

    const {nominatorIds, minNominatorBond} = statistics;

    await api.query.staking.bonded
        .multi(nominatorIds)
        .then(async (_controllers) => {
            const controllers = _controllers.map((controller) =>
                controller.unwrapOrDefault()
            );
            await api.query.staking.ledger
                .multi(controllers)
                .then(async (_stakes) => {
                    const nominatorsBelow = _stakes
                        .map((stake) => stake.unwrapOrDefault())
                        .filter((item) => item.total.toBn() < minNominatorBond.toNumber())
                        .map(({stash, total}) => ({
                            address: stash.toHuman(),
                            amount: total.toHuman()
                        }));

                    onSuccess(nominatorsBelow)

                });
        });

}


