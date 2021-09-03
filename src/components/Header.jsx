import {ConnectToWallet} from "./ConnectToWallet";
import React, {useContext} from "react";
import {SwitchNetwork} from "./networkswitch/SwitchNetwork";
import {SelectedAccountContext} from "../context/SelectedAccountContext";
import {NetworkContext} from "../context/NetworkContext";


export const Header = ({}) => {
    const {selectedAccount, setSelectedAccount} = useContext(SelectedAccountContext);
    const {selectedNetwork, setSelectedNetwork} = useContext(NetworkContext);

    return <div className="flex justify-between items-start pb-6">
        <SwitchNetwork selectedNetwork={selectedNetwork} setSelectedNetwork={setSelectedNetwork}/>
        <ConnectToWallet selectedAccount={selectedAccount}
                         setSelectedAccount={setSelectedAccount}/>
    </div>
}
