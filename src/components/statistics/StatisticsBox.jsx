import React from "react";
import { StatisticsGroup } from "./StatisticsGroup";

export const StatisticsBox = ({
  chillableAmount,
  nominatorIds,
  threshold,
  minNominatorBond,
}) => {
  const minNominatorBondOrDefault = () =>
    minNominatorBond === 0 ? "Loading" : minNominatorBond.toHuman();
  const nominatorIdsOrDefault = () =>
    nominatorIds === 0 ? "Loading" : nominatorIds.length;
  const chillableAmountOrDefault = () =>
    chillableAmount === 0 ? "Loading" : chillableAmount;
  const thresholdOrDefault = () => (threshold === 0 ? "Loading" : threshold);
  return (
    <div className="flex justify-between mb-8">
      <StatisticsGroup
        first={{
          name: "Threshold",
          count: thresholdOrDefault(),
          textColor: "red-500",
        }}
      />
      <div></div>
      <StatisticsGroup
        first={{
          name: "Chillable Amount",
          count: chillableAmountOrDefault(),
          textColor: "yellow-500",
        }}
      />
      <div></div>

      <StatisticsGroup
        first={{
          name: "Minimum Nominator Bond",
          count: minNominatorBondOrDefault(),
          textColor: "blue-500",
        }}
      />
    </div>
  );
};
