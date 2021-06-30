import Styled from "styled-components";

export const Container = Styled.div`
  display: grid;
  grid-template-columns: 49.5% 49.5%;
  grid-column-gap: 1%;
  height: 75vh;
  margin-bottom: 50px;
  & span{
    color: gray !important;
  }
  & > *{
    margin: auto;
  }
  @media (max-width: 800px) {
    grid-template-columns: 100%;
    grid-row-columns: 100%;
    grid-row-gap: 2%;
    height: auto;
    margin-bottom: 50px;
  } 
`;

export const ChartContainer = Styled.div`
  width: 100%;
  border-radius: 5px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222B45;
`;
