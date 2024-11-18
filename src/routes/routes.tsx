//import react router dom
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { OrderPage } from "../pages/OrderPage";
import { HistoryPage } from "../pages/HistoryPage";
import { ProfilePage } from "../pages/ProfilePage";
import { getServiceDatas } from "../dataUtils/getServiceDatas";
import { useEffect, useState } from "react";
import { Places } from "../dataUtils/IPlaces";
import { Service } from "../dataUtils/IService";
import { User } from "../dataUtils/IUser";
import Api from "../api";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

function RoutesIndex(props: {isMobile: boolean}) {
    const[services, setServices] = useState<Service[]>([])
    const[places, setPlaces] = useState<Places[]>([])
    const [user, setUser] = useState<User>({} as User);
    const[isLogged, setLog] = useState(false)
    
    useEffect(() => {
        // Define an async function inside useEffect
        const checkToken = async () => {
            // Check if there is a token in localStorage
            const token = localStorage.getItem('authToken');
            if (token) {
                // If token exists, set the user as logged in
                setLog(true);
    
                try {
                    const response = await Api.post('/api/users/autologin', {}, {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    setUser(response.data.data);
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            }
        };
    
        // Call the async function
        checkToken();
    }, []);

    const fetchDataPlaces = async () => {

        //fetch data from API with Axios
        await Api.get('/api/places')
            .then(response => {
                
                //assign response data to state "posts"
                console.log(response.data.data)
                setPlaces(response.data.data);
            })
        
    }

    useEffect(() => {
        // Simulate fetching data or some other initialization logic
        const initialServices = getServiceDatas()

        // Set the services state with initial data
        setServices(initialServices)
        fetchDataPlaces()
    }, []); 

    return (
        <Routes>
            {/* route "/" */}
            <Route path="/" element={<HomePage isMobile={props.isMobile} services={services} places={places} 
            isLogged={isLogged} user={user} setLog={setLog} setUser={setUser} />} />  

            {/* route "/order" */}
            <Route path="/order" element={<OrderPage isMobile={props.isMobile} places={places} />} />          
            
            {/* route "/history" */}
            <Route path="/history" element={<HistoryPage isMobile={props.isMobile} />} />          
            
            {/* route "/profile" */}
            <Route path="/profile" element={<ProfilePage isMobile={props.isMobile} />} />          

            {/* route "/login" */}
            <Route path="/login" element={<LoginPage setLog={setLog} setUser={setUser} />} />          

            {/* route "/register" */}
            <Route path="/register" element={<RegisterPage setLog={setLog} setUser={setUser} />} />          
        </Routes>
    )
}




export default RoutesIndex