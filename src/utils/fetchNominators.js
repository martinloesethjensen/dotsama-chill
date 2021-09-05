//provider can be kusama or polkadot

export const fetchNominators = async (api, statistics, onSuccess) => {
  const { nominatorIds, minNominatorBond } = statistics;

  const nominatorPromises = nominatorIds.map(async (stash) => {
    const controller = (await api.query.staking.bonded(stash)).unwrap();
    const ledger = await api.query.staking.ledger(controller);
    const stake = ledger.unwrapOrDefault().total.toBn();
    return { controller, stake, ledger };
  });

  const allNominatorsRaw = await Promise.all(nominatorPromises);

  const nominatorsBelow = allNominatorsRaw
    .filter(({ controller, stake, ledger }) => {
      if (stake.isZero() && ledger.isNone) {
        console.log(
          `😱 ${controller} seems to have no ledger. This is a state bug.`
        );
        return false;
      } else {
        return true;
      }
    })
    .filter(({ stake }) => stake < minNominatorBond.toNumber())
    .map(({ controller, stake }) => ({
      address: controller.toHuman(),
      amount: stake.toHuman(),
    }));

  onSuccess(nominatorsBelow);
};
