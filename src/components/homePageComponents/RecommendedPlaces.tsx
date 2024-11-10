import { Places } from "../../dataUtils/IPlaces";
import { PlaceComponents } from "./PlaceComponent";

export function RecommendedPlaces(props: {places: Places[]}) {
    return(
        <div className="places mx-3">
            <h2 className="font-bold text-lg">Untukmu</h2>
            <div className="placesContainer flex flex-col gap-3 mt-1">
                {props.places.map((place) => (<PlaceComponents key={place.name} place={place} />))}
            </div>
        </div>
    )
}