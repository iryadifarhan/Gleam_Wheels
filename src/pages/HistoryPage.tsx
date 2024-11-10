import { Navbar } from "../components/universal/Navbar";

export function HistoryPage(props: {isMobile: boolean}) {
     return(
        props.isMobile
        ?
        <>
        <p>History page mobile</p>
        <Navbar isMobile={props.isMobile} />
        </>
        :
        <>
        <p>History page desktop</p>
        </>
     )
}