import { ConnectToWallet } from "./ConnectToWallet";
import React, { useContext } from "react";
import { SwitchNetwork } from "./networkswitch/SwitchNetwork";
import { SelectedAccountContext } from "../context/SelectedAccountContext";
import { NetworkContext } from "../context/NetworkContext";
import { WalletSelect } from "@talisman-connect/components";
import '@talisman-connect/components/talisman-connect-components.esm.css';
import '@talisman-connect/ui/talisman-connect-ui.esm.css';


export const Header = ({ }) => {
    const { selectedAccount, setSelectedAccount } = useContext(SelectedAccountContext);
    const { selectedNetwork, setSelectedNetwork } = useContext(NetworkContext);

    return <div className="flex justify-between items-start pb-6">
        <SwitchNetwork selectedNetwork={selectedNetwork} setSelectedNetwork={setSelectedNetwork} />
        <WalletSelect   // [Required] The dapp name
            dappName="dotsama-chill"

            // The component that opens the WalletSelect Modal
            triggerComponent={
                <button>
                    Connect to wallet
                </button>
            }

            // Callback when an account is selected on the WalletSelect Account Modal. Only relevant when `showAccountsList=true`
            onAccountSelected={(account) => {
                // TODO: set selected account
            }}

            // If `showAccountsList={true}`, then account selection modal will show up after selecting the a wallet. Default is `false`.
            showAccountsList={true} />
    </div>
}
