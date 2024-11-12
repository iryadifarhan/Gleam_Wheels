//import react router dom
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { OrderPage } from "../pages/OrderPage";
import { HistoryPage } from "../pages/HistoryPage";
import { ProfilePage } from "../pages/ProfilePage";

function RoutesIndex(props: {isMobile: boolean}) {
    return (
        <Routes>
            {/* route "/" */}
            <Route path="/" element={<HomePage isMobile={props.isMobile} />} />  

            {/* route "/order" */}
            <Route path="/order" element={<OrderPage isMobile={props.isMobile} />} />          
            
            {/* route "/history" */}
            <Route path="/history" element={<HistoryPage isMobile={props.isMobile} />} />          
            
            {/* route "/profile" */}
            <Route path="/profile" element={<ProfilePage isMobile={props.isMobile} />} />          
        </Routes>
    )
}




export default RoutesIndex