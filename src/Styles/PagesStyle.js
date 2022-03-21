import {css} from "@emotion/react";

export const DetailPageStyle = css`
    height:100%;
    flex-grow:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    .card {
        border: 0.5rem solid;
        width: 70%;
        max-width: 500px;
        background-color: #b19d49;
        padding: 5px;
        margin: 20px;

        .name {
            font-size:large;
            border: 2px solid black;
            border-radius: 12px;
            padding: 10px;
            margin: 5px;
        }
        .picture {
            border: 2px solid black;
            border-radius: 12px;
            background-image: url('/images/images.jpg');
            background-size: contain;
            justify-content: center;
            align-items: center;
            display: flex;
            margin: 5px;
            height: 20vh;

            img {
                height:100%;
            }
        }

        .type {
            border: 2px solid black;
            border-radius: 12px;
            margin: 5px;
            padding: 5px;
            cursor:pointer;
        }

        .dropdown {
            border: 2px solid black;
            border-radius: 12px;
            margin:0 10px 5px;
            padding: 5px;
            background-color: #e3e5dd;
            display: flex;
            flex-wrap: wrap;

            .data {
                font-size:10px;
                border: 2px solid black;
                margin: 2px;
                padding: 2px;
                border-radius: 12px;
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
    }

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
        background-color: #fefefe;
        margin: auto;
        padding: 20px 20px 60px;
        border: 5px solid black;
        width: 80%;
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
                input {
                    margin:3px 0;
                }
            }
            div {
                margin:5px 0;
            }
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

    .not-found {
        border: 0.5rem solid;
        background-color: #e3e5dd;
        padding: 5px;
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
        background-color: #e3e5dd;
        max-width: 500px;
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

export const AppStyle = css`
    .topbar {
        min-height: 90vh;
        display:flex;
        flex-direction: column;
        justify-content:center;
    }
`