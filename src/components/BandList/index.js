import React from "react";
import { Band } from "components/Band";

export const BandList = ({ bandList, socket, setBandList }) => {
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
