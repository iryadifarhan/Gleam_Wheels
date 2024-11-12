import { HeroSectionMobile } from "../components/homePageComponents/mobile/HeroSectionMobile";
import { MobileBody } from "../components/homePageComponents/mobile/MobileBody";
import { TopHeader } from "../components/homePageComponents/mobile/TopHeader";
import { Navbar } from "../components/universal/Navbar";

export function HomePage(props: {isMobile: boolean}) {
    return(
        props.isMobile
        ?   //mobile
        <>
        <TopHeader />
        <HeroSectionMobile />
        <MobileBody />
        <Navbar isMobile={props.isMobile} />
        </>
        :   //desktop
        <>
        <Navbar isMobile={props.isMobile} />
        <p>home page desktop</p>
        </>
    )
}