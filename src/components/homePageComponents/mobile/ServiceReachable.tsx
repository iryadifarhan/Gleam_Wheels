import { Service } from "../../../dataUtils/IService"
import { ServiceComponent } from "./ServiceComponent"

export function ServiceReachable(props: {
    services: Service[]
    search: string
}) {
    return(
        <div className="services h-full overflow-visible">
            <h2 className="font-bold mx-5 text-lg">Layanan yang dapat ditemui</h2>
            {props.services.filter((it) => 
                    props.search == '' ? true : it.title.toLowerCase().includes(props.search.toLowerCase())
                ).length > 0 
            ? 
            (<div className="container flex w-full gap-6 overflow-x-scroll mt-1 no-scrollbar overflow-y-visible">
                {props.services.filter((it) => 
                    props.search == '' ? true : it.title.toLowerCase().includes(props.search.toLowerCase())
                ).map((it, index) => <ServiceComponent key={it.title} service={it} isFirst={index == 0} isLast={index == props.services.length - 1}/>)}
            </div>) 
            :
            <p className="mx-5">Layanan yang Anda cari tidak dapat ditemukan!</p>
            } 
        </div>
    )
}