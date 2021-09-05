import {NominatorsContext} from "../../context/NominatorsContext";
import React, {useContext} from "react";
import {SortButton} from "./SortButton";
import {ChillButton} from "./ChillButton";

export const TableHeader = () => {

    const {nominators} = useContext(NominatorsContext);


    return <div className="text-lg">

        <div className="flex justify-between mb-2  p-4  bg-white items-center">
            <p className="text-2xl ">Nominators ({nominators.length})</p>
            <div className="flex justify-between items-center w-4/12 ">
                <SortButton/>
                <ChillButton/>
            </div>
        </div>
        <div className="flex items-center font-bold px-4 py-2 bg-white ">
            <p className="w-1/12 text-left">Wanna Chill ? </p>
            <p className="w-8/12">Address</p>
            <p className="w-3/12 text-right  ">Amount</p>
        </div>
    </div>

}
