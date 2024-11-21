import { useNavigate, useParams } from "react-router-dom"
import { Places } from "../dataUtils/IPlaces"
import { LoadingSpinner } from "../assets/LoadingSpinner"
import CalenderLogo from "../assets/CalenderLogo"
import RangeLogo from "../assets/RangeLogo"
import { useEffect, useState } from "react"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ArrowLogo } from "../assets/ArrowLogo"
import Api from "../api"
import SlotComponent from "../components/placeDetailComponents/SlotComponent"
import Book from "../dataUtils/IBook"
import { User } from "../dataUtils/IUser"

export function PlaceDetailPage(props:{places: Places[], isLoading:boolean, user:User}) {
    const { placeName } = useParams<{placeName: string}>()
    const place = props.places.find((place) => place.name == placeName)
    const [date, setDate] = useState(new Date())
    const [pendingBookList, setPendingBookList] = useState(true)
    const [dateBookList, setDateBookList] = useState<Book[]>([])
    const [postRefresh, setPostRefresh] = useState(false)
    const navigate = useNavigate();
    const currentDate = new Date()

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
        const fetchBookList = async () => {
            try {
                const response = await Api.get(`/api/getbooklist/place/${place?.name}`)
                setDateBookList(response.data.data)
            } catch (error) {
                console.error(error)
            } finally {
                setPendingBookList(false)
            }
        }

        if(!props.isLoading) {
            fetchBookList()
        }
    }, [place?.name, props.isLoading, postRefresh]);

    const changeDate = (date: any) => {
        setDate(date)
    }

    const renderBook = () => {
        const shownBook = dateBookList.filter((it) => {
            return it.dates.some((dateNow) => new Date(dateNow).getDate() == date.getDate())
        })
        
        const slotAvailable = Array.from({length : place!.capacity})
        
        return(
            <div className="flex flex-col w-full gap-4">
                {
                    slotAvailable.map((_it,index) => {
                        const book = shownBook[index]
                        return(
                            <SlotComponent key={index} pos={index} bookAmount={shownBook.length} place={place!} book={book} date={date} user={props.user} setPending={setPostRefresh}/>
                        )
                    })
                
                }
            </div>
        )
    }

    return(
        <div className="relative"> {/* Set a specific height */}
            {
                props.isLoading || pendingBookList || postRefresh
                ?
                <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
                    <LoadingSpinner />
                </div>
                :
                <>
                <div className="relative ">
                    <div onClick={() => navigate(-1)}
                    className="absolute top-5 left-3 px-3 py-2 bg-[#3A94FF] rounded-full font-extrabold text-xl z-50">
                        <ArrowLogo />
                    </div>
                    <div className="absolute top-24 z-50 w-11/12 mx-4 pb-20">
                        <div className="flex flex-col shadow-xl bg-white rounded-2xl  py-4 px-5  justify-between gap-6" >
                            <div className="flex justify-between "> {/* Added relative to make sure it's not overlapped by the image */}
                                <div className="flex flex-col max-w-[50vw]">
                                    <h1 className="font-bold text-[max(5vw)]">{place?.name}</h1>
                                    <div className="features text-[max(3vw)]">
                                        {place?.features.map((it, index) => {
                                            return(
                                                <span key={index} className="key">
                                                    {it}
                                                    {index == place.features.length - 1 ? "" : ", "}
                                                </span>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="rating flex flex-col rounded-xl shadow-xl max-h-[11vw] w-[max(25vw)] text-center">
                                    <div className="bg-gradient-to-tl from-[#235999] to-[#3A94FF] rounded-t-xl">
                                        <p className="star text-white font-semibold text-[max(3.6vw)]">{Math.round(place!.rating * 10) / 10} 
                                        <span className="scale-110"> ★</span></p>
                                    </div>
                                    <p className="text-[max(3vw)] pt-0.5 font-light">2rb+ ratings</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <CalenderLogo /> 
                                    <div className="flex flex-col justify-end">
                                        <p className="font-semibold leading-none text-[max(4vw)] pt-1">{`${place?.queue! < 5 ? "Tersedia" : "Ramai"}`}</p>
                                        <p className="text-[max(3vw)] text-slate-500">{`Tersedia ${place?.queue}/${place?.capacity}`}</p>
                                    </div>
                                </div>
                                <div className="flex range items-center pt-2">
                                    <RangeLogo w={30} h={24} size={"size-[max(10vw)]"} />
                                    <p className="font-medium text-[max(3.6vw)]">{`15-20min (${Math.round(place!.range * 10) / 10}km)`}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col items-center mt-10 gap-8">
                            <div className="calenderContainer">
                                <h1 className="font-bold text-[max(5vw)] text-center mb-2">Pilih Tanggal</h1>
                                <div className="calender text-center flex justify-center w-[max(91vw)]">
                                    <Calendar className="shadow-lg border-none rounded-3xl" onChange={(e) => changeDate(e)}  value={date}/>
                                </div>
                            </div>
                            <div className="bookList flex flex-col w-full">
                                <h1 className="font-bold text-[max(5vw)] text-center mb-2">{date.getDate() == currentDate.getDate() ? "Antrean Pesanan/Layanan" : "Antrean Booking"}</h1>
                                {renderBook()}
                            </div>
                        </div>
                    </div>
                    <img className="absolute top-0 left-0 z-0 max-h-[164px] w-full object-cover rounded-b-[40px] object-top" src={place?.img_source} alt="" />
                    
                </div>
                </>
            }
        </div>
    )
}
