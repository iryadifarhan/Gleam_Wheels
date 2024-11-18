import { QuestionMarkLogo } from "../../../assets/QuestionMarkLogo";

export function TopHeader() {
    return(
        <div className="flex shadow-md py-3 px-8 pt-4 items-center">
            <h1 className="flex-auto font-bold text-[max(7vw)] text-[#232D40]">Aktivitas</h1>
            <QuestionMarkLogo />
        </div>
    )
}