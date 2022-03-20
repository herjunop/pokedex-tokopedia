import { UniqueName } from "./UniqueName";

export const CatchModal = ({displayModal, setDisplayModal, loadingText, success, handleCatchPokemon, isLoading, pokemon}) => {
    const modal = document.getElementById("myModal");

    if (modal) {
        modal.style.display = displayModal ? "block" : "none"
    }
    
    const closeModal = () => {
        setDisplayModal(false)
    }

    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <p>{loadingText}</p>
                {!isLoading &&
                    (
                        <>
                            {success ? 
                                (<UniqueName pokemon={pokemon}/>)
                                :
                                (<div>
                                    <button onClick={handleCatchPokemon}>
                                        Throw again
                                    </button>
                                </div>)
                            }
                        </>
                    )
                }
            </div>
        </div>
    )
}