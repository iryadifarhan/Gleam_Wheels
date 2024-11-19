import { Navigate } from "react-router-dom";
import { Navbar } from "../components/universal/Navbar";
import { MobileBody } from "../components/profilePageComponents/mobile/MobileBody";
import { ProfileHeader } from "../components/profilePageComponents/mobile/ProfileHeader";
import { User } from "../dataUtils/IUser";
import { LoadingSpinner } from "../assets/LoadingSpinner";


export function ProfilePage(props: {isMobile: boolean, isLogged:boolean, user:User, isLoading:boolean, setLog:any, setUser:any}) {
    return(
        props.isMobile
        ?
        <>
        {
            props.isLoading
            ?
            <div className="fixed inset-0 flex items-center justify-center">
                <LoadingSpinner />
            </div>
            :
            props.isLogged
            ?
            <>
                <ProfileHeader />
                <MobileBody user={props.user} setLog={props.setLog} setUser={props.setUser}/>
            </>
            :
            <Navigate to="/login" />
        }
        </>
        :
        <>
        <Navbar isMobile={props.isMobile} />
        <p>Profile page desktop</p>
        </>
    )
}