/** @jsxImportSource @emotion/react */
import { LoaderStyle } from "../Styles/ComponentStyle"

export const Loader = () => {
    return (
        <div css={LoaderStyle}>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}