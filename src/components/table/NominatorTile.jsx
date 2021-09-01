import React, {useContext} from "react";
import {SelectedNominatorsContext} from "../../context/SelectedNominatorsContext";

export const NominatorTile = ({address, amount, idx}) => {

    const {selectedNominators, setSelectedNominators} = useContext(SelectedNominatorsContext);

    const getBackgroundColor = () => idx % 2 !== 0 ? "bg-gray-100" : "bg-white";

    const isSelected = () => selectedNominators.includes(address)

    const trimAddress = () => `${address.substring(0, 5)}...${address.substring(address.length - 6, address.length - 1)}`

    const handleOnChange = () => {
        setSelectedNominators(
            oldState =>
                isSelected() ?
                    oldState.filter(e => e !== address) :
                    [...oldState, address]
        );
    }


    return <div className={"flex justify-between p-2 pr-4 border-gray-200 border items-center " + getBackgroundColor()}>
        <input checked={isSelected()} onChange={handleOnChange} type="checkbox"
               className="w-1/12 text-left"/>

        <div>
            <p className="w-8/12 text-left self-center">{trimAddress()}</p>
        </div>
        <p className="mx-4 w-3/12 text-right">{amount}</p>
    </div>
}
