/** @jsxImportSource @emotion/react */
import { useState } from "react"
import { PokedexCardStyle } from "../Styles/ComponentStyle"
import { Dropdown } from "./Dropdown"

export const PokedexCard = ({data, handleButton, buttonText}) => {
    const [displayTypes, setDisplayTypes] = useState(false)
    const [displayMoves, setDisplayMoves] = useState(false)
    const [displayAbilities, setDisplayAbilities] = useState(false)

    return(
        <div css={PokedexCardStyle}>
            <div className="name">
                {data.unique_name ? 
                (<strong>{data.unique_name} ({data.name})</strong>) 
                : 
                (<strong>{data.name}</strong>)
                }
            </div>

            <div className="picture">
                <img src={data.sprites.front_default} alt=""/>
            </div>

            <div className="type" onClick={()=>setDisplayTypes(!displayTypes)}>
                Types
            </div>
            <Dropdown display={displayTypes} datas={data.types} type={'Types'}/>
            
            <div className="type" onClick={()=>setDisplayMoves(!displayMoves)}>
                Moves
            </div>
            <Dropdown display={displayMoves} datas={data.moves} type={'Moves'}/>

            <div className="type" onClick={()=>setDisplayAbilities(!displayAbilities)}>
                abilities
            </div>
            <Dropdown display={displayAbilities} datas={data.abilities} type={'Abilities'}/>

            <div className="throw-ball" onClick={()=>handleButton(data)}>
                {buttonText}
            </div>
        </div>
    )
}