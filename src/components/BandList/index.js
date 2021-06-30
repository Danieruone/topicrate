import React, { useEffect, useContext, useState } from "react";
import { Band } from "components/Band";
// context
import { SocketContext } from "context/SocketContext";
// styles
import Styled from "styled-components";

export const Container = Styled.div`
  background-color: #222B45;
  border-radius: 5px;
  color: white;
  overflow-y: scroll;
  height: 75vh;
  @media (max-width: 600px) {
    height: 300px;
  } 
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
      {bandList.length === 0 ? (
        <p style={{ color: "gray", display: "flex", justifyContent: "center" }}>
          Add your topic
        </p>
      ) : (
        bandList.map((band) => {
          return (
            <Band
              key={band.id}
              socket={socket}
              setBandList={setBandList}
              band={band}
            />
          );
        })
      )}
    </Container>
  );
};
