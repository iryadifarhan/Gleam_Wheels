import { useState } from "react";
import { HistoryComponent } from "./HistoryComponent";
import Book from "../../../dataUtils/IBook";
import { Places } from "../../../dataUtils/IPlaces";
import MockBookDatas from "../../../dataUtils/getMockBookDatas";

export function MobileBody(props:{bookLists:Book[], places:Places[]}) {
    const [isRiwayat, setRiwayat] = useState(true);

    const HandleClick = (text: string) => {
        setRiwayat(text.includes("Riwayat"));
    };

    return (
        <>
            <div className="mx-5 pt-5 pb-28">
                <div className="relative flex font-bold text-[max(4.2vw)]">
                    {/* Underline container */}
                    <div className="absolute bottom-0 left-0 h-[1.5px] bg-black transition-transform duration-300"
                        style={{
                            width: "30%",
                            transform: isRiwayat
                                ? "translateX(0%)"
                                : "translateX(133%)",
                        }}
                    ></div>

                    {/* Tab Buttons */}
                    <div onClick={() => HandleClick("Riwayat")} className="flex flex-col items-center gap-1.5 w-[30%] mb-1">
                        <h2>Riwayat</h2>
                    </div>
                    <div onClick={() => HandleClick("Dalam Proses")} className="flex flex-col items-center gap-1.5 w-[50%] mb-1">
                        <h2>Dalam Proses</h2>
                    </div>
                </div>
                
                <div className="mt-5 flex flex-col gap-8">
                    {
                        isRiwayat
                        ?
                        MockBookDatas().map((book, index) => {
                            return(
                                <HistoryComponent key={index} book={book} place={props.places.filter((it) => it.id == book.place_id)[0]} />
                            )
                        })
                        :
                        props.bookLists.map((book, index) => {
                            return(
                                <HistoryComponent key={index} book={book} place={props.places.filter((it) => it.id == book.place_id)[0]} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}
