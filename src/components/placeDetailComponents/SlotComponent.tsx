import { useEffect, useState } from "react";
import Book from "../../dataUtils/IBook"
import { Places } from "../../dataUtils/IPlaces";
import basePrice from "../../dataUtils/getBasePrice";
import InfoFeeLogo from "../../assets/InfoFeeLogo";
import { User } from "../../dataUtils/IUser";
import Api from "../../api";
import ProfileLogo from "../../assets/NavMobileSvg/ProfileLogo";
import OrderLogo from "../../assets/NavMobileSvg/OrderLogo";

function SlotComponent(props: {book: Book, date: Date, pos:number, bookAmount:number, place:Places, user:User, setPending:any}) {
    const [selectedOption, setSelectedOption] = useState("");
    const [isOpen, setIsOpen] = useState(false)
    const [fee, setFee] = useState(1000)
    const quantifier = props.place.pricing == 2 ? 1.5 : props.place.pricing == 3 ? 1.75 : props.place.pricing == 4 ? 2 : 1

    function generateDates() {
        const steps = selectedOption == "Paint Protection Film" ? 2 : selectedOption == "Coating" ? 1 : 0
        const baseDate = new Date(props.date)
        const dates = []
    
        for (let i = 0; i <= steps; i++) {
            const newDate = new Date(baseDate); // Create a new Date object to avoid mutating the base date
            newDate.setDate(baseDate.getDate() + i) // Increment the date by `i` days
            dates.push(newDate.toISOString()) // Convert the Date object to ISO string
        }
    
        return dates;
    }

    function createObject(finalPrice: number) {
        return {
            place_id : props.place.id,
            user_id: props.user.id,
            service : selectedOption,
            dates: generateDates(),
            price: finalPrice
        }
    }

    const postBook = async (finalPrice: number) => {
        try {
            props.setPending(true)
            const response = await Api.post('/api/booking', createObject(finalPrice))
            console.log(response)
        } catch (error) {
            console.error(error)
        } finally {
            props.setPending(false)
        }
    }

    useEffect(() => {
        setSelectedOption("")
    },[props.date])

    useEffect(() => {
        if(basePrice.get(selectedOption)! > 1000000) {
            setFee(2000)
        } else {
            setFee(1000)
        }
    },[selectedOption])

    const handleChange = (event: any) => {
        setSelectedOption(event.target.value)
    }

    function formatCurrency(value: number) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0, // Removes decimals
        }).format(value);
    }

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)
    
    function SlidingModal() {
        return (
            <>
                {/* Modal Overlay */}
                {isOpen && (
                    <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-end justify-center"
                    onClick={closeModal}
                    >
                    {/* Modal Content */}
                    <div
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                        className="bg-white rounded-t-3xl p-6 w-full max-w-md shadow-lg transform transition-transform duration-300 translate-y-0"
                    >
                        <div className="flex justify-between items-center">
                            <h2 className="font-bold text-[max(5vw)]">Ringkasan pemesanan</h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="border border-black rounded-3xl px-2 py-4 flex flex-col mt-2">
                            <div className="flex justify-between text-[max(4vw)]">
                                <p>{selectedOption}</p>
                                <p>{formatCurrency((basePrice.get(selectedOption)! * quantifier))}</p>
                            </div>
                            <div className="flex justify-between text-[max(4vw)]">
                                <div className="flex items-center gap-2"><p>Biaya pemesanan</p><div className="info pt-0.5">{<InfoFeeLogo />}</div></div>
                                <p>{formatCurrency(fee)}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-6">
                            <h2 className="text-[max(4vw)] font-semibold text-slate-800">Total <span>{`(termasuk pajak)`}</span></h2>
                            <h1 className="text-[max(5vw)] font-bold">{formatCurrency((basePrice.get(selectedOption)! * quantifier) + fee + (basePrice.get(selectedOption)! * 1 / 100))}</h1>
                        </div>

                        <button onClick={() => postBook((basePrice.get(selectedOption)! * quantifier)  + fee + (basePrice.get(selectedOption)! * 1 / 100))} className="text-[max(4.5vw)] font-bold rounded-full w-full mt-2 bg-[#0076D7] text-white py-3">Langsung Pesan</button>
                    </div>
                    </div>
                )}
            </>
        );
    }


    return(
        <div className={`flex border shadow-md p-3 rounded-xl ${props.book ? "bg-gradient-to-tl from-[#235999] to-[#3A94FF] gap-2" : "bg-gray-300"} items-center justify-between min-h-[64px]`}>
            {
                props.book
                ?
                <>
                {/* <p>{new Date(props.book.dates.filter((dateNow) => new Date(dateNow).getDate() == props.date.getDate()).toString()).toDateString() }</p>   */}
                <p className="text-white font-semibold text-[max(5vw)]">{`${props.date == new Date() ? "Antrean Pesanan" : "Antrean Booking"}`} {props.book.queueNumber}</p>
                <div className="flex flex-col gap-2 text-[max(4vw)]">
                    <div className="flex items-center text-white gap-1">
                        <ProfileLogo color={"white"} stroke={"white"} />
                        <p className="pt-1">{props.book.username}</p>
                    </div>
                    <div className="flex text-white gap-1">
                        <OrderLogo color={"white"} stroke={"white"} />
                        <p>{props.book.service}</p>
                    </div>
                </div>
                </>
                :
                <>
                <p className="text-[max(3.5vw)]">{`${props.pos + 1}`}
                    <span className="italic ps-2 opacity-60">Slot kosong</span>
                </p>
                <div className="orderActionContainer flex gap-2">
                {SlidingModal()}
                {
                    props.pos == props.bookAmount
                    ?
                    <select id="branded-select" name="branded-select" value={selectedOption} onChange={handleChange} 
                    className="text-[max(3.5vw)] h-[39px] rounded-md border-gray-300 shadow-sm focus:outline-none sm:text-sm"
                    >
                        <option value="" disabled>
                            Pilih layanan
                        </option>
                        {
                            props.place.features.filter((it) => it != "Promo").map((it) => (
                                <option value={it}>{it}</option>
                            ))
                        }
                    </select>
                    :
                    <></>
                }
                {selectedOption != '' ? 
                <>
                    <button onClick={openModal} className="rounded-2xl bg-[#0076D7] text-white py-2 px-4 text-[max(3.5vw)]">Pesan</button>
                </>
                : <></>
                }
                </div>
                </>
            }
        </div>
    )
}

export default SlotComponent