import {NominatorsContext} from "../../context/NominatorsContext";
import {SelectedNominatorsContext} from "../../context/SelectedNominatorsContext";
import React, {useContext} from "react";
import {Button} from "../Button";
import {chillNominators} from "../../utils/chillNominators";
import {SortButton} from "./SortButton";
import {StatisticsContext} from "../../context/StatisticsContext";
import {SelectedAccountContext} from "../../context/SelectedAccountContext";
import {NetworkContext} from "../../context/NetworkContext";
import {SUPPORTED_NETWORKS} from "../../utils/setProvider";
import {COLORS} from "../../constants";

export const TableHeader = () => {

    const {nominators, setNominators} = useContext(NominatorsContext);
    const {selectedNominators} = useContext(SelectedNominatorsContext);
    const {statistics} = useContext(StatisticsContext);
    const {selectedAccount} = useContext(SelectedAccountContext);
    const {selectedNetwork} = useContext(NetworkContext);

    const handleOnClick = () => {
        chillNominators(statistics, selectedAccount, selectedNominators);

    }

    const getButtonName = () => `Chill ${selectedNominators.length}`

    const buttonColor = selectedNetwork === SUPPORTED_NETWORKS.POLKADOT ? COLORS.POLKADOT : COLORS.KUSAMA;


    return <div className="text-lg">

        <div className="flex justify-between mb-2  p-4  bg-white items-center">
            <p className="text-2xl ">Nominators ({nominators.length})</p>
            <div className="flex justify-between items-center w-4/12 ">
                <SortButton/>
                <Button onClick={handleOnClick} name={getButtonName()} color={buttonColor}/>
            </div>
        </div>
        <div className="flex items-center font-bold px-4 py-2 bg-white ">
            <p className="w-1/12 text-left">Wanna Chill ? </p>
            <p className="w-8/12">Address</p>
            <p className="w-3/12 text-right  ">Amount</p>
        </div>
    </div>

}
