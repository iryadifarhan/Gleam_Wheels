import { MobileBody } from "../components/orderPageComponents/mobile/MobileBody";
import { PromotionInfoHeader } from "../components/orderPageComponents/mobile/PromotionInfoHeader";
import { Navbar } from "../components/universal/Navbar";
import { Places } from "../dataUtils/IPlaces";

export function OrderPage(props: {isMobile: boolean, places: Places[]}) {
    return(
        props.isMobile
        ?
        <>
        <PromotionInfoHeader />
        <MobileBody places={props.places} />
        <Navbar isMobile={props.isMobile} />
        </>
        :
        <>
        <Navbar isMobile={props.isMobile} />
        <p>Order page desktop</p>
        </>
    )
}