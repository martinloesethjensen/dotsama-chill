import React from "react";
import {StatisticsGroup} from "./StatisticsGroup";

export const StatisticsBox = ({
                                  chillableAmount,
                                  threshold,
                                  minNominatorBond
                              }) => {

    const minNominatorBondOrDefault = () => minNominatorBond === 0 ? 0 : minNominatorBond.toHuman()
    return <div className="flex justify-between mb-8">

        <StatisticsGroup
            first={{name: "Threshold", count: threshold, textColor: "red-500"}}
        />
        <div></div>
        <StatisticsGroup
            first={{
                name: "Chillable Amount",
                count: chillableAmount,
                textColor: "yellow-500"
            }}
        />
        <div></div>

        <StatisticsGroup
            first={{name: "Minimum Nominator Bond", count: minNominatorBondOrDefault(), textColor: "blue-500"}}
        />

    </div>
}
