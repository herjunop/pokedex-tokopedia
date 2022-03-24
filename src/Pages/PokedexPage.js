/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { NotFound } from "../Components/NotFound";
import { PokedexCard } from "../Components/PokedexCard";
import { PokedexPageStyle } from "../Styles/PagesStyle";

export const PokedexPage = () => {
    const pokedex = localStorage.getItem("pokedex")
    const [temp, setTemp] = useState(pokedex ? JSON.parse(pokedex) : [])
    const [displayModal, setDisplayModal] = useState(false)
    const [release, setRelease] = useState("")
    const modal = document.getElementById("confirm-release");

    if (modal) {
        modal.style.display = displayModal ? "block" : "none"
    }

    const handleRelease = (data) => {
        setDisplayModal(true)
        setRelease(data)
    }
    
    const confirmRelease = () => {
        const newPokedex = temp.filter(element => element !== release)
        localStorage.setItem("pokedex", JSON.stringify(newPokedex))
        setTemp(newPokedex)
        setDisplayModal(false)
    }

    if (!temp.length) {
        return (
            <NotFound text={'Pokemon Not Found'}/>
        )
    }
    return (
        <div css={PokedexPageStyle}>
            {
                temp.map(data => {
                    return(
                        <PokedexCard data={data} buttonText={'Release'} handleButton={handleRelease} key={data.id}/>
                    )
                })
            }
            <div id="confirm-release" className="modal">
                <div className="modal-content">
                    <p>Are you sure want to release {release.unique_name}?</p>
                    <div className="confirmation">
                        <div className="confirm" onClick={confirmRelease}>
                            Release
                        </div>
                        <div className="cancel" onClick={()=>setDisplayModal(false)}>
                            Cancel
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}