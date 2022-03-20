/** @jsxImportSource @emotion/react */
import { useLocation, useNavigate } from "react-router-dom";
import { BottomBarStyle } from "../Styles/ComponentStyle";

export const BottomBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div css={BottomBarStyle}>
            <div id="bottom-bar" >
                <div className={`bottom-bar-element ${location.pathname === '/' && "active"}`}>
                    <span onClick={()=>navigate('/')}>
                    Home
                    </span>
                </div>
                <div className={`bottom-bar-element ${location.pathname === '/pokemon-list' && "active"}`}>
                    <span onClick={()=>navigate('/pokemon-list')}>
                    Pokemon List
                    </span>
                </div>
                <div className={`bottom-bar-element ${location.pathname === '/pokedex' && "active"}`}>
                    <span onClick={()=>navigate('/pokedex')}>
                    My Pokemon
                    </span>
                </div>
            </div>
        </div>
    )
}