/** @jsxImportSource @emotion/react */
import {gql, useQuery} from "@apollo/client";
import { useEffect, useState } from "react";
import { Loader } from "../Components/Loader";
import { PokemonListRow } from "../Components/PokemonListRow";
import { ListPageStyle } from "../Styles/PagesStyle";
import { NotFound } from "../Components/NotFound";

const GET_POKEMONS = gql`
    query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
            count
            next
            previous
            nextOffset
            prevOffset
            status
            message
            results {
                url
                name
                image
                id
            }
        }
    }
`;

const limit = 3

export const ListPage = () => {
    const [pokemons, setPokemons] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [offset, setOffset] = useState(0)
    const [prevOffset, setPrevOffset] = useState(0)
    const [nextOffset, setNextOffset] = useState(11)

    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: { limit, offset },
    });

    useEffect(() => {
        if (data) {
            setPokemons(data.pokemons.results)
            setNextOffset(data.pokemons.nextOffset)
            setPrevOffset(data.pokemons.prevOffset)
            setCurrentPage(data.pokemons.nextOffset/limit)
            setTotalPage(Math.ceil(data.pokemons.count/limit))
        }
    }, [data])
   
    if (error) return <NotFound text={'Fetch Error'}/>

    return (
        <div css={ListPageStyle}>
            {loading ? 
                (
                    <Loader/>
                )
                :
                (
                    <div className="pokemon-list">
                        {pokemons.map((pokemon) => (
                            <PokemonListRow pokemon={pokemon} key={`pokemon-${pokemon.id}`}/>
                        ))}
                    </div>
                )
            }
            
            <div className="pagination">
                <button onClick={()=>setOffset(prevOffset)}>Prev</button>
                <div>{currentPage}/{totalPage}</div>
                <button onClick={()=>setOffset(nextOffset)}>Next</button>
            </div>
        </div>
    )
}