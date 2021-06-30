import React, { useContext } from "react";
// context
import { SocketContext } from "context/SocketContext";

import Styled from "styled-components";

const Container = Styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    color: gray;
    padding: 20px;
    top: 30px;
    & div{
        width: 10px;
        height: 10px;
        background: ${({ isOnline }) => (isOnline ? "green;" : "red;")};
        margin-left: 10px;
        border-radius: 50%;
    }
`;

export const ConnectedAlert = () => {
  const { online } = useContext(SocketContext);
  return (
    <Container isOnline={online}>
      {online ? <p>connected</p> : <p>disconnected</p>}
      <div></div>
    </Container>
  );
};
