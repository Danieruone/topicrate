import React, { useEffect, useContext, useState } from "react";
import { Band } from "components/Band";
// context
import { SocketContext } from "context/SocketContext";

export const BandList = () => {
  const [bandList, setBandList] = useState([]);

  const { socket } = useContext(SocketContext);

  useEffect(() => {
    socket.on("current-bands", (bands) => {
      setBandList(bands);
    });
  }, [socket]);

  return (
    <div>
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
    </div>
  );
};
