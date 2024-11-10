import { Service } from "../../dataUtils/IService"
import { ServiceComponent } from "./ServiceComponent"

export function ServiceReachable(props: {
    services: Service[]
    search: string
}) {
    return(
        <div className="services mx-3 h-full">
            <h2 className="font-bold text-lg">Layanan yang dapat ditemui</h2>
            {props.services.filter((it) => 
                    props.search == '' ? true : it.title.toLowerCase().includes(props.search.toLowerCase())
                ).length > 0 
            ? 
            (<div className="container flex w-full gap-6 overflow-x-scroll mt-1 snap-x no-scrollbar overflow-y-visible">
                {props.services.filter((it) => 
                    props.search == '' ? true : it.title.toLowerCase().includes(props.search.toLowerCase())
                ).map((it) => <ServiceComponent key={it.title} service={it} />)}
            </div>) 
            :
            <p>Layanan yang Anda cari tidak dapat ditemukan!</p>
            } 
        </div>
    )
}