import { useState } from "react";
import { Places } from "../../../dataUtils/IPlaces";
import { SearchBar } from "../../universal/SearchBar";
import { PlaceContents } from "./PlaceContents";
import { FilterComponent } from "./FilterComponent";

export function MobileBody(props: {places: Places[]}) {
    const[search, setSearch] = useState('')

    return(
        <div className="orderBody my-8 pb-24">
            <SearchBar search={search} setSearch={setSearch} searchPlaceHolder={"Cari tempat cuci kendaraan"} />
            <FilterComponent />
            <PlaceContents places={props.places} search={search} />
        </div>
    )
}