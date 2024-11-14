import { useState } from "react"
import { SearchBar } from "../../universal/SearchBar"
import { PromotionSection } from "./PromotionSection"
import { ServiceReachable } from "./ServiceReachable"
import { RecommendedPlaces } from "./RecommendedPlaces"
import { Places } from "../../../dataUtils/IPlaces"
import { Service } from "../../../dataUtils/IService"


export function MobileBody(props: {services: Service[], places: Places[]}) {
    const[search, setSearch] = useState('')
    
    return(
        <div className="menuBody flex flex-col mt-2 gap-y-4 pb-24">
            <SearchBar search={search} setSearch={setSearch} searchPlaceHolder={"Cari layanan kebersihan"} />
            <PromotionSection />
            <ServiceReachable services={props.services} search={search} />
            <RecommendedPlaces places={props.places}/>
        </div>
    )
}
