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
	  
	// extract the first key argument [AccountId] as string
	const nominatorIds = nominatorKeys.map(({ args: [nominatorId] }) => nominatorId).slice(0,5);
	
	console.log('The chillThreshold: ' + chillThreshold);
	console.log('The maxNominatorsCount: ' + maxNominatorsCount);
	console.log('The current date is: ' + now);
	console.log('The current minNominatorBond is: ' + minNominatorBond.toNumber());
	console.log('all nominators:', nominatorIds.join('\n'));

	const unsub = await api.query.system.account.multi(nominatorIds, (balances) => {
		let chillers = balances.filter(bal => bal.data.miscFrozen < minNominatorBond.toNumber());

		console.log(`The balances are ${balances[0]}`);
		console.log(`The chillers are ${chillers.length}`);
	});

	console.log('Nominators:', nominatorIds.length);

	await new Promise(resolve => setTimeout(resolve, 3000));
}

main().catch(console.error).finally(() => process.exit());
