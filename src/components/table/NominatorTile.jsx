import React from "react";

export const NominatorTile = ({address, amount, isSelected, idx}) => {

    console.log(address)
    console.log(amount)
    const getBackgroundColor = () => idx % 2 !== 0 ? "bg-gray-100" : "bg-white";

    const _trimAddress = () => `${address.substring(0, 5)}...${address.substring(address.length - 6, address.length - 1)}`
    return <div className={"flex justify-between p-2 border-gray-200 border items-center " + getBackgroundColor()}>
        <input value={isSelected} type="checkbox" className="w-1/12 text-left"/>
        <p className="w-8/12 text-left">{_trimAddress()}</p>
        <p className="mx-4 w-3/12 text-right">{amount}</p>
    </div>
}
