import FeaturesLogo from "../../../assets/FeaturesLogo";
import RangeLogo from "../../../assets/RangeLogo";
import { Places } from "../../../dataUtils/IPlaces";
import { Pricing } from "../../universal/PricingDollar";

export function PlaceContents(props: {
    places: Places[], 
    search: string,
    filterFeatures: Array<string>,
    filterRating: boolean,
    filterRange: boolean,
    filterAvailable:boolean,
    filterPrice:boolean,
    isLoading:boolean
}) {
    const filteredData = props.places.filter((place) => {
        const searchFlag = props.search == '' ? true : place.name.toLowerCase().includes(props.search.toLowerCase())
        const featureFlag = props.filterFeatures.length > 1 ? props.filterFeatures.some((feature) => place.features.includes(feature)) : true
        const availableFlag = props.filterAvailable ? place.queue < place.capacity : true

        return searchFlag && featureFlag && availableFlag
    })

    return( 
        <>
            <div className="flex flex-col gap-3 mx-5 py-2">
                {
                props.isLoading 
                ?
                <div className="flex flex-col border w-full min-h-32 h-full rounded-xl border p-1 shadow-2xl text-balance">
                  <div className="h-36 w-full object-cover object-top rounded-xl shrink-0 bg-gray-400 animate-pulse"></div>
                  <div className="flex relative px-4 py-2 items-center justify-between gap-6 h-16">
                      <div className="textContainer w-10/12 h-full flex flex-col gap-3 ">
                          <div className="h-4 w-full bg-gray-400 animate-pulse rounded-md"></div>
                          <div className="h-4 w-full bg-gray-400 animate-pulse rounded-md"></div>
                      </div>
                      <div className="h-4 w-1/3 bg-gray-400 animate-pulse rounded-md"></div>
                      <div className="h-4 w-1/3 bg-gray-400 animate-pulse rounded-md"></div>
                  </div>
                </div>
                :
                filteredData.length > 0 && props.places.length > 0 
                ?
                filteredData.sort((a, b) => {
                    if (props.filterRating && props.filterRange && props.filterPrice) {
                      // Combined all: highest rate, cheapest price, and closest range
                      return (
                        b.rating - a.rating || // Sort by rating descending
                        a.pricing - b.pricing ||  // Sort by price ascending
                        a.range - b.range     // Sort by range ascending
                      );
                    } else if (props.filterRating && props.filterPrice) {
                      // Combined #2: highest rate and cheapest price
                      return (
                        a.pricing - b.pricing  ||    // Sort by price ascending
                        b.rating - a.rating  // Sort by rating descending
                      );
                    } else if (props.filterRange && props.filterPrice) {
                      // Combined #3: closest range and cheapest price
                      return (
                        a.pricing - b.pricing ||      // Sort by price ascending
                        a.range - b.range    // Sort by range ascending
                      );
                    } else if (props.filterRating && props.filterRange) {
                      // Combined #1: highest rate and closest range
                      return (
                          a.range - b.range ||     // Sort by range ascending
                          b.rating - a.rating  // Sort by rating descending
                      );
                    } else if (props.filterRating) {
                      // Highest rate to lowest rate
                      return b.rating - a.rating;
                    } else if (props.filterRange) {
                      // Closest range to furthest range
                      return a.range - b.range;
                    } else if (props.filterPrice) {
                      // Cheapest price to expensive price
                      return a.pricing - b.pricing;
                    } else {
                      // Default (no sorting)
                      return 0;
                    }
                  }).map((place) => (
                    <div key={place.name} className="flex flex-col bg-[#3A94FF] w-full min-h-32 h-full rounded-xl text-white text-balance">
                        <img className="size-5 w-full object-cover object-top rounded-xl h-40 shrink-0" src={place.img_source} alt="" />
                        <div className="flex relative px-7 py-2 items-center justify-between gap-5">
                            <div className="textContainer">
                                <h1 className="font-semibold text-[max(4.2vw)]">{place.name}</h1>
                                <div className="flex gap-1 items-start">
                                    <FeaturesLogo />
                                    <div className="flex gap-1 flex-wrap line-clamp-3">
                                        {place.features.filter(it => !it.includes("Promo"))
                                        .map((it, index, filteredFeatures) => (
                                            <p key={index} className="text-[10px]">
                                                {index < 6 ? it : "..."}
                                                {index !== filteredFeatures.length - 1 ? "," : ""}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {<Pricing level={place.pricing} amountStars={4} />}
                            <p className="font-semibold text-[max(3.5vw)]">
                                {`${place.queue < place.capacity ? "Tersedia" : ""}${place.queue >= place.capacity ? "FULL" : ""}`}
                            </p>
                            <div className="absolute -top-6 flex gap-2">
                              <div className="bg-white flex rounded-xl px-2 py-1 items-center gap-2 justify-between ">
                                      <p className="transform scale-150 leading-none pb-0.5 text-[#3A94FF]">★</p>
                                      <p className="text-black font-bold text-[max(3.8vw)]">{Math.round(place.rating * 10) / 10}</p>
                              </div>
                              <div className="bg-white flex rounded-xl px-2 py-1 items-center gap-2 justify-between ">
                                      <RangeLogo />
                                      <p className="text-black font-bold text-[max(3.8vw)]">{`${Math.round(place.range * 10) / 10} km`}</p>
                              </div>
                            </div>
                        </div>
                    </div>
                ))
                :
                <p>Tempat yang Anda cari tidak dapat ditemukan!</p>
                }        
            </div>
        </>
    )
}