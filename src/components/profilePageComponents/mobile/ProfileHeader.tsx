import { Link } from "react-router-dom";
import { ArrowLogo } from "../../../assets/ArrowLogo";

export function ProfileHeader() {
    return(
        <div className="profileHeader">
            <div className="flex items-center gap-4 my-6 ms-4">
                <Link to={"/"}>
                    <div className=" px-3 py-2 bg-[#3A94FF] rounded-full font-extrabold text-xl">
                        <ArrowLogo />
                    </div>
                </Link>
                <h1 className="font-bold text-[max(7vw)] text-[#232D40]">Profil Akun</h1>
                
            </div>
        </div>
    )
}