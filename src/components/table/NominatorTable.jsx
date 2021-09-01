import React, {useContext} from "react";
import {NominatorTile} from "./NominatorTile";
import {TableHeader} from "./TableHeader";
import {NominatorsContext} from "../../context/NominatorsContext";
import {ChillAllTile} from "./ChillAllTile";

export const NominatorTable = () => {

    const {nominators, onNominatorsFetched} = useContext(NominatorsContext);


    return <div>
        <TableHeader/>
        <ChillAllTile/>
        {nominators.map((nominator, key) => <NominatorTile {...nominator} idx={key} key={nominator.address}/>)}
    </div>
}
