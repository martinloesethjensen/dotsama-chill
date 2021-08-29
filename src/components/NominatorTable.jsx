import React from "react";
import {useEffect, useState} from "react";
import {NominatorTile} from "./NominatorTile";
import {fetchNominators} from "../utils/fetchNominators";
import {SUPPORTED_NETWORKS} from "../utils/setProvider";
import {LoadingState} from "./LoadingState";

export const NominatorTable = () => {

    const [nominators, setNominators] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchNominators(SUPPORTED_NETWORKS.POLKADOT, onNominatorsFetched);
    }, [])

    const onNominatorsFetched = (nominatorsList) => {
        setNominators(nominatorsList);
        setIsLoading(false)

    }


    return isLoading ? <LoadingState/> : <div>
        {nominators.map((nominator, key) => <NominatorTile {...nominator} idx={key} key={key}/>)}
    </div>
}
