export const fetchStatistics = async (api) => {


    const [nominatorKeys, minNominatorBond, maxNominatorsCount, chillThreshold, currentEra] = await Promise.all([
            api.query.staking.nominators.keys(),
            api.query.staking.minNominatorBond(),
            api.query.staking.maxNominatorsCount(),
            api.query.staking.chillThreshold(),
            api.query.staking.currentEra(),
        ],
    );

    const nominatorIds = nominatorKeys.map(({args: [nominatorId]}) => nominatorId)
    const threshold = (chillThreshold / 100) * maxNominatorsCount;

    const chillableAmount = nominatorIds.length - threshold;

    // User should not be allowed to chillOther as this is not possible if it is below threshold.
    //TODO isnt the resulting array of fetch nominators empty if this case happens ?
    if (nominatorIds.length < threshold) {
        console.log(`You can\'t chill others when nominators (${nominatorIds.length}) is below threshold (${threshold})`);
        return;
    }

    return {
        chillableAmount,
        nominatorIds,
        threshold,
        minNominatorBond,
        currentEra,
        maxNominatorsCount
    }
}
