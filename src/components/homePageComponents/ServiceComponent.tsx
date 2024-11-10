import { Service } from "../../dataUtils/IService";

const Pricing = (props: {level: number}) => {
    const prices = new Array(props.level).fill('$')
    const left = new Array(5-props.level).fill('$')

    return (
        <div className="tracking-wide">
          {prices.map((dollar, index) => (<span className="text-green-500" key={index}>{dollar}</span>))}
          {left.map((dollar, index) => (<span key={index}>{dollar}</span>))}
        </div>
      );
}

export function ServiceComponent(props: {service: Service}) {
    return(
        <div key={props.service.title} className="service bg-gradient-to-tr from-[#235999] to-[#3A94FF] text-white flex max-w-52 rounded-xl relative snap-start overflow-y-visible shadow-lg">
            <div className="textContent p-2">
                <h1 className="text-lg font-medium min-w-20">{props.service.title}</h1>
                <div className="container flex flex-col gap-2 mt-2">
                    <hr className="border"/>
                    <div className="duration flex gap-2 items-center">
                        <img className="max-w-6" src="./src/assets/Clock.png" alt="" />
                        <p>~{props.service.duration}</p>
                    </div>
                    <hr className="border"/>
                    <div className="duration flex gap-1.5 items-center">
                        <img className="max-w-6" src="./src/assets/WalletLogo.png" alt="" />
                        <Pricing level={props.service.pricing} />
                    </div>
                    <hr className="border"/>
                </div>
            </div>
            <div className="imageContainer">
                <img className="object-cover h-full max-w-24 min-h-52 rounded-xl" src={props.service.imgSource} alt="" />
            </div>
            <div className="absolute bottom-2 left-2 rounded-full bg-[#232D40] size-8">
                <p className="text-3xl font-bold -translate-y-1.5 translate-x-1.5">&gt;</p>
            </div>
        </div>
    )
}