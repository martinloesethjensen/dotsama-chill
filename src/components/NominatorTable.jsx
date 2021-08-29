import React from "react";
import {useEffect, useState} from "react";
import {NominatorTile} from "./NominatorTile";
import {fetchNominators} from "../utils/fetchNominators";
import {SUPPORTED_NETWORKS} from "../utils/setProvider";

export const NominatorTable = () => {

    const [nominators, setNominators] = useState([]);

    useEffect(() => {
        fetchNominators(SUPPORTED_NETWORKS.POLKADOT, setNominators);
    }, [])


    return <div>
        {nominators.map((nominator, key) => <NominatorTile {...nominator} idx={key} key={key}/>)}
    </div>
}
