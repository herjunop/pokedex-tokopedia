/** @jsxImportSource @emotion/react */
import { LoaderStyle } from "../Styles/ComponentStyle"

export const Loader = () => {
    return (
        <div css={LoaderStyle}>
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}