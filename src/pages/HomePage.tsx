import { HeroSectionMobile } from "../components/homePageComponents/mobile/HeroSectionMobile";
import { MobileBody } from "../components/homePageComponents/mobile/MobileBody";
import { TopHeader } from "../components/homePageComponents/mobile/TopHeader";
import { Navbar } from "../components/universal/Navbar";
import { Places } from "../dataUtils/IPlaces";
import { Service } from "../dataUtils/IService";

export function HomePage(props: {isMobile: boolean, services: Service[], places: Places[]}) {
    return(
        props.isMobile
        ?   //mobile
        <>
        <TopHeader />
        <HeroSectionMobile />
        <MobileBody services={props.services} places={props.places} />
        <Navbar isMobile={props.isMobile} />
        </>
        :   //desktop
        <>
        <Navbar isMobile={props.isMobile} />
        <p>home page desktop</p>
        </>
    )
}