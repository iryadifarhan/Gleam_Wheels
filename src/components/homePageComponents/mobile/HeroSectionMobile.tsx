import { CurrentLocation } from "../../universal/CurrentLocation";

export function HeroSectionMobile() {
    return( 
        <div className="flex mt-2 ps-2">
            <div className="flex-auto textContent mt-4 ms-3">
                <h1 className="font-bold text-[max(13vw)] leading-none"><span className="text-[#3A94FF]">Gleam</span> Wheels</h1>
                <p className="text-[max(3.5vw)] mt-1 max-w-48 leading-snug mb-7 ps-1">Kebersihan kendaraanmu dimulai dari sini</p>
                <CurrentLocation />
            </div>
            <div className="imageContainer">
                <img className="max-w-[max(40vw)]" src="/gleam_wheels/assetsImg/WheelLogo.png" alt="" />
            </div>
        </div>
    )
}