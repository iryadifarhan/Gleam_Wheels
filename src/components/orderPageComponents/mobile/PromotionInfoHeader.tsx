import { CurrentLocation } from "../../universal/CurrentLocation";

export function PromotionInfoHeader() {
    return(
        <>
            <div className="py-3 px-5">
                <CurrentLocation />
            </div>
            <div className="relative flex flex-col bg-gradient-to-tr from-[#235999] to-[#3A94FF] text-white flex rounded-lg px-5 py-2">
                <h1 className="font-semibold pt-1 text-[max(3.5vw)]">Full detailing dengan potongan <br />
                harga??, kapan lagi!</h1>
                <div className="flex max-w-screen-lg justify-between">
                    <div className="flex flex-col gap-2 mt-[max(2vw)]">
                        <div className="relative discount">
                            <h1 className="text-[max(9.4vw)] leading-10 font-extrabold">150k</h1>
                            <div className="absolute inset-x-0 top-1/2 w-[max(23vw)] h-2 bg-[#AE2020] -translate-y-1/2 -rotate-12"></div>
                        </div>
                        <h1 className="text-[max(12.5vw)] leading-none font-extrabold">105k</h1>
                    </div>
                    <img className="w-[max(40vw)] h-auto object-contain -translate-y-2.5" src="./src/assets/CarPhotoPromotion.png" alt="" />
                </div>
                <p className="bottom-2 absolute text-[max(2.2vw)] italic font-thin">Syarat dan ketentuan berlaku</p>
            </div>     
        </>
    )
}