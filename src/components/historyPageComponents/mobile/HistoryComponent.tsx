import { Link } from "react-router-dom"
import Book from "../../../dataUtils/IBook"
import { Places } from "../../../dataUtils/IPlaces"

export function HistoryComponent(props:{book: Book, place:Places}) {
    const imageSource = 
    props.book.service == "Full Car Wash" 
    ? "CarCleaning.png" 
    : props.book.service == "Interior"
    ? "CarInterior.png" 
    : props.book.service == "Polishing"
    ? "CarPolishing.png"
    : "CarDetailing.png"

    const dateBook = new Date(props.book.dates[0])

    const monthText = 
    dateBook.getMonth() == 0 ? "Jan" : dateBook.getMonth() == 1 ? "Feb" : dateBook.getMonth() == 2 ? "Mar"
    : dateBook.getMonth() == 3 ? "Apr" : dateBook.getMonth() == 4 ? "Mei" : dateBook.getMonth() == 5 ? "Jun"
    : dateBook.getMonth() == 6 ? "Jul" : dateBook.getMonth() == 7 ? "Agu" : dateBook.getMonth() == 8 ? "Sep"
    : dateBook.getMonth() == 9 ? "Okt" : dateBook.getMonth() == 10 ? "Nov" : dateBook.getMonth() == 11 ? "Des" : ""

    return(
        <div className="flex shadow-[0_1px_10px_0_rgba(0,0,0,0.3)] rounded-3xl p-2 pt-3 pb-7 gap-4 items-center justify-between">
            <div className="flex flex-col items-center ps-2 gap-3">
                <p className="text-[max(3.5vw)] font-medium">{`${dateBook.getDate()} ${monthText}, ${dateBook.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}</p>
                <img className={`${props.book.statusFinished == 2 ? "bg-[#232D40] opacity-25" :"bg-gradient-to-t from-[#003E71] to-[#0076D7]"} rounded-3xl w-[max(25vw)] min-h-[48px] py-2 px-5`} src={`/gleam_wheels/assetsImg/${imageSource}`} alt="" />
            </div>
            <div className="flex flex-col justify-center gap-[max(5vw)] mt-2 w-full ps-2 -translate-x-2">
                <p className="font-semibold text-[max(3.4vw)]">{props.place.name}</p>
                <p className="text-[max(2.6vw)]">{props.book.service}</p>
                <div className="flex items-center gap-1">
                    <img src={`/gleam_wheels/assetsImg/${props.book.statusFinished == 1 ? "CheckLogo.png" : props.book.statusFinished == 0 ? "ClockBlue.png" : "FailureLogo.png"}`} alt="" className="size-[max(4.5vw)]"/>
                    <p className="text-[max(2.4vw)] font-semibold">{props.book.statusFinished == 0 ? "Pemesanan sedang diproses" : props.book.statusFinished == 1 ? "Pemesanan selesai" : "Pemesanan dibatalkan"}</p>
                </div>
            </div>
            <div className="flex flex-col justify-between h-[max(26vw)] me-2 relative">
                <p className="font-light text-[max(3vw)] text-end">Rp.28.000</p>
                {
                    props.book.statusFinished == 1
                    ?
                    <Link to={`/place/detail/${props.place.name}`}>
                        <button className="absolute bg-[#0076D7] rounded-full text-white p-2 font-semibold w-[max(20vw)] text-[max(2.7vw)] right-0 bottom-0 translate-x-2 translate-y-1">Pesan Lagi</button>
                    </Link>
                    :
                    <></>
                }
            </div>
        </div>
    )
}