const { ApiPromise, WsProvider } = require('@polkadot/api');

async function main() {
	// ['wss://rpc.polkadot.io'] and [''wss://kusama-rpc.polkadot.io'']
	const provider = new WsProvider('wss://rpc.polkadot.io');
	
	const api = await ApiPromise.create({ provider });
	
	console.log(`Connected to node: ${(await api.rpc.system.chain()).toHuman()} [ss58: ${api.registry.chainSS58}]`)

	const [now, minNominatorBond, maxNominatorsCount, chillThreshold, nominatorKeys] = await Promise.all([
		api.query.timestamp.now(),
		api.query.staking.minNominatorBond(),
		api.query.staking.maxNominatorsCount(),
		api.query.staking.chillThreshold(),
		api.query.staking.nominators.keys()
	]);

	const threshold = (chillThreshold / 100) * maxNominatorsCount;
	
	// extract the first key argument [AccountId] as string
	const nominatorIds = nominatorKeys.map(({ args: [nominatorId] }) => nominatorId).slice(0,5);

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
	console.log('all nominators:', nominatorIds.join('\n'));
	
	const unsub = await api.query.system.account.multi(nominatorIds, (balances) => {
		let nominatorsBalancesBelow = new Map();
		var index = 0;
		for (balance of balances) {
			if (balance.data.miscFrozen < minNominatorBond.toNumber()) {
				nominatorsBalancesBelow.set(nominatorIds[index], balance);
			}
			index++;
		}

		for (const [addr, balance] of nominatorsBalancesBelow) {
			console.log('nominator:', addr.toHuman());
			console.log('miscFrozen:', balance.data.miscFrozen.toHuman());
		}
	});

	console.log('Total nominators:', nominatorIds.length);

	await new Promise(resolve => setTimeout(resolve, 3000));
}

main().catch(console.error).finally(() => process.exit());
