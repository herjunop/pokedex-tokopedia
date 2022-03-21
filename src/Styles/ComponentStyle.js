import {css} from "@emotion/react";

export const BottomBarStyle = css`
    #bottom-bar {
        width: 100%;
        display:flex;
        align-items: center;
        background-color: #263238;
        position: static;
        bottom: 0;
        height:10vh;
    }

    .bottom-bar-element {
        width: 33%;
        text-align: center;
        color: #78909C;
        cursor: pointer;
        transition: all 0.5s cubic-bezier(.25,.8,.25,1);
    }

    .bottom-bar-element:hover, .active {
        color: white!important;
    }
`

export const LoaderStyle = css`
    height:100%;
    display:flex;
    flex-grow:3;
    align-items:center;
    .lds-ring {
        display: flex;
        position: relative;
        margin: auto;
        width: 80px;
        height: 80px;
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #fff;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
        transform: rotate(0deg);
        }
        100% {
        transform: rotate(360deg);
        }
    }
`

export const SearchBarStyle = css`
    form {
        position: relative;
        width: 80vw;
        border-radius: .7rem;
    }
    input, button {
        height: 5rem;
        font-family: 'Lato', sans-serif;
        border: 0;
        color: #2f2f2f;
        font-size: 1.8rem;
    }
    input[type="search"] {
        outline: 0; // <-- shold probably remove this for better accessibility, adding for demo aesthetics for now.
        width: 100%;
        background: #fff;
        padding: 0 1.6rem;
        border-radius: .7rem;
        appearance: none; //for iOS input[type="search"] roundedness issue. border-radius alone doesn't work
        transition: all .3s cubic-bezier(0, 0, 0.43, 1.49);
        transition-property: width, border-radius;
        z-index: 1;
        position: relative;
    }
    button {
        display: none; // prevent being able to tab to it
        position: absolute;
        top: 0;
        right: 0;
        width: 6rem;
        font-weight: bold;
        background: #57bd84;
        border-radius: .7rem;
    }
    input:not(:placeholder-shown) {
        width: calc(100% - 6rem);
        + button {
          display: block;
        }
    }
    label {
        position: absolute;
        clip: rect(1px, 1px, 1px, 1px);
        padding: 0;
        border: 0;
        height: 1px;
        width: 1px;
        overflow: hidden;
      }
`