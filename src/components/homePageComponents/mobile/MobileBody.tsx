import { useEffect, useState } from "react"
import { SearchBar } from "../../universal/SearchBar"
import { PromotionSection } from "./PromotionSection"
import { ServiceReachable } from "./ServiceReachable"
import { RecommendedPlaces } from "./RecommendedPlaces"
import { getPlacesDatas } from "../../../dataUtils/getPlacesDatas"
import { Places } from "../../../dataUtils/IPlaces"
import { Service } from "../../../dataUtils/IService"
import { getServiceDatas } from "../../../dataUtils/getServiceDatas"


export function MobileBody() {
    const[search, setSearch] = useState('')
    const[services, setServices] = useState<Service[]>([])
    const[places, setPlaces] = useState<Places[]>([])

    useEffect(() => {
        // Simulate fetching data or some other initialization logic
        const initialServices = getServiceDatas()
        const initialPlaces = getPlacesDatas()

        // Set the services state with initial data
        setServices(initialServices);
        setPlaces(initialPlaces)
    }, []); 

    return(
        <div className="menuBody flex flex-col mt-2 gap-y-4 pb-24">
            <SearchBar search={search} setSearch={setSearch} />
            <PromotionSection />
            <ServiceReachable services={services} search={search} />
            <RecommendedPlaces places={places}/>
        </div>
    )
}
