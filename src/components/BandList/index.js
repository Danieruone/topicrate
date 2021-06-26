import React from "react";
import { Band } from "components/Band";

export const BandList = ({ bandList }) => {
  return (
    <div>
      {bandList.map((band, idx) => {
        return <Band key={idx} {...band} />;
      })}
    </div>
  );
};
