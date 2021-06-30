import React from "react";
// components
import { BandList } from "components/BandList";
import { ChartComponent } from "components/ChartComponent";
import { AddBand } from "components/AddBand";
import { ConnectedAlert } from "components/ConnectedAlert";
// styles
import Styled from "styled-components";

export const Container = Styled.div`
  display: grid;
  grid-template-columns: 30% 69%;
  grid-column-gap: 1%;
  @media (max-width: 1200px) {
    grid-template-columns: 100%;
    grid-row-gap: 1%;
  } 
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
