/* This example requires Tailwind CSS v2.0+ */
import React, {Fragment, useEffect, useState} from "react";
import {web3Accounts, web3Enable} from "@polkadot/extension-dapp";
import {Listbox, Transition} from '@headlessui/react'
import {CheckIcon, SelectorIcon} from '@heroicons/react/solid'
import {getApi} from "../utils/getApi";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function ConnectToWallet({selectedAccount, setSelectedAccount}) {
    const [accounts, setAccounts] = useState([]);
    const [balance, setBalance] = useState("");


    const startWeb3 = async () => {
        const allInjected = await web3Enable('dotsama-chill');

        const allAccounts = await web3Accounts();


        setAccounts(allAccounts);
        setSelectedAccount(allAccounts[0]);

        fetchBalance(allAccounts[0]);

    }


    const handleOnAccountChange = async (newAccount) => {
        setSelectedAccount(newAccount);
        fetchBalance(newAccount);

    }

    const fetchBalance = async (account) => {
        const api = await getApi();

        const {data: {free: previousFree}} = await api.query.system.account(account.address);
        setBalance(previousFree.toHuman());
    }

    useEffect(() => {
        startWeb3()
    }, []);


    return (

        accounts.length === 0 ? <p>Please connect Polkadot.js Wallet</p> :

            <div className="flex items-center">
                <p className="pr-4">{balance}</p>
                <Listbox value={selectedAccount} onChange={handleOnAccountChange}>
                    {({open}) => (
                        <>
                            <div className="mt-1 relative pr-4">
                                <Listbox.Button
                                    className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-black focus:border-black sm:text-sm">
              <span className="flex items-center">
                {/*<img src={selected.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full"/>*/}
                  <span className="ml-3 block truncate">{selectedAccount.meta.name}</span>
              </span>
                                    <span
                                        className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
              </span>
                                </Listbox.Button>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options
                                        className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                        {accounts.map((account) => (
                                            <Listbox.Option
                                                key={account.address}
                                                className={({active}) =>
                                                    classNames(
                                                        active ? 'text-white bg-black' : 'text-gray-900',
                                                        'cursor-default select-none relative py-2 pl-3 pr-9'
                                                    )
                                                }
                                                value={account}
                                            >
                                                {({selected, active}) => (
                                                    <>
                                                        <div className="flex items-center">
                                                            {/*<img src={account.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full"/>*/}
                                                            <span
                                                                className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                            >
                            {account.meta.name}
                          </span>
                                                        </div>

                                                        {selected ? (
                                                            <span
                                                                className={classNames(
                                                                    active ? 'text-white' : 'text-black',
                                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                )}
                                                            >
                            <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                          </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </>
                    )}
                </Listbox>
            </div>
    )
}
