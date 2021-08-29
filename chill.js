const { ApiPromise, WsProvider } = require('@polkadot/api');
const { Keyring } = require('@polkadot/keyring');
const fs = require('fs');
const BN = require("bn.js");

const options = require('yargs')
  .option('endpoint', {
    alias: 'e',
    type: 'string',
    description: 'The wss endpoint. (defaults to westend) [Westend = wss://westend-rpc.polkadot.io] [Kusama = wss://kusama-rpc.polkadot.io]',
    required: false,
  })
  .option('key', {
    alias: 's',
    type: 'string',
    description: 'A file with secret key. It is not saved anywhere.',
    required: true,
  })
  .argv

async function main() {
	// ['wss://rpc.polkadot.io'] and [''wss://kusama-rpc.polkadot.io'']
	const endpoint = (typeof options.endpoint !== 'undefined') ? options.endpoint : 'wss://westend-rpc.polkadot.io';
	const provider = new WsProvider(endpoint);
	
	const api = await ApiPromise.create({ provider });
	
	console.log(`Connected to node: ${(await api.rpc.system.chain()).toHuman()} [ss58: ${api.registry.chainSS58}]`);

	// Just for testing batch call with `chillOther(AccountId)`
	const accountKey = (typeof options['key'] !== 'undefined') 
      ? fs.readFileSync(`${options['key']}`, 'UTF-8').split(/\r?\n/).filter(entry => entry.trim() != '')
      : undefined;

	const keyring = new Keyring({ type: 'sr25519', ss58Format: api.registry.chainSS58 });

	let account = keyring.addFromUri(accountKey[0]);
	console.log('🤖 ACCOUNT_ADDRESS: ', account.address);

	const [now, minNominatorBond, maxNominatorsCount, chillThreshold, nominatorKeys] = await Promise.all([
		api.query.timestamp.now(),
		api.query.staking.minNominatorBond(),
		api.query.staking.maxNominatorsCount(),
		api.query.staking.chillThreshold(),
		api.query.staking.nominators.keys()
	]);

	const threshold = (chillThreshold / 100) * maxNominatorsCount;
	
	// extract the first key argument [AccountId] as string
	const nominatorIds = nominatorKeys.map(({ args: [nominatorId] }) => nominatorId).slice(0, 100);

	// User should not be allowed to chillOther as this is not possible if it is below threshold.
	// TODO: should be used after testing
	/*
	if (nominatorIds.length < threshold) {
		console.log(`You can\'t chill others when nominators (${nominatorIds.length}) is below threshold (${threshold})`);
		return;
	}
	*/
	
	const chillableAmount = nominatorIds.length - threshold;

	console.log('The chillThreshold: ' + chillThreshold);
	console.log('The threshold: ' + threshold);
	console.log('The chillable amount: ' + chillableAmount);
	console.log('The maxNominatorsCount: ' + maxNominatorsCount);
	console.log('The current date is: ' + now);
	console.log('The current minNominatorBond is: ' + minNominatorBond.toHuman());

	console.log('Total nominators:', nominatorIds.length);

	//const controller = await api.query.staking.bonded(stash);

	// const np = (await api.query.staking.nominators.entries()).map(async ([sk, _]) => {
	// 	const stash = api.createType('AccountId', sk.slice(-32));
	// 	const c = (await api.query.staking.bonded(stash)).unwrapOrDefault();
	// 	const stake = (await api.query.staking.ledger(stash)).unwrapOrDefault().total.toBn();
	// 	return { stash, stake }
	// });
	// const n = await Promise.all(np);
	// console.log(`${n.filter(( { stash, stake }) => stake.lt(800000)).length} stashes are below ${api.createType('Balance', 800000)}`);

	await api.query.staking.bonded.multi(nominatorIds).then(async (_controllers) => {

		const controllers = _controllers.map((controller) => controller.toHuman());

		const stake = await api.query.staking.ledger(_controllers[0].toHuman());

		console.log(stake);
		return;

		await api.query.staking.ledger.multi(controllers).then(async (stakes) => {

			let nominatorsBalancesBelow = new Map();
			var index = 0;

			console.log(stakes[0]);

			return;

			for (stake of stakes) {


				// If a nominator is using a stash controller then we should get the 
				// balance from the nominator instead of the stash controller.
				if (lock[0] === undefined) {
					const balance = await api.query.balances.locks(nominatorIds[index]);
					const id = balance[0]['id'].toHuman().trim();
					const amount = balance[0]['amount'];
					
					console.log(amount.toHuman());
					console.log(controllers[index]);
					console.log(nominatorIds[index].toHuman());
					
					if (id === "staking") {
						if (amount < minNominatorBond.toNumber()) {
							nominatorsBalancesBelow.set(controllers[index], amount);
						}
					}
					continue;
				}

				const id = lock[0]['id'].toHuman().trim();
				const amount = lock[0]['amount'];

				console.log(amount.toHuman());
				console.log(controllers[index]);

				if (id === "staking") {
					if (amount < minNominatorBond.toNumber()) {
						nominatorsBalancesBelow.set(controllers[index], amount);
					}
				}
				index++;
			}


			for (const [addr, _lock] of nominatorsBalancesBelow) {
			 	console.log('nominator:', addr);
			 	console.log('amount:', _lock.toHuman());
			}

			const sliced = Array
				.from(nominatorsBalancesBelow, ([addr, _lock]) =>  addr)
				.slice(0, 2); // TODO: remove after testing
			
			console.log(sliced.length);

			let txns = [];

			for (const addr of sliced) {
				console.log('Addr: ', addr);
				txns.push(api.tx.staking.chillOther(addr))
			}

			console.log(txns.length);

			return;

			const tx = api.tx.utility.batch(txns);

			tx.signAndSend(account, ({ status }) => {
				if (status.isInBlock) {
					console.log(`📀 Transaction ${tx.meta.name} included at blockHash ${status.asInBlock}`);
				} else if (status.isBroadcast) {
					console.log(`🚀 Transaction broadcasted.`);
				} else if (status.isFinalized) {
					console.log(`💯 Transaction ${tx.meta.name}(..) Finalized at blockHash ${status.asFinalized}`);
				} else if (status.isReady) {
					// let's not be too noisy..
				} else {
					console.log(`🤷 Other status ${status}`)
				}
			});
		});
	});

	await new Promise(resolve => setTimeout(resolve, 3000));
}

main().catch(console.error).finally(() => process.exit());
