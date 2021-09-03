import React from "react";
import KusamaLogo from "./kusamaLogo.svg";
import PolkadotLogo from "./polkadotLogo.svg";
import {SUPPORTED_NETWORKS} from "../../utils/setProvider";

export const NetworkLogo = ({network}) => {

    const Logo = network === SUPPORTED_NETWORKS.POLKADOT ? PolkadotLogo : KusamaLogo

    return <div className="m-2">
        <div className="flex items-center" style={{width: "30px", height: "30px"}}>
            < img src={Logo}/>
        </div>
    </div>
}
