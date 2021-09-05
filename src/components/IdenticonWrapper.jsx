import React, {useContext} from "react";
import {Identicon} from "@polkadot/react-identicon";
import {SelectedAccountContext} from "../context/SelectedAccountContext";
import "./IdenticonStyles.css"

export const IdenticonWrapper = () => {
    const {selectedAccount, setSelectedAccount} = useContext(SelectedAccountContext);

    return <div id="reset" className="" style={{zIndex: 100}}><Identicon
        address={"5Cz3U51VmtymJ4Z2nefCAUA1ySX5SwR3FEfyh3SAd1dGc4iR"}
        theme="polkadot"
    />
    </div>
}
