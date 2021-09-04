export const BANNER_MODES = Object.freeze({
    ON_IS_BROADCAST: "success",
    ON_DELETED: "deleted",
    ON_IS_IN_BLOCK: "edited",
    ON_IS_FINALIZED: "success-category",
    ON_IS_FAILED: "edited-category"
})

export const BannerState = {
    isVisible: false,
    name: "",
    mode: BANNER_MODES.ON_IS_BROADCAST
}
export const showBanner = ({setBannerState}, mode, name,status) => {
    setBannerState(prev => ({...prev, isVisible: true, mode, name,status}))

}
