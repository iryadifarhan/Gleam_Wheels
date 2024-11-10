import { HeroSectionMobile } from "../components/homePageComponents/HeroSectionMobile";
import { MobileBody } from "../components/homePageComponents/MobileBody";
import { TopHeader } from "../components/homePageComponents/TopHeader";
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
        <p>home page desktop</p>
    )
}