import React from "react";

export const NominatorTile = ({address, amount, isSelected,idx}) => {

    console.log(idx)
    const getBackgroundColor = () => idx % 2 === 0 ? "bg-gray-100" : "bg-white";

    const _trimAddress = () => `${address.substring(0, 5)}...${address.substring(address.length - 6, address.length - 1)}`
    return <div className={"flex justify-between p-2  " + getBackgroundColor()}>
        <input value={isSelected} type="checkbox" className="form-checkbox"/>
        <p>{_trimAddress()}</p>
        <p className="mx-4">{amount}</p>
    </div>
}
