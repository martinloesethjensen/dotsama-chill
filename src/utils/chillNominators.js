import {getApi} from "./getApi";
import {web3FromSource} from "@polkadot/extension-dapp";

export const chillNominators = async (statistics, account, nominatorsList) => {

    const api = await getApi();

    const {chillableAmount} = statistics;

    //createTransactionBatch
    const transactions = nominatorsList.map(nominator =>
        api.tx.staking.chillOther(nominator.stash)
    );


    // if they are higher than `chillableAmount`
    if (nominatorsList.length > chillableAmount) {
        nominatorsList.slice(0, chillableAmount - 1);
    }


    const injector = await web3FromSource(account.meta.source);

    console.log("Total chillable:", transactions.length);

    console.log("ACCOUNT")
    console.log(account)

    const tx = api.tx.utility.batch(transactions);
    await tx.signAndSend(account.address, {signer: injector.signer}, ({status}) => {
        if (status.isInBlock) {
            console.log(
                `📀 Transaction ${tx.meta.name} included at blockHash ${status.asInBlock}`
            );
        } else if (status.isBroadcast) {
            console.log(`🚀 Transaction broadcasted.`);
        } else if (status.isFinalized) {
            console.log(
                `💯 Transaction ${tx.meta.name}(..) Finalized at blockHash ${status.asFinalized}`
            );
        } else if (status.isReady) {
            // let's not be too noisy..
        } else {
            console.log(`🤷 Other status ${status}`);
        }
    });

}
