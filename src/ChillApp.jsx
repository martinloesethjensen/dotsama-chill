import {NominatorTable} from "./components/table/NominatorTable";
import {NominatorsContext} from "./context/NominatorsContext";
import React, {useEffect, useState} from "react";
import {fetchNominators} from "./utils/fetchNominators";
import {SUPPORTED_NETWORKS} from "./utils/setProvider";
import {SelectedNominatorsContext} from "./context/SelectedNominatorsContext";
import {getApi} from "./utils/getApi";
import {fetchStatistics} from "./utils/fetchStatistics";
import {StatisticsContext} from "./context/StatisticsContext";
import {SelectedAccountContext} from "./context/SelectedAccountContext";
import {StatisticsBox} from "./components/statistics/StatisticsBox";
import {NetworkContext} from "./context/NetworkContext";
import {Header} from "./components/Header";
import {BannerState, showBanner} from "./components/state/BannerState";
import {BannerContext} from "./context/BannerContext";
import {Banner} from "./components/Banner";

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
    const [isLoadingStatistics, setIsLoadingStatistics] = useState(true);

    const [bannerState, setBannerState] = useState({...BannerState})


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
                <SelectedAccountContext.Provider value={{selectedAccount, setSelectedAccount}}>
                    <NetworkContext.Provider value={{selectedNetwork, setSelectedNetwork}}>
                        <BannerContext.Provider
                            value={{showBanner: (mode, name, status) => showBanner({setBannerState}, mode, name, status)}}>
                            <Banner bannerState={bannerState} setBannerState={setBannerState}/>
                            <div className="px-24 py-8 h-screen" style={{backgroundColor: "#f5f3f1"}}>
                                <Header/>
                                <p className="text-md pb-6">A tool to list nominators below threshold and has the option
                                    to
                                    chill multiple
                                    nominators in
                                    a batch.</p>
                                <p className="text-md pb-6 text-red-400">PLEASE NOTE: chilling is not an economically valuable task. 
                                    Anyone submitting the chill merely loses transaction fees, with no reward.</p>
                                <StatisticsBox {...statistics} isLoading={isLoadingStatistics}/>
                                <NominatorTable isLoading={isLoadingNominators}/>
                            </div>
                        </BannerContext.Provider>
                    </NetworkContext.Provider>
                </SelectedAccountContext.Provider>
            </StatisticsContext.Provider>
        </SelectedNominatorsContext.Provider>
    </NominatorsContext.Provider>
}
