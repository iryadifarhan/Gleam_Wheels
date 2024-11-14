import { Service } from "../../../dataUtils/IService";
import { Pricing } from "../../universal/PricingDollar";

export function ServiceComponent(props: {service: Service, isFirst: boolean, isLast: boolean}) {
    return(
        <div key={props.service.title} className={`${props.isFirst == true ? 'ms-5' : ''} ${props.isLast == true  ? 'me-5' : ''} service bg-gradient-to-tr from-[#235999] to-[#3A94FF] text-white flex max-w-52 rounded-xl`}>
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
                    <div className="rounded-full bg-[#232D40] translate-y-[max(1vw)] size-8 flex items-center justify-center text-white rounded-full text-2xl font-bold">
                        <span className="flex items-center justify-center">&gt;</span>
                    </div>
                </div>
            </div>
            <div className="imageContainer">
                <img className="object-cover max-w-24 h-[max(57vw)] rounded-xl" src={props.service.imgSource} alt="" />
            </div>
        </div>
    )
}