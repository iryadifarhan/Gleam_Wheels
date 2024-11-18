export function HistoryComponent() {
    return(
        <div className="flex shadow-[0_1px_10px_0_rgba(0,0,0,0.3)] rounded-3xl p-2 pt-3 pb-7 gap-4 items-center justify-between">
            <div className="flex flex-col items-center ps-2 gap-3">
                <p className="text-[max(3.5vw)] font-medium">28 Okt, 12:19</p>
                <img className="bg-gradient-to-t from-[#003E71] to-[#0076D7] rounded-3xl w-[max(25vw)] min-h-[48px] py-2 px-5" src="/gleam_wheels/assetsImg/CarCleaning.png" alt="" />
            </div>
            <div className="flex flex-col justify-center gap-[max(5vw)] mt-2 -translate-x-2">
                <p className="font-semibold text-[max(3.4vw)]">Bear Car Wash</p>
                <p className="text-[max(2.6vw)]">Full Body Car Wash</p>
                <div className="flex items-center gap-1">
                    <img src="/gleam_wheels/assetsImg/CheckLogo.png" alt="" className="size-[max(4.5vw)]"/>
                    <p className="text-[max(2.4vw)] font-semibold">Pemesanan selesai</p>
                </div>
            </div>
            <div className="flex flex-col justify-between h-[max(26vw)] me-2 relative">
                <p className="font-light text-[max(3vw)] text-end">Rp.28.000</p>
                <button className="absolute bg-[#0076D7] rounded-full text-white p-2 font-semibold w-[max(20vw)] text-[max(2.7vw)] right-0 bottom-0 translate-x-2 translate-y-1">Pesan Lagi</button>
            </div>
        </div>
    )
}