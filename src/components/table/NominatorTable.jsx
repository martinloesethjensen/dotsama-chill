import React, {useContext} from "react";
import {NominatorTile} from "./NominatorTile";
import {TableHeader} from "./TableHeader";
import {NominatorsContext} from "../../context/NominatorsContext";
import {ChillAllTile} from "./ChillAllTile";
import {NominatorLoadingState} from "../loadingstates/NominatorLoadingState";

export const NominatorTable = ({isLoading}) => {

    const {nominators, onNominatorsFetched} = useContext(NominatorsContext);


    const isEmpty = () => isLoading === false && nominators.length === 0;


    if (isLoading) {
        return <NominatorLoadingState/>
    }

    if (isEmpty()) {
        return <p>Empty</p>
    }


    return <>
        <TableHeader/>
        <ChillAllTile/>
        {nominators.map((nominator, key) => <NominatorTile {...nominator} idx={key} key={nominator.address}/>)}
    </>

}
