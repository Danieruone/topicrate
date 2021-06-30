import React, { useContext } from "react";
import Loader from "react-loader-spinner";
// context
import { SocketContext } from "context/SocketContext";
// styles
import { Container, Dot } from "./styles";

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
