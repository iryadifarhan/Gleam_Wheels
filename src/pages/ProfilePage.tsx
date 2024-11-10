import { Navbar } from "../components/universal/Navbar";

export function ProfilePage(props: {isMobile: boolean}) {
    return(
        props.isMobile
        ?
        <>
        <p>Profile page mobile</p>
        <Navbar isMobile={props.isMobile} />
        </>
        :
        <>
        <p>Profile page desktop</p>
        </>
    )
}