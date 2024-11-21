import { useState } from "react";
import { QuestionMarkLogo } from "../../../assets/QuestionMarkLogo";

export function TopHeader() {
    const[modalOpen, setModalOpen] = useState(false)

    const toggleModal = () => setModalOpen(!modalOpen)

    return(
        <div className="flex shadow-md py-3 px-8 pt-4 items-center">
            <h1 className="flex-auto font-bold text-[max(7vw)] text-[#232D40]">Aktivitas</h1>
            <div className={`logoContainer relative ${modalOpen ? "brightness-[0.85]" : ""} z-[100]`} onClick={() => toggleModal()}>
                <QuestionMarkLogo />
            </div>
            <div className={`absolute ${modalOpen ? "opacity-100" : "opacity-0 invisible"} transition-opacity duration-300 right-0 mt-2 w-[max(55vw)] z-[100] top-[55px] right-5`}>
                <p className="text-center font-medium bg-[#8DD9FA] rounded-lg p-2 shadow-[0_1px_7px_0_rgba(0,0,0,0.7)]">Ketuk filter pada aktivitas untuk menyortir pesanan Anda</p>
            </div>
        </div>
    )
}