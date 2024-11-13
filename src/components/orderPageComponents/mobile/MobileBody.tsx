import { useEffect, useState } from "react";
import { Places } from "../../../dataUtils/IPlaces";
import { getPlacesDatas } from "../../../dataUtils/getPlacesDatas";
import { SearchBar } from "../../universal/SearchBar";
import { PlaceContents } from "./PlaceContents";
import { FilterComponent } from "./FilterComponent";

export function MobileBody() {
    const[search, setSearch] = useState('')
    const[places, setPlaces] = useState<Places[]>([])

    useEffect(() => {
        const initialPlaces = getPlacesDatas()
        setPlaces(initialPlaces)
    }, [])

    return(
        <div className="orderBody my-8 pb-24">
            <SearchBar search={search} setSearch={setSearch} searchPlaceHolder={"Cari tempat cuci kendaraan"} />
            <FilterComponent />
            <PlaceContents places={places} search={search} />
        </div>
    )
}