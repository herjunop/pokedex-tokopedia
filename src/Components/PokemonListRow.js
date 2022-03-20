import { useNavigate } from "react-router-dom"
import { countOwned } from "../Helpers/function"

export const PokemonListRow = ({pokemon}) => {
    const navigate = useNavigate()
    const pokedex = localStorage.getItem("pokedex")
    const temp = pokedex ? JSON.parse(pokedex) : []

    return (
        <div onClick={()=>navigate('/detail/'+ pokemon.name)} className='pokemon-element'>
            <div>
                {pokemon.name}
            </div>
            <div>
                owned : {countOwned(temp, pokemon)}
            </div>
        </div>
    )
}