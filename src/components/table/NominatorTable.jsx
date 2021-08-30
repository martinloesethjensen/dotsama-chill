import React, {useContext} from "react";
import {NominatorTile} from "./NominatorTile";
import {TableHeader} from "./TableHeader";
import {NominatorsContext} from "../../context/NominatorsContext";

export const NominatorTable = () => {

    const {nominators, onNominatorsFetched} = useContext(NominatorsContext);

    return <div>
            <TableHeader/>
            {nominators.map((nominator, key) => <NominatorTile {...nominator} idx={key} key={key}/>)}
        </div>
}
