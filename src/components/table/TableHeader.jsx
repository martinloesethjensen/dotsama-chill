import {NominatorsContext} from "../../context/NominatorsContext";
import {SelectedNominatorsContext} from "../../context/SelectedNominatorsContext";
import React, {useContext} from "react";
import {Button} from "../Button";
import {chillNominators} from "../../utils/chillNominators";

export const TableHeader = () => {

    const {nominators} = useContext(NominatorsContext);
    const {selectedNominators} = useContext(SelectedNominatorsContext);

    const handleOnClick = () => {
        //Todo chill the nominators
        chillNominators(selectedNominators);

    }

    const getButtonName = () => `Chill ${selectedNominators.length}`


    return <div className="pt-2  px-4 bg-white mb-1 text-lg">

        <div className="flex justify-between">
            <p className="text-2xl pb-8">Nominators ({nominators.length})</p>
            <Button onClick={handleOnClick} name={getButtonName()}/>
        </div>
        <div className="flex items-center">
            <p className="w-1/12 text-left">Wanna Chill ? </p>
            <p className="w-8/12">Address</p>
            <p className="w-3/12 text-right  ">Amount</p>
        </div>
    </div>

}
