import {getApi} from "./getApi";
import {web3FromSource} from "@polkadot/extension-dapp";
import {BANNER_MODES} from "../components/state/BannerState";

export const chillNominators = async (statistics, account, nominatorsList, selectedNetwork, showBanner) => {

    const api = await getApi(selectedNetwork);

    const {chillableAmount} = statistics;

    //createTransactionBatch
    const transactions = nominatorsList.map(nominator => api.tx.staking.chillOther(nominator));


    // if they are higher than `chillableAmount`
    if (nominatorsList.length > chillableAmount) {
        nominatorsList.slice(0, chillableAmount - 1);
    }


    const injector = await web3FromSource(account.meta.source);


    // return;

    const tx = api.tx.utility.batch(transactions);
    await tx.signAndSend(account.address, {signer: injector.signer}, ({status}) => {

        const {name} = tx.meta;

        if (status.isInBlock) {
            showBanner(BANNER_MODES.ON_IS_IN_BLOCK, name, status.asInBlock);
            console.log(`📀 Transaction ${name} included at blockHash ${status.asInBlock}`
            );
        } else if (status.isBroadcast) {
            showBanner(BANNER_MODES.ON_IS_BROADCAST);
            console.log(`🚀 Transaction broadcasted.`);
        } else if (status.isFinalized) {
            showBanner(BANNER_MODES.ON_IS_FINALIZED, name, status.asFinalized);
            console.log(`💯 Transaction ${name}(..) Finalized at blockHash ${status.asFinalized}`
            );
        } else if (status.isReady) {
            // let's not be too noisy..
        } else {
            showBanner(BANNER_MODES.ON_IS_FINALIZED, status);
            console.log(`🤷 Other status ${status}`);
        }
    });

}
