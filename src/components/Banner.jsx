import React from "react"
import {BANNER_MODES} from "./state/BannerState";
import {COLORS} from "../constants";

export const Banner = ({bannerState, setBannerState}) => {
    const onTransactionIsInBlock = {
        headline: `📀 Transaction ${bannerState.name} included at blockHash ${bannerState.status}`,
        color: "bg-black-400"

    }

    const onTransactionIsBroadcast = {
        headline: `🚀 Transaction broadcasted.`,
        color: "bg-yellow-400"
    }
    const onTransactionIsFinalized = {
        headline: `💯 Transaction ${bannerState.name}(..) Finalized at blockHash ${bannerState.status}`,
        color: "bg-green-400"
    }
    const onTransactionFailed = {
        headline: `🤷 Other status ${bannerState.name}`,
        color: "bg-red-400"
    }

    const onNoThreshold = {
        headline: `Chilling is currently not possible on this network since there is no threshold set for chilling`,
        color: "bg-red-400"
    }

    const headline = () => {
        switch (bannerState.mode) {
            case BANNER_MODES.ON_IS_IN_BLOCK:
                return onTransactionIsInBlock.headline
            case BANNER_MODES.ON_IS_BROADCAST:
                return onTransactionIsBroadcast.headline
            case BANNER_MODES.ON_IS_FINALIZED:
                return onTransactionIsFinalized.headline
            case BANNER_MODES.ON_IS_FAILED:
                return onTransactionFailed.headline
            case BANNER_MODES.ON_IS_NO_THRESHOLD:
                return onNoThreshold.headline

            default:
                return ""
        }
    }

    const color = () => {
        switch (bannerState.mode) {
            case BANNER_MODES.ON_IS_IN_BLOCK:
                return COLORS.POLKADOT
            case BANNER_MODES.ON_IS_BROADCAST:
                return COLORS.YELLOW
            case BANNER_MODES.ON_IS_FINALIZED:
                return COLORS.GREEN
            case BANNER_MODES.ON_IS_FAILED:
                return COLORS.RED
            case BANNER_MODES.ON_IS_NO_THRESHOLD:
                return COLORS.RED
            default:
                return ""
        }
    }

    return (
        bannerState.isVisible &&
        <div style={{backgroundColor: color()}} className=" w-3/6  border rounded-2xl absolute top-5 right-10 z-50">
            <div className="py-3 px-3 ">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="w-0 flex-1 flex items-center">

                        <p className="ml-3 font-medium text-white ">
                            {headline()}
                        </p>
                    </div>

                    <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                        <button
                            onClick={() => setBannerState(prev => ({...prev, isVisible: false}))}
                            type="button"

                            className="-mr-1 flex p-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
                            <span
                                className="sr-only">Dismiss</span>
                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path
                                    d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
