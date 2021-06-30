import React, { useContext } from "react";
import Loader from "react-loader-spinner";
// context
import { SocketContext } from "context/SocketContext";

import Styled from "styled-components";

const Container = Styled.div`
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

export const ConnectedAlert = () => {
  const { online } = useContext(SocketContext);
  return (
    <Container isOnline={online}>
      {online ? <p>connected</p> : <p>Trying to connect </p>}
      {online ? (
        <Dot></Dot>
      ) : (
        <Loader type="Puff" color="red" height={20} width={20} />
      )}
    </Container>
  );
};
