import { PromotionInfoHeader } from "../components/orderPageComponents/mobile/PromotionInfoHeader";
import { Navbar } from "../components/universal/Navbar";

export function OrderPage(props: {isMobile: boolean}) {
    return(
        props.isMobile
        ?
        <>
        <PromotionInfoHeader />
        <Navbar isMobile={props.isMobile} />
        </>
        :
        <>
        <Navbar isMobile={props.isMobile} />
        <p>Order page desktop</p>
        </>
    )
}