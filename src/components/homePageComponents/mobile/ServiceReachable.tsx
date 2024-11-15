import { Service } from "../../../dataUtils/IService"
import { ServiceComponent } from "./ServiceComponent"

export function ServiceReachable(props: {
    services: Service[]
    search: string
}) {
    const filteredData = props.services.filter((it) => 
        props.search == '' ? true : it.title.toLowerCase().includes(props.search.toLowerCase())
    )

    return(
        <div className="services h-full overflow-visible">
            <h2 className="font-bold mx-5 text-[max(4.75vw)]">Layanan yang dapat ditemui</h2>
            {filteredData.length > 0 
            ? 
            (<div className="container flex gap-6 overflow-x-scroll mt-1 no-scrollbar">
                {filteredData.map((it, index) => <ServiceComponent key={it.title} service={it} isFirst={index == 0} isLast={index == filteredData.length - 1}/>)
                }
            </div>) 
            :
            <p className="mx-5">Layanan yang Anda cari tidak dapat ditemukan!</p>
            } 
        </div>
    )
}