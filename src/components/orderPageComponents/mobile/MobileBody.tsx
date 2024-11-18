import { useEffect, useState } from "react";
import { Places } from "../../../dataUtils/IPlaces";
import { SearchBar } from "../../universal/SearchBar";
import { PlaceContents } from "./PlaceContents";
import { FilterComponent } from "./FilterComponent";
import { useSearchParams } from "react-router-dom";


export function MobileBody(props: {places: Places[]}) {
    const[search, setSearch] = useState('')
    const[filterFeature, setFilterFeature] = useState([''])
    const[filterRating, setFitlerRating] = useState(false)
    const[filterRange, setFilterRange] = useState(false)
    const[filterAvailable, setFilterAvailable] = useState(false)

    const[buttonActives, setButtonActives] = useState([-1])

    const toggleButtonActive = (index: number) => {
        setButtonActives((prevFeatures) => {
            if (prevFeatures.includes(index)) {
                // Remove feature
                return prevFeatures.filter((f) => f !== index)
            } else {
                // Add feature
                return [...prevFeatures, index]
            }
        })
    }

    const toggleFilterFeature = (feature: string, index: number) => {
        if(index > 0) {
            toggleButtonActive(index)
        }

        setFilterFeature((prevFeatures) => {
            if (prevFeatures.includes(feature)) {
                // Remove feature
                return prevFeatures.filter((f) => f !== feature)
            } else {
                // Add feature
                return [...prevFeatures, feature]
            }
        })
    }

    const toggleFilterRating = (index: number) => {
        toggleButtonActive(index)
        setFitlerRating(() => {
            if(filterRating == true) {
                return false
            } else {
                return true
            }
        })
    }

    const toggleFilterRange = (index: number) => {
        toggleButtonActive(index)
        setFilterRange(() => {
            if(filterRange == true) {
                return false
            } else {
                return true
            }
        })
    }

    const toggleFilterAvailable = (index:number) => {
        toggleButtonActive(index)
        setFilterAvailable(() => {
            return !filterAvailable
        })
    }
    
    const [searchParams] = useSearchParams()
    const feature = searchParams.get("feature");
    const indexFeature = searchParams.get("index")

    // Only invoke toggleFilterFeature when "feature" changes
    useEffect(() => {
        if (feature) {
            toggleFilterFeature(feature, Number(indexFeature));
        }
    }, [feature]);

    return(
        <div className="orderBody my-8 pb-20">
            <SearchBar search={search} setSearch={setSearch} searchPlaceHolder={"Cari tempat cuci kendaraan"} />
            <FilterComponent setFilterFeature={toggleFilterFeature} setFilterRating={toggleFilterRating} buttonActives={buttonActives} setFilterRange={toggleFilterRange} setFilterAvailable={toggleFilterAvailable}/>
            <PlaceContents places={props.places} search={search} filterFeatures={filterFeature} filterRating={filterRating} filterRange={filterRange} filterAvailable={filterAvailable}/>
        </div>
    )
}