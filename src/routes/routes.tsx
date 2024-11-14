//import react router dom
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { OrderPage } from "../pages/OrderPage";
import { HistoryPage } from "../pages/HistoryPage";
import { ProfilePage } from "../pages/ProfilePage";
import { getServiceDatas } from "../dataUtils/getServiceDatas";
import { getPlacesDatas } from "../dataUtils/getPlacesDatas";
import { useEffect, useState } from "react";
import { Places } from "../dataUtils/IPlaces";
import { Service } from "../dataUtils/IService";

function RoutesIndex(props: {isMobile: boolean}) {
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

    return (
        <Routes>
            {/* route "/" */}
            <Route path="/" element={<HomePage isMobile={props.isMobile} services={services} places={places} />} />  

            {/* route "/order" */}
            <Route path="/order" element={<OrderPage isMobile={props.isMobile} places={places} />} />          
            
            {/* route "/history" */}
            <Route path="/history" element={<HistoryPage isMobile={props.isMobile} />} />          
            
            {/* route "/profile" */}
            <Route path="/profile" element={<ProfilePage isMobile={props.isMobile} />} />          
        </Routes>
    )
}




export default RoutesIndex