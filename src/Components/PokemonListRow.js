import { useNavigate } from "react-router-dom"
import { countOwned } from "../Helpers/function"

export const PokemonListRow = ({pokemon}) => {
    const navigate = useNavigate()
    const pokedex = localStorage.getItem("pokedex")
    const temp = pokedex ? JSON.parse(pokedex) : []

    return (
        <div onClick={()=>navigate('/detail/'+ pokemon.name)} className='pokemon-element'>
            <div className="pokemon-name">
                {pokemon.name}
            </div>
            <img className="pokemon-image" src={pokemon.image} alt=""/>
            <div className="pokemon-owned">
                <div>
                    owned: 
                </div>
                <div>
                    {countOwned(temp, pokemon)}
                </div>
            </div>
        </div>
    )
}