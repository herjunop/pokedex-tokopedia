import { NotFoundStyle } from "../Styles/ComponentStyle"

/** @jsxImportSource @emotion/react */
export const NotFound = ({text}) => {
    return (
        <div css={NotFoundStyle}>
            {text}
        </div>
    )
}