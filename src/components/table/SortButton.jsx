import React, {useContext, useState} from "react";
import Switch from "react-switch";
import {NominatorsContext} from "../../context/NominatorsContext";
import {SUPPORTED_NETWORKS} from "../../utils/setProvider";
import {COLORS} from "../../constants";
import {NetworkContext} from "../../context/NetworkContext";

export const SortButton = ({}) => {
    const {selectedNetwork} = useContext(NetworkContext);
    const {setNominators} = useContext(NominatorsContext);

    const SORT_ORDER = Object.freeze({
        "ASC": false,
        "DESC": true
    })
    const [sortOrder, setSortOrder] = useState(SORT_ORDER.ASC)

    const getSortOrderName = () => `${sortOrder === SORT_ORDER.ASC ? "ASC" : "DESC"}`

    const buttonColor = selectedNetwork === SUPPORTED_NETWORKS.POLKADOT ? COLORS.POLKADOT : COLORS.KUSAMA;


    const sortNominators = order => {
        setSortOrder(order);
        setNominators(oldState => {
                const newState = [...oldState];
                order === SORT_ORDER.ASC ?
                    newState.sort((a, b) => a.amount > b.amount ? 1 : -1) :
                    newState.sort((a, b) => a.amount < b.amount ? 1 : -1);
                return newState;
            }
        );
    }

    return <div className="flex items-center ">
        <p className="pr-2 ">{getSortOrderName()}</p>
        <Switch onChange={sortNominators}
                onColor={buttonColor}
                offColor={buttonColor}
                checked={sortOrder}
                checkedIcon={false}
                uncheckedIcon={false}
        />
    </div>

}
