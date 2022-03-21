/** @jsxImportSource @emotion/react */
import { useLocation, useNavigate } from "react-router-dom";
import { BottomBarStyle } from "../Styles/ComponentStyle";

export const BottomBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div css={BottomBarStyle}>
            <div id="bottom-bar" >
                <div className={`bottom-bar-element ${location.pathname === '/' && "active"}`} onClick={()=>navigate('/')}>
                    <span>
                    Home
                    </span>
                </div>
                <div className={`bottom-bar-element ${location.pathname === '/pokemon-list' && "active"}`} onClick={()=>navigate('/pokemon-list')}>
                    <span>
                    Pokemon List
                    </span>
                </div>
                <div className={`bottom-bar-element ${location.pathname === '/pokedex' && "active"}`} onClick={()=>navigate('/pokedex')}>
                    <span>
                    My Pokemon
                    </span>
                </div>
            </div>
        </div>
    )
}