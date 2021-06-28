import Styled from "styled-components";

export const Container = Styled.div`
  display: flex;
  justify-content: start;
  padding: 10px;
  & > *{
    margin: 10px;
  }
  & button{
    border: none;
  }
`;

export const UpVote = Styled.button`
  background-color: #2892F5;
  padding: 10px;
  color: white;
  border-radius: 8px;
  cursor: pointer;
`;

export const NameInput = Styled.input`
  border-radius: 8px;
  padding: 5px;
  border: solid .1px gray;
`;

export const Votes = Styled.p`
  display: flex;
  align-items:center;
`;

export const Delete = Styled.button`
  background-color: #F52233;
  padding: 10px;
  color: white;
  border-radius: 8px;
  cursor: pointer;
`;
