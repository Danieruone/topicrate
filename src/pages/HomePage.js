import React from "react";
// components
import { BandList } from "components/BandList";
import { ChartComponent } from "components/ChartComponent";
import { AddBand } from "components/AddBand";
// styles
import Styled from "styled-components";

export const Container = Styled.div`
  display: flex;
  justify-content: space-around;
`;

export const HomePage = () => {
  return (
    <div>
      <AddBand />
      <Container>
        <BandList />
        <ChartComponent />
      </Container>
    </div>
  );
};
