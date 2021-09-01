export const chillNominators = async (nominatorsList) => {



    const transactions = nominatorsList.map((item) =>
        api.tx.staking.chillOther(item.stash)
    );

    // TODO(alex): make sure to slice the `nominatorsBelow`
    // if they are higher than `chillableAmount`
    /*
    if (nominatorsBelow.length > chillableAmount) {
      // slice(0, chillableAmount - 1) // we need to minus with 1 as this is inclusive in the slice end
    }
    */

    console.log("Total chillable:", transactions.length);

    const tx = api.tx.utility.batch(transactions);
    await tx.signAndSend(account, /*{ signer: injector.signer }, */ ({status}) => {
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
