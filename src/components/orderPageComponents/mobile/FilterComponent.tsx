import FilterLogo from "../../../assets/FilterLogo";

export function FilterComponent(props: {
    setFilterFeature: any,
    setFilterRating: any,
    setFilterRange: any,
    setFilterAvailable: any,
    setFilterPrice: any,
    buttonActives: Array<number>
}) {
    const filters = ["Terdekat", "Tersedia", "Termurah", "Rating tertinggi", "Full Car Wash", "Polishing", "Detailing", "Undercarriage", "Coating", "Paint Protection Film", "Interior"]
    
    return(
        <>
        <div className="flex overflow-x-scroll items-center h-10 gap-2 my-3 no-scrollbar">
            <FilterLogo classProperty={`${props.buttonActives.length < 2 ? "bg-[#232D40]" : "bg-[#3A94FF]"} ms-5 object-contain h-full w-auto max-w-[max(10vw)] aspect-square px-[max(2.5vw)] rounded-xl shrink-0`} />
            {filters.map((it, index) => 
                (<button onClick={index == 0 ? () => props.setFilterRange(index) : index == 1 ? () => props.setFilterAvailable(index) : index == 2 ? () => props.setFilterPrice(index) : index == 3 ? () => props.setFilterRating(index) : () => props.setFilterFeature(it, index)} 
                key={index} className={`${index == filters.length - 1 ? "me-5" : ""} ${props.buttonActives.includes(index) ? "bg-[#3A94FF]" : "bg-[#232D40]"} transition-colors duration-150 ease-in-out  flex items-center h-full p-1.5 rounded-xl text-white text-[max(3.5vw)] font-medium px-[max(2.5vw)] shrink-0`}>
                    {it}
                </button>)
            )}
        </div>
        </>
    )
}