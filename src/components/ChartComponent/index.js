import React from "react";
import Chart from "react-apexcharts";
import { useChartConfig } from "hooks/useChartConfig";
// styles
import { Container, ChartContainer } from "./styles";

export const ChartComponent = () => {
  const { config } = useChartConfig();

  const width = window.innerWidth;
  let size;

  if (width > 1200) {
    size = width / 4;
  } else if (width > 800) {
    size = width / 3;
  } else if (width > 600) {
    size = width / 2;
  } else {
    size = width;
  }

  return (
    <Container>
      <ChartContainer>
        <Chart
          options={config.barOptions}
          series={config.barSeries}
          type="bar"
          width={size}
          height={size}
        />
      </ChartContainer>
      <ChartContainer>
        <Chart
          style={{ color: "gray" }}
          options={config.pieOptions}
          series={config.pieSeries}
          type="donut"
          width={size}
          height={size}
        />
      </ChartContainer>
    </Container>
  );
};
