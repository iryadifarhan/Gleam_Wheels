export function PromotionSection() {
    return(
        <div className="promotion relative bg-[#232D40] rounded-xl text-white mx-3 p-2 pb-3">
            <div className="absolute bg-[#3A94FF] rounded-md top-0 left-0 text-8xl px-6 pb-2 -translate-y-[0.1rem] -translate-x-1 font-bold">
                <p>!</p></div>
            <h1 className="text-[max(6vw)] font-bold ms-20">Promo Minggu ini</h1>
            <div className="textContent ms-20 mb-2 flex items-center justify-between pe-4 gap-2">
                <p className="text-[max(3.7vw)]">Dapatkan penawaran terkini 
                    dengan melakukan transaksi 
                    minimal Rp.150,000 di <span className="underline">Gleam wheels</span>
                </p>
                <img className="max-h-24" src="./src/assets/BagCarLogo.png" alt="" />
            </div>
            <p className="italic font-light text-right text-xs pe-4">Syarat dan ketentuan berlaku</p>
        </div>
    )
}