import { useParams } from "react-router-dom"

export const DetailPage = () => {
    let {name} = useParams()
    return (
        <div>
            Detail {name} Page
        </div>
    )
}