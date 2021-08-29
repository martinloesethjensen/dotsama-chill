import React from "react";
import {useEffect, useState} from "react";
import {NominatorTile} from "./NominatorTile";

export const NominatorTable = () => {

    const [nominators, setNominators] = useState([]);

    useEffect(() => {
        fetchNominators();
    }, [])


    const fetchNominators = () => {
        //todo Use date from chill js here
        const mockData = [
            {address: "fsdfkm23mk2ek32nk3r4k3k4nk3", amount: 34},
            {address: "gnrjgnrtjkntkjtnkjtnktjnknt", amount: 34},
            {address: "rskngtkrjgntjkrgnjkrtgntjkgn", amount: 34},
            {address: "fsdfkm23mk2ek32nk3r4k3k4nk3", amount: 34},
            {address: "gnrjgnrtjkntkjtnkjtnktjnknt", amount: 34},
            {address: "rskngtkrjgntjkrgnjkrtgntjkgn", amount: 34},
        ]

        setNominators(mockData);
    }

    return <div>
        {nominators.map((nominator, key) => <NominatorTile {...nominator} idx={key} key={key}/>)}
    </div>
}
