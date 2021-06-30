import React, { useEffect, useContext, useState } from "react";
import { Band } from "components/Band";
// context
import { SocketContext } from "context/SocketContext";

import Styled from "styled-components";

export const Container = Styled.div`
  background-color: #222B45;
  width: 40%;
  padding: 20px 20px 20px 20px;
  border-radius: 10px;
  color: white;
`;

export const BandList = () => {
  const [bandList, setBandList] = useState([]);

  const { socket } = useContext(SocketContext);

  useEffect(() => {
    socket.on("current-bands", (bands) => {
      setBandList(bands);
    });
  }, [socket]);

  return (
    <Container>
      {bandList.map((band) => {
        return (
          <Band
            key={band.id}
            socket={socket}
            setBandList={setBandList}
            band={band}
          />
        );
      })}
    </Container>
  );
};
