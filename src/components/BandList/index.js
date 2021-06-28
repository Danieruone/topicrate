import React from "react";
import { Band } from "components/Band";

export const BandList = ({ bandList }) => {
  return (
    <div>
      {bandList.map((band) => {
        return <Band key={band.id} {...band} />;
      })}
    </div>
  );
};
