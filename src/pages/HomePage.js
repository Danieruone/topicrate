import React from "react";
// components
import { BandList } from "components/BandList";
import { ChartComponent } from "components/ChartComponent";
import { AddBand } from "components/AddBand";
import { ConnectedAlert } from "components/ConnectedAlert";
// styles
import Styled from "styled-components";

export const Container = Styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const HomePage = () => {
  return (
    <div>
      <ConnectedAlert />
      <AddBand />
      <Container>
        <BandList />
        <ChartComponent />
      </Container>
    </div>
  );
};
