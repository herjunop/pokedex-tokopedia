/** @jsxImportSource @emotion/react */

import { gql, useQuery } from "@apollo/client"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { CatchModal } from "../Components/CatchModal"
import { DetailPageStyle } from "../Styles/PagesStyle"
const GET_POKEMON = gql`
    query pokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            sprites {
                front_default
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
        }
    }
`

export const DetailPage = () => {
    let {name} = useParams()
    const [success, setSuccess] = useState(false)
    const [loadingText, setLoadingText] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [displayModal, setDisplayModal] = useState(false)
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

    if (loading) return `Loading`;

    if (error) return `Error! ${error}`;

    return (
        <div css={DetailPageStyle}>
            Detail Page
            {data.pokemon.id ? 
            (<div>
                <div>
                    {data.pokemon.id}
                </div>
                <button onClick={handleCatchPokemon}>
                    Throw pokeball
                </button>
            </div>)
            : 
            (<div>
                Pokemon Not Found!
            </div>) 
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