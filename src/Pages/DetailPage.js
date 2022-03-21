/** @jsxImportSource @emotion/react */

import { gql, useQuery } from "@apollo/client"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { CatchModal } from "../Components/CatchModal"
import { Dropdown } from "../Components/Dropdown"
import { Loader } from "../Components/Loader"
import { DetailPageStyle } from "../Styles/PagesStyle"
const GET_POKEMON = gql`
    query pokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            abilities {
              ability {
                name
              }
            }
            abilities {
              ability {
                name
              }
            }
            moves {
              move {
                name
              }
            }
            types {
              type {
                name
              }
            }
            sprites {
                front_default
            }
            height
            weight
        }
    }
`

export const DetailPage = () => {
    let {name} = useParams()
    const [success, setSuccess] = useState(false)
    const [loadingText, setLoadingText] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [displayModal, setDisplayModal] = useState(false)
    const [displayTypes, setDisplayTypes] = useState(false)
    const [displayMoves, setDisplayMoves] = useState(false)
    const [displayAbilities, setDisplayAbilities] = useState(false)

    const { loading, error, data } = useQuery(GET_POKEMON, {
        variables: { name },
    });

    const handleCatchPokemon = () => {
        setDisplayModal(true)
        setIsLoading(true)
        setLoadingText('THROWING THE BALL...');
        setTimeout(() => {
            if (handleChance()) {
                setSuccess(true)
                setLoadingText("GOTCHA!")
            } else {
                setSuccess(false)
                setLoadingText("OH NO, YOU MISSED IT")
            }
            setIsLoading(false)
        }, 2000);
    }

    const handleChance = () => {
        const chance = Math.random()
        return chance >= 0.5
    }

    if (loading) return <Loader/>;

    if (error) return `Error! ${error}`;

    return (
        <div css={DetailPageStyle}>
            {data.pokemon.id ? 
            (<div className="card">
                <div className="name">
                    <strong>{data.pokemon.name}</strong>
                </div>

                <div className="picture">
                    <img src={data.pokemon.sprites.front_default} alt=""/>
                </div>

                <div className="type" onClick={()=>setDisplayTypes(!displayTypes)}>
                    Types
                </div>
                <Dropdown display={displayTypes} datas={data.pokemon.types} type={'Types'}/>
                
                <div className="type" onClick={()=>setDisplayMoves(!displayMoves)}>
                    Moves
                </div>
                <Dropdown display={displayMoves} datas={data.pokemon.moves} type={'Moves'}/>

                <div className="type" onClick={()=>setDisplayAbilities(!displayAbilities)}>
                    abilities
                </div>
                <Dropdown display={displayAbilities} datas={data.pokemon.abilities} type={'Abilities'}/>

                <div className="throw-ball" onClick={handleCatchPokemon}>
                    Throw Pokeball!
                </div>
            </div>
            )
            : 
            (
                <div className="not-found">
                    Pokemon Not Found!
                </div>
            ) 
            }
            <CatchModal 
                displayModal={displayModal} 
                setDisplayModal={setDisplayModal}
                loadingText={loadingText}
                success={success}
                handleCatchPokemon={handleCatchPokemon}
                isLoading={isLoading}
                pokemon={data.pokemon}
            />
        </div>
    )
}