import {NominatorTable} from "./components/table/NominatorTable";
import {NominatorsContext} from "./context/NominatorsContext";
import React, {useEffect, useState} from "react";
import {LoadingState} from "./components/LoadingState";
import {fetchNominators} from "./utils/fetchNominators";
import {SUPPORTED_NETWORKS} from "./utils/setProvider";
import {SelectedNominatorsContext} from "./context/SelectedNominatorsContext";
import {ConnectToWallet} from "./components/ConnectToWallet";
import {getApi} from "./utils/getApi";
import {fetchStatistics} from "./utils/fetchStatistics";
import {StatisticsContext} from "./context/StatisticsContext";
import {SelectedAccountContext} from "./context/SelectedAccountContext";

export const ChillApp = ({}) => {

    const [nominators, setNominators] = useState([]);
    const [selectedNominators, setSelectedNominators] = useState([]);

    const [statistics, setStatistics] = useState([]);

    const [selectedAccount, setSelectedAccount] = useState({address: null, meta: {name: null}})

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setupChillApp();
    }, [])

    const setupChillApp = async () => {
        const api = await getApi(SUPPORTED_NETWORKS.POLKADOT);
        const statistics = await fetchStatistics(api);


        fetchNominators(api, statistics, onNominatorsFetched);
        setStatistics(statistics);

    }


    const onNominatorsFetched = nominatorsList => {
        nominatorsList.sort((a, b) => a.amount > b.amount ? 1 : -1);
        setNominators(nominatorsList);
        setIsLoading(false);
    }


    return <NominatorsContext.Provider value={{nominators, setNominators}}>
        <SelectedNominatorsContext.Provider value={{selectedNominators, setSelectedNominators}}>
            <StatisticsContext.Provider value={{statistics}}>
                <SelectedAccountContext.Provider value={{selectedAccount}}>
                    <div className=" p-24 h-screen" style={{backgroundColor: "#f5f3f1"}}>
                        <div className="flex justify-between">
                            <h1 className="text-4xl pb-12">Hello chill app </h1>
                            <ConnectToWallet selectedAccount={selectedAccount} setSelectedAccount={setSelectedAccount}/>
                        </div>
                        <div className="flex justify-center">
                        </div>
                        {isLoading ? <LoadingState/> : <NominatorTable/>}
                    </div>
                </SelectedAccountContext.Provider>
            </StatisticsContext.Provider>
        </SelectedNominatorsContext.Provider>
    </NominatorsContext.Provider>
}
