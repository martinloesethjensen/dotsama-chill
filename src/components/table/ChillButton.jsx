import React, {useContext} from "react";
import {Button} from "../Button";
import {chillNominators} from "../../utils/chillNominators";
import {SUPPORTED_NETWORKS} from "../../utils/setProvider";
import {COLORS} from "../../constants";
import {SelectedNominatorsContext} from "../../context/SelectedNominatorsContext";
import {StatisticsContext} from "../../context/StatisticsContext";
import {SelectedAccountContext} from "../../context/SelectedAccountContext";
import {NetworkContext} from "../../context/NetworkContext";
import {NominatorsContext} from "../../context/NominatorsContext";
import {BannerContext} from "../../context/BannerContext";
import {BANNER_MODES} from "../state/BannerState";


export const ChillButton = () => {
    const {selectedNominators} = useContext(SelectedNominatorsContext);
    const {statistics} = useContext(StatisticsContext);
    const {selectedAccount} = useContext(SelectedAccountContext);
    const {selectedNetwork} = useContext(NetworkContext);
    const {nominators} = useContext(NominatorsContext);

    const {showBanner} = useContext(BannerContext)


    const handleOnClick = () => {
        if (statistics.chillThreshold.isNone) {
            showBanner(BANNER_MODES.ON_IS_NO_THRESHOLD);
            return;
        }

        if (selectedNominators.length === 0) {
            return;
        }


        chillNominators(statistics, selectedAccount, selectedNominators, selectedNetwork, showBanner);

    }

    const getButtonName = () => `Chill ${selectedNominators.length}`

    const buttonColor = selectedNetwork === SUPPORTED_NETWORKS.POLKADOT ? COLORS.POLKADOT : COLORS.KUSAMA;


    return <Button onClick={handleOnClick} name={getButtonName()} color={buttonColor}/>

}
