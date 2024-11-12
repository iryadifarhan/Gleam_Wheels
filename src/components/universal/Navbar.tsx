import { Link, useLocation } from "react-router-dom"
import HomeLogo from "../../assets/NavMobileSvg/HomeLogo"
import OrderLogo from "../../assets/NavMobileSvg/OrderLogo"
import HistoryLogo from "../../assets/NavMobileSvg/HistoryLogo"
import ProfileLogo from "../../assets/NavMobileSvg/ProfileLogo"

export function Navbar(props: {isMobile: boolean}) {
    const path = useLocation()

    return(
        props.isMobile 
        ?
        <div className="navbar fixed bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white drop-shadow-lg w-[calc(100%-2rem)] h-16 px-9 flex items-center gap-8 justify-center">
            <Link className="flex flex-col gap-1 items-center" to={"/"}>
                {"/" === path.pathname 
                ? (
                    <>
                        <div className="w-[calc(70%)] max-w-full bg-blue-500 h-1 rounded-full"></div>
                        <HomeLogo color={"text-blue-500"} stroke={"none"} />
                    </>
                ) 
                : (
                    <>
                        <div className="w-[calc(70%)] bg-transparent max-w-full h-1 rounded-full"></div>
                        <HomeLogo color={"text-white"} stroke={"black"} />
                    </>
                )}
                <h1 className="font-bold">Home</h1>
            </Link>
            <Link className="flex flex-col gap-1 items-center" to={"/order"}>
                {"/order" === path.pathname 
                ? (
                    <>
                        <div className="w-[calc(70%)] max-w-full bg-blue-500 h-1 rounded-full"></div>
                        <OrderLogo color={"text-blue-500"} stroke={"currentColor"} />
                    </>
                ) 
                : (
                    <>
                        <div className="w-[calc(70%)] bg-transparent max-w-full h-1 rounded-full"></div>
                        <OrderLogo color={"text-white"} stroke={"black"} />
                    </>
                )}
                <h1 className="font-bold">Pesan</h1>
            </Link>
            <Link className="flex flex-col gap-1 items-center" to={"/history"}>
                {"/history" === path.pathname 
                ? (
                    <>
                        <div className="w-[calc(55%)] max-w-full bg-blue-500 h-1 rounded-full"></div>
                        <HistoryLogo color={"text-blue-500"} stroke={"currentColor"} />
                    </>
                ) 
                : (
                    <>
                        <div className="w-[calc(70%)] bg-transparent max-w-full h-1 rounded-full"></div>
                        <HistoryLogo color={"text-white"} stroke={"black"} />
                    </>
                )}
                <h1 className="font-bold">Riwayat</h1>
            </Link>
            <Link className="flex flex-col gap-1 items-center" to={"/profile"}>
                {"/profile" === path.pathname 
                ? (
                    <>
                        <div className="w-[calc(70%)] max-w-full bg-blue-500 h-1 rounded-full"></div>
                        <ProfileLogo color={"text-blue-500"} stroke={"none"} />
                    </>
                ) 
                : (
                    <>
                        <div className="w-[calc(70%)] bg-transparent max-w-full h-1 rounded-full"></div>
                        <ProfileLogo color={"text-white"} stroke={"black"} />
                    </>
                )
                }
                <h1 className="font-bold">Profil</h1>
            </Link>
        </div>
        :
        <p>Navbar Dekstop</p>
    )
}