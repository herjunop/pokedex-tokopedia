import {css} from "@emotion/react";

export const BottomBarStyle = css`
    #bottom-bar {
        width: 100%;
        background-color: #263238;
        position: fixed;
        bottom: 0;
    }

    .bottom-bar-element {
        width: 33%;
        display: inline-block;
        float: left;
        text-align: center;
        padding-top: 32px;
        padding-bottom: 32px;
        color: #78909C;
        cursor: pointer;
        transition: all 0.5s cubic-bezier(.25,.8,.25,1);
    }

    .bottom-bar-element:hover, .active {
        color: white!important;
    }
`