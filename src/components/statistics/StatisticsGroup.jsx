import React from "react";
import {Statistic} from "./Statistic";

export const StatisticsGroup = ({first, second}) => {
    return <div className="gap-8  bg-white border-white rounded-2xl mb-4 p-12 px-16 grid grid-rows-2">
        <Statistic {...first}/>
        <Statistic {...second}/>
    </div>
}
