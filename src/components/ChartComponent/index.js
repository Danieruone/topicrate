import React from "react";
import Chart from "react-apexcharts";
// styles
import Styled from "styled-components";
import { useChartConfig } from "hooks/useChartConfig";

export const Container = Styled.div`
  width: 63%;
  background-color: #222B45;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  max-height: 500px;
`;

export const ChartComponent = () => {
  const { options, series, pieOptions, pieSeries } = useChartConfig();

  return (
    <Container>
      <Chart
        options={options}
        series={series}
        type="bar"
        width={500}
        height={400}
      />

      <Chart
        options={pieOptions}
        series={pieSeries}
        type="donut"
        width={400}
        height={400}
      />
    </Container>
  );
};
