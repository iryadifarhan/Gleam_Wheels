export function CurrentLocation() {
    return(
        <div className="ms-1 location flex items-start gap-1">
            <img className="size-full max-w-[max(4.6vw)] max-h-9 mt-1" src="/gleam_wheels/assetsImg/PinLocation.png" alt="" />
            <div className="text font-semibold">
                <p className="text-[max(3vw)]">Lokasimu,</p>
                <p className="text-[#3A94FF] text-[max(4vw)] leading-none">Kota Bekasi</p>
            </div>
        </div>
    )
}