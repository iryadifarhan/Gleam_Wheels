import { Navbar } from "../components/universal/Navbar";

export function OrderPage(props: {isMobile: boolean}) {
    return(
        props.isMobile
        ?
        <>
        <p>Order page mobile</p>
        <Navbar isMobile={props.isMobile} />
        </>
        :
        <>
        <p>Order page desktop</p>
        </>
    )
}