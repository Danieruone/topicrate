import Styled from "styled-components";

export const Container = Styled.form`
    width: 100%;
    background-color: #222B45;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0px 40px 0px;
    margin-bottom: 20px;
    border-radius: 5px;
    & h1{
        margin: 0px 0px 20px 0px;
        font-size: 25px;
        font-weight: 100;
    }
    & input{
        border-radius: 5px;
        border: none;
        padding: 10px;
        width: 300px;
    }
    & button{
        background-color: #2DCE89;
        color: white;
        border: none;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        margin-left: 10px;
    }
    @media (max-width: 600px) {
        & h1 {
            margin: 30px 0px 20px 0px;
            font-size: 15px;
        }
        & input{
            border-radius: 5px;
            border: none;
            padding: 12px;
            width: 50%;
            font-size: 11px;
        }
    } 
`;
