import Styled from "styled-components";

export const Container = Styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    color: gray;
    padding: 20px;
    top: 0px;
    font-size: 12px;
    & p{
      margin-right: 10px;
    }
`;

export const Dot = Styled.div`
    width: 10px;
    height: 10px;
    background: green;
    border-radius: 50%;
`;
