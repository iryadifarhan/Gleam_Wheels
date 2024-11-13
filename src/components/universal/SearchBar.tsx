export function SearchBar(props: {
    search: string
    setSearch: any
    searchPlaceHolder: string
}) {
    return(
        <div className="searchBar flex mx-5 bg-[#3A94FF] px-3 py-2 rounded-3xl items-center gap-2">
            <img className="max-w-7" src="./src/assets/SearchLogo.png" alt="search" />
            <input className="flex-auto bg-transparent border-none focus:outline-none text-white placeholder:italic placeholder:text-slate-300"
             type="text" value={props.search} placeholder={props.searchPlaceHolder} onChange={(e) => props.setSearch(e.target.value)}/>
        </div>
    )
}