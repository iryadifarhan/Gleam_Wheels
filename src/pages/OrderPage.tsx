import { MobileBody } from "../components/orderPageComponents/mobile/MobileBody";
import { PromotionInfoHeader } from "../components/orderPageComponents/mobile/PromotionInfoHeader";
import { Navbar } from "../components/universal/Navbar";

export function OrderPage(props: {isMobile: boolean}) {
    return(
        props.isMobile
        ?
        <>
        <PromotionInfoHeader />
        <MobileBody />
        <Navbar isMobile={props.isMobile} />
        </>
        :
        <>
        <Navbar isMobile={props.isMobile} />
        <p>Order page desktop</p>
        </>
    )
}