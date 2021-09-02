import React from "react";

export const Statistic = ({count, name, textColor}) =>
    <div>
        <p className={"text-4xl pb-2 "}>{count}</p>
        <p className={"text-lg text-" + textColor}>{name}</p>
    </div>

