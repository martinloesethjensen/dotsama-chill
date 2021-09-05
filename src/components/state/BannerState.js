export const BANNER_MODES = Object.freeze({
    ON_IS_BROADCAST: "broadcast",
    ON_IS_IN_BLOCK: "is-in-block",
    ON_IS_FINALIZED: "is-finalized",
    ON_IS_FAILED: "is-failed",
    ON_IS_KUSAMA :"is-kusama"
})

export const BannerState = {
    isVisible: false,
    name: "",
    mode: BANNER_MODES.ON_IS_BROADCAST
}
export const showBanner = ({setBannerState}, mode, name,status) => {
    setBannerState(prev => ({...prev, isVisible: true, mode, name,status}))

}
