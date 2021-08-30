import React, {useContext, useState} from "react";
import Switch from "react-switch";
import {NominatorsContext} from "../../context/NominatorsContext";

export const SortButton = ({}) => {


    const {setNominators} = useContext(NominatorsContext);

    const SORT_ORDER = Object.freeze({
        "ASC": false,
        "DESC": true
    })
    const [sortOrder, setSortOrder] = useState(SORT_ORDER.ASC)

    const getSortOrderName = () => `${sortOrder === SORT_ORDER.ASC ? "ASC" : "DESC"}`

    const sortNominators = order => {
        setSortOrder(order);
        console.log(order)
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
                onColor="#E6007A"
                offColor="#E6007A"
                checked={sortOrder}
                checkedIcon={false}
                uncheckedIcon={false}
        />
    </div>

}
