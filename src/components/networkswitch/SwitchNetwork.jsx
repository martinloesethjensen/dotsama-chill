import React, {useContext} from "react";
import Switch from "react-switch";
import {SUPPORTED_NETWORKS} from "../../utils/setProvider";
import {COLORS} from "../../constants";
import {NetworkContext} from "../../context/NetworkContext";


import {NetworkLogo} from "./NetworkLogo";

export const SwitchNetwork = () => {

    const {selectedNetwork, setSelectedNetwork} = useContext(NetworkContext);

    const isChecked = () => selectedNetwork === SUPPORTED_NETWORKS.POLKADOT;

    const onChange = val => val ? setSelectedNetwork(SUPPORTED_NETWORKS.POLKADOT) : setSelectedNetwork(SUPPORTED_NETWORKS.KUSAMA);

    const networkName = selectedNetwork === SUPPORTED_NETWORKS.POLKADOT ? "Polkadot" : "Kusama";

    return <div className="flex items-center ">
        <NetworkLogo network={SUPPORTED_NETWORKS.KUSAMA}/>
        <Switch
            onColor={COLORS.POLKADOT}
            offColor={COLORS.KUSAMA}
            checked={isChecked()}
            onChange={onChange}
            checkedIcon={false}
            uncheckedIcon={false}
        />
        <NetworkLogo network={SUPPORTED_NETWORKS.POLKADOT}/>

    </div>
}
