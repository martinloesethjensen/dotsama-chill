const { ApiPromise, WsProvider } = require('@polkadot/api');
const { Keyring } = require('@polkadot/keyring');
const fs = require('fs');

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
	const endpoint = options.endpoint !== 'undefined' ? options.endpoint : 'wss://westend-rpc.polkadot.io';
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
	const nominatorIds = nominatorKeys.map(({ args: [nominatorId] }) => nominatorId).slice(0,2);

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

	const unsub = await api.query.balances.locks.multi(nominatorIds, (locks) => {
		let nominatorsBalancesBelow = new Map();
		var index = 0;

		for (lock of locks) {
			const id = lock[0]['id'].toHuman().trim();
			const amount = lock[0]['amount'];

			if (id === "staking") {
				if (amount < minNominatorBond.toNumber()) {
					nominatorsBalancesBelow.set(nominatorIds[index], amount);
				}
			}
			index++;
		}

		for (const [addr, _lock] of nominatorsBalancesBelow) {
			console.log('nominator:', addr.toHuman());
			console.log('amount:', _lock.toHuman());
		}
	});

	console.log('Total nominators:', nominatorIds.length);

	await new Promise(resolve => setTimeout(resolve, 3000));
}

main().catch(console.error).finally(() => process.exit());
