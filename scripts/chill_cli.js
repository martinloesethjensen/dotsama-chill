const { ApiPromise, WsProvider } = require("@polkadot/api");
const { Keyring } = require("@polkadot/keyring");
const fs = require("fs");

const options = require("yargs")
  .option("endpoint", {
    alias: "e",
    type: "string",
    description:
      "The wss endpoint. (defaults to westend) [Westend = wss://westend-rpc.polkadot.io] [Kusama = wss://kusama-rpc.polkadot.io]",
    required: false,
  })
  .option("key", {
    alias: "s",
    type: "string",
    description: "A file with secret key. It is not saved anywhere.",
    required: true,
  }).argv;

async function main() {
  // ['wss://rpc.polkadot.io'] and [''wss://kusama-rpc.polkadot.io'']
  const endpoint =
    typeof options.endpoint !== "undefined"
      ? options.endpoint
      : "wss://westend-rpc.polkadot.io";
  const provider = new WsProvider(endpoint);

  const api = await ApiPromise.create({ provider });

  console.log(
    `Connected to node: ${(await api.rpc.system.chain()).toHuman()} [ss58: ${
      api.registry.chainSS58
    }]`
  );

  // Just for testing batch call with `chillOther(AccountId)`
  const accountKey =
    typeof options["key"] !== "undefined"
      ? fs
          .readFileSync(`${options["key"]}`, "UTF-8")
          .split(/\r?\n/)
          .filter((entry) => entry.trim() != "")
      : undefined;

  const keyring = new Keyring({
    type: "sr25519",
    ss58Format: api.registry.chainSS58,
  });

  let account = keyring.addFromUri(accountKey[0]);
  console.log("🤖 ACCOUNT_ADDRESS: ", account.address);

  const [
    now,
    minNominatorBond,
    maxNominatorsCount,
    chillThreshold,
    nominatorKeys,
  ] = await Promise.all([
    api.query.timestamp.now(),
    api.query.staking.minNominatorBond(),
    api.query.staking.maxNominatorsCount(),
    api.query.staking.chillThreshold(),
    api.query.staking.nominators.keys(),
  ]);

  const threshold = (chillThreshold / 100) * maxNominatorsCount;

  // extract the first key argument [AccountId] as string
  const nominatorIds = nominatorKeys.map(
    ({ args: [nominatorId] }) => nominatorId
  );

  // User should not be allowed to chillOther as this is not possible if it is below threshold.
  if (nominatorIds.length < threshold) {
    console.log(
      `You can\'t chill others when nominators (${nominatorIds.length}) is below threshold (${threshold})`
    );
    return;
  }

  const chillableAmount = nominatorIds.length - threshold;

  console.log("The chillThreshold: " + chillThreshold);
  console.log("The threshold: " + threshold);
  console.log("The chillable amount: " + chillableAmount);
  console.log("The maxNominatorsCount: " + maxNominatorsCount);
  console.log("The current date is: " + now);
  console.log("The current minNominatorBond is: " + minNominatorBond.toHuman());
  console.log("Total nominators:", nominatorIds.length);

  const nominatorPromises = nominatorIds.map(async (stash) => {
    const controller = (await api.query.staking.bonded(stash)).unwrap();
    const ledger = await api.query.staking.ledger(controller);
    const stake = ledger.unwrapOrDefault().total.toBn();
    return { controller, stake, ledger };
  });

  const allNominatorsRaw = await Promise.all(nominatorPromises);

  const nominatorsBelow = allNominatorsRaw.filter(
    ({ controller, stake, ledger }) => {
      if (stake.isZero() && ledger.isNone) {
        console.log(`😱 ${controller} seems to have no ledger. This is a state bug.`);
        return false;
      } else {
        return true;
      }
    }
  ).filter(({ controller, stake, ledger }) => stake < minNominatorBond.toNumber());;
  

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
            .filter((item) => item.total.toBn() < minNominatorBond.toNumber());

          const txns = nominatorsBelow.map((item) =>
            api.tx.staking.chillOther(item.stash)
          );

          // TODO(alex): make sure to slice the `nominatorsBelow`
          // if they are higher than `chillableAmount`
          /*
		  if (nominatorsBelow.length > chillableAmount) {
			// slice(0, chillableAmount - 1) // we need to minus with 1 as this is inclusive in the slice end
		  }
		  */

          console.log("Total chillable:", txns.length);

          const tx = api.tx.utility.batch(txns);

          return;

          // TODO(alex): Should sign with injector on the UI => `{ signer: injector.signer }`
          // https://polkadot.js.org/docs/extension/usage
          await tx.signAndSend(
            account,
            /*{ signer: injector.signer }, */ ({ status }) => {
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
            }
          );

          // Artificially waiting for `signAndSend` to work
          await new Promise((resolve) => setTimeout(resolve, 3000));
        });
    });
}

main()
  .catch(console.error)
  .finally(() => process.exit());
