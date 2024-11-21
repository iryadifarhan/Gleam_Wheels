import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/universal/Navbar";
import { MobileBody } from "../components/profilePageComponents/mobile/MobileBody";
import { ProfileHeader } from "../components/profilePageComponents/mobile/ProfileHeader";
import { User } from "../dataUtils/IUser";
import { LoadingSpinner } from "../assets/LoadingSpinner";


export function ProfilePage(props: {isMobile: boolean, isLogged:boolean, user:User, isLoading:boolean, setLog:any, setUser:any, isUserNameChanged:boolean, setUserNameChanged: any}) {
    const navigate = useNavigate()

    if (props.isLoading || props.isUserNameChanged) {
        return (
            <div className="fixed inset-0 flex items-center justify-center">
                <LoadingSpinner />
            </div>
        );
    }

    if (!props.isLogged) {
        // Navigate to the home page, then to the login page
        navigate(-1);
        setTimeout(() => navigate("/login", { replace: true }), 0); // Delayed navigation to ensure it hits "/"
        return null; // Prevent rendering during navigation
    }

    return(
        props.isMobile
        ?
        <>
        <ProfileHeader />
        <MobileBody user={props.user} setLog={props.setLog} setUser={props.setUser} setUserNameChanged={props.setUserNameChanged}/>  
        </>
        :
        <>
        <Navbar isMobile={props.isMobile} />
        <p>Profile page desktop</p>
        </>
    )
}