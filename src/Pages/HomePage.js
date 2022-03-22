/** @jsxImportSource @emotion/react */
import { SearchBar } from "../Components/SearchBar"
import { HomePageStyle } from "../Styles/PagesStyle"
import { useNavigate } from "react-router-dom"

export const HomePage = () => {
    const navigate = useNavigate()

    const handleSubmit = (search) => {
        navigate('/detail/'+ search)
    }

    return (
        <div css={HomePageStyle}>
            <img src="/images/pokeball-png-45333.png" width={200} alt=""/>
            <SearchBar handleSubmit={handleSubmit} placeholder={'Search Pokemon..'}/>
        </div>
    )
}  