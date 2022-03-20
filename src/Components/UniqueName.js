import { useState } from "react"
import { validateName } from "../Helpers/function"

export const UniqueName = ({pokemon}) => {
    const [name, setName] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const pokedex = localStorage.getItem("pokedex")
        const temp = pokedex ? JSON.parse(pokedex) : []

        if(validateName(temp, name)) {
            setError("Name already taken")
        } else {
            setError("")
            const newPokemon = {
                ...pokemon,
                unique_name:name
            }
            temp.push(newPokemon)
            localStorage.setItem('pokedex', JSON.stringify(temp))
        }
    }

    return (
        <div>
            Give it a unique name!
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Set Name"/>
                <input type="submit" value="Submit"/>
                {error && (<div>{error}</div>)}
            </form>
        </div>
    )
}