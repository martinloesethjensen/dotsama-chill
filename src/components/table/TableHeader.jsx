import {NominatorsContext} from "../../context/NominatorsContext";
import React, {useContext} from "react";

export const TableHeader = () => {

    const {nominators} = useContext(NominatorsContext);

    return <div className="pt-2  px-6 bg-white mb-1 text-lg">

        <p className="text-2xl pb-8">Nominators ({nominators.length})</p>

        <div className="flex items-center">
            <p className="w-1/12 text-left">Wanna Chill ? </p>
            <p className="w-8/12">Address</p>
            <p className="w-3/12 text-right  ">Amount</p>
        </div>
    </div>

}
