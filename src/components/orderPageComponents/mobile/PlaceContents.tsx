import { Places } from "../../../dataUtils/IPlaces";
import { Pricing } from "../../universal/PricingDollar";

export function PlaceContents(props: {places: Places[], search: string}) {
    return( 
        <>
            <div className="flex flex-col gap-3 mx-5 py-2">
                {props.places.filter((place) => 
                    props.search == '' ? true : place.name.toLowerCase().includes(props.search.toLowerCase())
                ).map((place) => (
                    <div key={place.name} className="flex flex-col bg-[#3A94FF] w-full min-h-32 h-full rounded-xl text-white text-balance">
                        <img className="size-5 w-full object-cover object-top rounded-xl h-40 shrink-0" src={place.imgSource} alt="" />
                        <div className="flex relative px-7 py-2 items-center justify-between gap-5">
                            <div className="textContainer">
                                <h1 className="font-semibold text-xl">{place.name}</h1>
                                <div className="flex gap-1 flex-wrap">
                                    {place.features.map((it, index) => {
                                        return !it.includes("Promo") ?
                                        (<p key={index} className="text-[10px]">{it}{index != place.features.length - 1 ? "," : ""}</p>)
                                        :
                                        (<></>)
                                        })}
                                </div>
                            </div>
                            {<Pricing level={place.pricing} amountStars={4} />}
                            <p className="font-semibold">
                                {`${place.queue < place.capacity ? `${place.queue}/${place.capacity}` : ""}${place.queue >= place.capacity ? "FULL" : ""}`}
                            </p>
                            <div className="absolute bg-white flex rounded-xl px-2 py-1 items-center gap-3 justify-between -top-6">
                                    <p className="transform scale-150 leading-none pb-0.5 text-[#3A94FF]">★</p>
                                    <p className="text-black font-semibold">{place.rating}</p>
                            </div>
                        </div>
                    </div>
                ))}        
            </div>
        </>
    )
}