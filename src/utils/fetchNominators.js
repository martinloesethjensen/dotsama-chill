//provider can be kusama or polkadot

export const fetchNominators = async (api, statistics, onSuccess) => {
  const { nominatorIds, minNominatorBond } = statistics;

  // https://github.com/kianenigma/polkadot-chill-bot/blob/64aebb4bd8da19d0200c00708d04d6d0c255a2a7/src/index.ts#L118
  // We need the controller from the `staking.bonded`

  const nominatorPromises = nominatorIds.map(async (stash) => {
    const controller = (await api.query.staking.bonded(stash)).unwrap();
    const ledger = await api.query.staking.ledger(ctrl);
    const stake = ledger.unwrapOrDefault().total.toBn();
    return { controller, stake, ledger };
  });

  const allNominatorsRaw = await Promise.all(nominatorPromises);


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
            .filter((item) => item.total.toBn() < minNominatorBond.toNumber())
            .map(({ stash, total }) => ({
              address: stash.toHuman(),
              amount: total.toHuman(),
            }));

          onSuccess(nominatorsBelow);
        });
    });
};
