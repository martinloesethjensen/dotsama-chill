import React, {useContext} from "react";
import {SelectedNominatorsContext} from "../../context/SelectedNominatorsContext";
import {NominatorsContext} from "../../context/NominatorsContext";

export const ChillAllTile = () => {
    const {selectedNominators, setSelectedNominators} = useContext(SelectedNominatorsContext);
    const {nominators} = useContext(NominatorsContext);

    const getBackgroundColor = () => "bg-gray-100";

    const handleOnChange = (val) => {
        const isSelected = val.target.checked;
        setSelectedNominators(_ => isSelected ? [...nominators.map(e => e.address)] : []);
    }

    return <div className={"flex justify-between p-2 border-gray-200 border items-center " + getBackgroundColor()}>
        <input onChange={(val) => handleOnChange(val)} type="checkbox" className="w-1/12 text-left"/>
        <p className="w-8/12 text-left self-center font-bold">Chill all nominators</p>
        <p className="mx-4 w-3/12 text-right"></p>
    </div>
}
