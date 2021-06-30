import Styled from "styled-components";

export const Container = Styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: solid .1px rgb(233, 236, 239);
  padding: 10px 0 10px 0;
  & > *{
    margin: 10px;
  }
  & button{
    border: none;
  }
  &:last-child{
    border-bottom: none;
  }
`;

export const UpVote = Styled.button`
  background-color: #3366FF;
  padding: 10px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

export const NameInput = Styled.input`
  border-radius: 8px;
  padding: 5px;
  border: solid .1px gray;
  width: 50%;
  color: gray;
`;

export const Votes = Styled.p`
  display: flex;
  align-items:center;
  justify-content: center;
  width: 30px;
`;

export const Delete = Styled.button`
  background-color: #FF4073;
  padding: 10px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;
