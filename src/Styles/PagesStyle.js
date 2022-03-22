import {css} from "@emotion/react";

export const DetailPageStyle = css`
    height:100%;
    flex-grow:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    .modal-content {
        background-color: #e3e5dd;
        margin: auto;
        padding: 20px 20px 60px;
        border: 5px solid black;
        width: 80%;
        max-width: 500px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display:flex;
        flex-direction:column;
        align-items:center;

        p {
            text-align: center;
        }

        .unique-name {
            display:flex;
            width:70%;
            flex-direction:column;
            align-items:center;
            form {
                display:flex;
                flex-direction:column;
                align-items:center;
                input {
                    margin:3px 0;
                }
            }
            div {
                margin:5px 0;
            }

            #input-name {
                border-radius: 25px;
                border: 2px solid;
                height: 30px;
                padding:5px;
                text-align:center;
            }

            #input-submit {
                border: 2px solid;
                border-radius: 25px;
                height: 30px;
                width:75%;
            }
        }

        .throw-ball {
            border: 2px solid black;
            border-radius: 12px;
            margin: 15px;
            padding: 10px;
            background-color:red;
            cursor:pointer;
        }

        .error {
            color: red;
        }
    }

    .close {
        color: red;
        align-self:flex-end;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
    }
`

export const ListPageStyle = css`
    height: 100%;
    display:flex;
    flex-grow:1;
    flex-direction: column;

    .pokemon-list {
        display: flex;
        flex-direction: column;
    }
    .pokemon-element {
        display: flex;
        flex-direction: row;
        justify-content:space-evenly;
        align-items:center;
        border: 1rem solid;
        height: 20vh;
        padding: 0 3px;
        margin: 10px auto;
        width: 70%;
        max-width: 500px;
        background-color: #e3e5dd;
        cursor:pointer;
        
        .pokemon-name {
            display:flex;
            flex-grow:1;
            justify-content:center;
        }
        .pokemon-image {
            display:flex;
            flex-grow:2;
            justify-content:center;
            max-height:100%
        }
        .pokemon-owned {
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            flex-grow:1;
        }
    }
    .pagination {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        justify-content: center;
        align-items:end;
        margin-bottom: 20px; 

        button {
            border: 2px solid;
            padding: 5px 15px;
            border-radius: 25px;
            margin: 0 25px;
        }

        div {
            padding: 5px 15px;
        }
    }
`

export const HomePageStyle = css`
    height:100%;
    flex-grow:1;
    display: flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
`

export const PokedexPageStyle = css`
    height:100%;
    flex-grow:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    .modal-content {
        background-color: #e3e5dd;
        margin: auto;
        padding: 20px 20px 60px;
        border: 5px solid black;
        width: 80%;
        max-width: 500px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display:flex;
        flex-direction:column;
        align-items:center;

        p {
            text-align: center;
        }

        .confirmation {
            display:flex;
            flex-direction: row;
            width:75%;
            justify-content: space-between;

            .confirm {
                border: 2px solid black;
                padding: 5px 10px;
                background-color:red;
                cursor:pointer;
                border-radius: 12px;
            }

            .cancel {
                border: 2px solid black;
                padding: 5px 10px;
                cursor:pointer;
                border-radius: 12px;
            }
        }
    }
`

export const AppStyle = css`
    .topbar {
        min-height: 90vh;
        display:flex;
        flex-direction: column;
        justify-content:center;
    }
`