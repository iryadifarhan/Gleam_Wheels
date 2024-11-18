import { MobileBody } from "../components/historyPageComponents/mobile/MobileBody";
import { TopHeader } from "../components/historyPageComponents/mobile/TopHeader";
import { Navbar } from "../components/universal/Navbar";

export function HistoryPage(props: {isMobile: boolean}) {
     return(
        props.isMobile
        ?
        <>
        <TopHeader />
        <MobileBody />
        <Navbar isMobile={props.isMobile} />
        </>
        :
        <>
        <Navbar isMobile={props.isMobile} />
        <p>History page desktop</p>
        </>
     )
}