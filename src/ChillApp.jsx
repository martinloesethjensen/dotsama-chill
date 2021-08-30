import {NominatorTable} from "./components/table/NominatorTable";
import {NominatorsContext} from "./context/NominatorsContext";
import React, {useEffect, useState} from "react";
import {LoadingState} from "./components/LoadingState";
import {fetchNominators} from "./utils/fetchNominators";
import {SUPPORTED_NETWORKS} from "./utils/setProvider";

export const ChillApp = ({}) => {

    const [nominators, setNominators] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchNominators(SUPPORTED_NETWORKS.POLKADOT, onNominatorsFetched);
    }, [])


    const onNominatorsFetched = nominatorsList => {
        nominatorsList.sort((a, b) => a.amount > b.amount ? 1 : -1);
        setNominators(nominatorsList);
        setIsLoading(false);
    }


    return <NominatorsContext.Provider value={{nominators, onNominatorsFetched}}>

        <div className=" p-24 h-screen" style={{backgroundColor: "#f5f3f1"}}>
            <h1 className="text-4xl pb-12">Hello chill app </h1>
            <div className="flex justify-center">
            </div>
            {isLoading ? <LoadingState/> : <NominatorTable/>}
        </div>


    </NominatorsContext.Provider>
}
