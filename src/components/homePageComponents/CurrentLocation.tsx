export function CurrentLocation() {
    return(
        <div className="ms-1 location flex items-start gap-1">
            <img className="size-full max-w-5 max-h-9 mt-1" src="./src/assets/PinLocation.png" alt="" />
            <div className="text">
                <p className="text-sm">Lokasimu,</p>
                <p className="text-[#3A94FF] text-lg font-semibold -translate-y-1">Kota Bekasi</p>
            </div>
        </div>
    )
}