import { Link } from "react-router-dom";
import { Service } from "../../../dataUtils/IService";
import { Pricing } from "../../universal/PricingDollar";

export function ServiceComponent(props: {service: Service, isFirst: boolean, isLast: boolean}) {
    const featureArg = props.service.title.includes("Full Body Car Wash") ? "Full Car Wash" : props.service.title.includes("Detailing") ? "Detailing" : props.service.title.includes("Polish") ? "Polishing" : props.service.title.includes("Interior") ? "Interior" : ""
    const indexArg = featureArg.includes("Full Car Wash") ? 2 : featureArg.includes("Detailing") ? 4 : featureArg.includes("Polishing") ? 3 : featureArg.includes("Interior") ? 8 : -1

    return(
        <div key={props.service.title} className={`${props.isFirst == true ? 'ms-5' : ''} ${props.isLast == true  ? 'me-5' : ''} service bg-gradient-to-tr from-[#235999] to-[#3A94FF] text-white flex max-w-52 rounded-xl shadow-[0_1px_15px_0_rgba(0,0,0,0.7)]`}>
            <div className="textContent p-2 pe-1 w-[max(24vw)]">
                <h1 className="text-[max(4.6vw)] font-semibold w-[min(27vw)] max-w-24">{props.service.title}</h1>
                <div className="container flex flex-col gap-2 mt-2">
                    <hr className="border "/>
                    <div className="duration flex gap-2 items-center">
                        <img className="w-[max(6.25vw)]" src="./src/assets/Clock.png" alt="" />
                        <p className="text-[max(4.2vw)]">~{props.service.duration}</p>
                    </div>
                    <hr className="border"/>
                    <div className="duration flex gap-1.5 items-center">
                        <img className="w-[max(6.25vw)]" src="./src/assets/WalletLogo.png" alt="" />
                        <Pricing level={props.service.pricing} amountStars={5} />
                    </div>
                    <hr className="border"/>
                    <Link to={`/order?feature=${featureArg}&index=${indexArg}`} >
                        <div className="rounded-full bg-[#232D40] translate-y-[max(1vw)] size-8 flex items-center justify-center text-white rounded-full text-2xl font-bold">
                            <span className="flex items-center justify-center">&gt;</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="imageContainer">
                <img className="object-cover max-w-24 h-[max(57vw)] rounded-xl" src={props.service.imgSource} alt="" />
            </div>
        </div>
    )
}