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
import {StatisticsBox} from "./components/statistics/StatisticsBox";
import {SwitchNetwork} from "./components/networkswitch/SwitchNetwork";
import {NetworkContext} from "./context/NetworkContext";

export const ChillApp = ({}) => {

    const [nominators, setNominators] = useState([]);
    const [selectedNominators, setSelectedNominators] = useState([]);
    const [selectedNetwork, setSelectedNetwork] = useState(SUPPORTED_NETWORKS.POLKADOT);

    const [statistics, setStatistics] = useState({
        chillableAmount: 0,
        nominatorIds: 0,
        threshold: 0,
        minNominatorBond: 0,
        currentEra: 0,
        maxNominatorsCount: 0
    });

    const [selectedAccount, setSelectedAccount] = useState({address: null, meta: {name: null}})

    const [isLoadingNominators, setIsLoadingNominators] = useState(true);
    const [isLoadingStatistics, setIsLoadingStatistics] = useState(true)


    useEffect(() => {
        setupChillApp();
    }, [selectedNetwork])

    const setupChillApp = async () => {
        setIsLoadingNominators(true)
        setIsLoadingStatistics(true);
        const api = await getApi(selectedNetwork);
        const statistics = await fetchStatistics(api);


        fetchNominators(api, statistics, onNominatorsFetched);
        setStatistics(statistics);
        setIsLoadingStatistics(false)

    }


    const onNominatorsFetched = nominatorsList => {
        nominatorsList.sort((a, b) => a.amount > b.amount ? 1 : -1);
        setNominators(nominatorsList);
        setIsLoadingNominators(false);
    }


    return <NominatorsContext.Provider value={{nominators, setNominators}}>
        <SelectedNominatorsContext.Provider value={{selectedNominators, setSelectedNominators}}>
            <StatisticsContext.Provider value={{statistics}}>
                <SelectedAccountContext.Provider value={{selectedAccount}}>
                    <NetworkContext.Provider value={{selectedNetwork, setSelectedNetwork}}>
                        <div className=" p-24 h-screen" style={{backgroundColor: "#f5f3f1"}}>
                            <SwitchNetwork selectedNetwork={selectedNetwork} setSelectedNetwork={setSelectedNetwork}/>
                            <div className="flex justify-between items-start pb-6">
                                <h1 className="text-4xl ">dotsama-chill</h1>
                                <ConnectToWallet selectedAccount={selectedAccount} setSelectedAccount={setSelectedAccount} />
                            </div>
                            <p className="text-md pb-6">A tool to list nominators below threshold and has the option to
                                chill multiple
                                nominators in
                                a batch.</p>
                            <StatisticsBox {...statistics} isLoading={isLoadingStatistics}/>
                            {isLoadingNominators ? <LoadingState/> : <NominatorTable/>}
                        </div>
                    </NetworkContext.Provider>
                </SelectedAccountContext.Provider>
            </StatisticsContext.Provider>
        </SelectedNominatorsContext.Provider>
    </NominatorsContext.Provider>
}
