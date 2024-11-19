import { Places } from "../../../dataUtils/IPlaces";
import { PlaceComponents } from "./PlaceComponent";

export function RecommendedPlaces(props: {places: Places[], isLoading:boolean}) {
    return(
        <div className="places mx-5">
            <h2 className="font-bold text-[max(4.75vw)]">Untukmu</h2>
            <div className="placesContainer flex flex-col gap-3 mt-1">
                {
                    !props.isLoading
                    ?
                    props.places.map((place) => (<PlaceComponents key={place.name} place={place} />))
                    :
                    <div className="flex rounded-xl justify-between border p-1 shadow-2xl">
                        <div className="textContainer py-1 px-2 w-6/12 flex flex-col gap-2 rounded-xl">
                            <div className="h-full w-full flex  bg-gray-300 animate-pulse rounded-xl"></div>
                            <div className="h-2/4 w-full  bg-gray-300 animate-pulse rounded-xl"></div>
                            <div className="h-2/4 w-full  bg-gray-300 animate-pulse rounded-xl"></div>
                        </div>
                        <div className="object-cover w-[max(45vw)] min-h-32 rounded-xl bg-gray-300 animate-pulse "></div>
                    </div>
                }
            </div>
        </div>
    )
}