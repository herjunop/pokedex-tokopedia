import { useState } from "react"
import { validateName } from "../Helpers/function"

export const UniqueName = ({pokemon, setUniqueName, setDisplayModal}) => {
    const [name, setName] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const modal2 = document.getElementById("myModal2");
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
            setDisplayModal(false)
            modal2.style.display = "block"
            setUniqueName(name)
        }
    }

    return (
        <div className="unique-name">
            <div className="picture">
                <img src={pokemon.sprites.front_default} alt=""/>
            </div>
            <div>
                You catch {pokemon.name}!
            </div>
            <form onSubmit={handleSubmit}>
                <input id="input-name" type="text" value={name} placeholder="Set Unique Name"
                    onChange={(e)=>{
                    setName(e.target.value)
                    setError("")
                    }}
                />
                <input id="input-submit" type="submit" value="Save"/>
            </form>
            {error && (<div className="error">{error}</div>)}
        </div>
    )
}