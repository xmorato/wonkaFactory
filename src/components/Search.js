import React, { useContext } from "react"
import SearchContext from "../context/OompasContext"
const Search = () => {
    const { search, setSearch } = useContext(SearchContext)

    const handleChange = (evt) => {
        setSearch(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
    }

    return (
        <div className="Search">
            <form onSubmit={handleSubmit} >
                <input className="SearchInput"
                    placeholder="Search"
                    onChange={handleChange}
                    type="text"
                    value={search}
                />
            </form>
            <div className="SearchSlash">|</div>
            <div className="SearchIcon">
                <img src="ic_search.png" alt="Search" />
            </div>

        </div >
    )
}

export default Search