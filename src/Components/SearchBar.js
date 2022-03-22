/** @jsxImportSource @emotion/react */
import { useState } from "react"
import { SearchBarStyle } from "../Styles/ComponentStyle"

export const SearchBar = ({handleSubmit, placeholder}) => {
    const [search, setSearch] = useState("")

    return (
        <div css={SearchBarStyle}>
            <form onSubmit={()=>handleSubmit(search)} role="search">
                <label htmlFor="search">Search for stuff</label>
                <input id="search" type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder={placeholder} autoFocus required />
                <button type="submit">Go</button>    
            </form>
        </div>
    )
}