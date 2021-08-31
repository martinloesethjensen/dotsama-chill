import {NominatorsContext} from "../../context/NominatorsContext";
import {SelectedNominatorsContext} from "../../context/SelectedNominatorsContext";
import React, {useContext, useState} from "react";
import {Button} from "../Button";
import {chillNominators} from "../../utils/chillNominators";
import {SortButton} from "./SortButton";
import {RangeSlider} from "../slider/RangeSlider";
import {TxButton} from "../../substrate-lib/components";

export const TableHeader = () => {

    const {nominators, setNominators} = useContext(NominatorsContext);
    const {selectedNominators} = useContext(SelectedNominatorsContext);


    const handleOnClick = () => {
        //Todo chill the nominators
        chillNominators(selectedNominators);

    }

    const getButtonName = () => `Chill ${selectedNominators.length}`


    return <div className="text-lg">

        <div className="flex justify-between mb-2  p-4  bg-white items-center">
            <p className="text-2xl ">Nominators ({nominators.length})</p>
            <div className="flex justify-between items-center w-4/12 ">
                <SortButton/>
                <Button onClick={handleOnClick} name={getButtonName()}/>
            </div>
        </div>
        <div className="flex items-center font-bold px-4 py-2 bg-white ">
            <p className="w-1/12 text-left">Wanna Chill ? </p>
            <p className="w-8/12">Address</p>
            <p className="w-3/12 text-right  ">Amount</p>
        </div>
    </div>

}
