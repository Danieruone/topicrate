import Styled from "styled-components";

export const Container = Styled.form`
    width: 100%;
    background-color: #F2385E;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0px 20px 0px;
    margin-bottom: 50px;
    border-radius: 10px;
    & h1{
        margin: 0px 0px 20px 0px;
    }
    & input{
        border-radius: 8px;
        border: none;
        padding: 10px;
    }
    & button{
        background-color: #2DCE89;
        color: white;
        border: none;
        padding: 10px;
        border-radius: 8px;
        cursor: pointer;
        margin-left: 10px;
    }
`;
