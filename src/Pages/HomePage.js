import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const HomePage = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState("")

    const handleSubmit = () => {
        navigate('/detail/'+ search)
    }

    return (
        <div>
            Home Page
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search Pokemon"/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    )
}  