import FilterLogo from "../../../assets/FilterLogo";

export function FilterComponent(props: {
    setFilterFeature: any,
    setFilterRating: any,
    setFilterRange: any,
    buttonActives: Array<number>
}) {
    const filters = ["Terdekat", "Rating tertinggi", "Full Car Wash", "Polishing", "Detailing", "Undercarriage", "Coating", "Paint Protection Film"]

    return(
        <>
        <div className="flex overflow-x-scroll items-center h-10 gap-2 my-3 no-scrollbar">
            <FilterLogo classProperty={"ms-5 bg-[#232D40] object-contain h-full w-auto max-w-[max(10vw)] aspect-square px-[max(2.5vw)] rounded-xl shrink-0"} />
            {filters.map((it, index) => 
                (<button onClick={it.includes("Rating") ? () => props.setFilterRating(index) : index > 1 ? () => props.setFilterFeature(it, index) : () => props.setFilterRange(index)} 
                key={index} className={`${index == filters.length - 1 ? "me-5" : ""} ${props.buttonActives.includes(index) ? "bg-[#3A94FF]" : "bg-[#232D40]"} transition-colors duration-150 ease-in-out  flex items-center h-full p-1.5 rounded-xl text-white text-[max(3.5vw)] font-medium px-[max(2.5vw)] shrink-0`}>
                    {it}
                </button>)
            )}
        </div>
        </>
    )
}