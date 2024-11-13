import { CurrentLocation } from "../../universal/CurrentLocation";

export function PromotionInfoHeader() {
    return(
        <>
            <div className="py-3 px-5">
                <CurrentLocation />
            </div>
            <div className="relative flex flex-col bg-gradient-to-tr from-[#235999] to-[#3A94FF] text-white flex rounded-lg px-5 py-2">
                <h1 className="font-semibold pt-1">Full detailing dengan potongan <br />
                harga??, kapan lagi!</h1>
                <div className="flex max-w-screen-lg justify-between">
                    <div className="flex flex-col gap-2 mt-2">
                        <div className="relative discount">
                            <h1 className="text-4xl font-extrabold">150k</h1>
                            <div className="absolute inset-x-0 top-1/2 w-9/12 h-2 bg-[#AE2020] -translate-y-1/2 -rotate-12"></div>
                        </div>
                        <h1 className="text-5xl font-extrabold">105k</h1>
                    </div>
                    <img className="w-[max(42vw)] h-auto object-contain -translate-y-3" src="./src/assets/CarPhotoPromotion.png" alt="" />
                </div>
                <p className="bottom-2 absolute text-xs italic font-thin">Syarat dan ketentuan berlaku</p>
            </div>     
        </>
    )
}