import React from "react";
import Chart from "react-apexcharts";
import { useChartConfig } from "hooks/useChartConfig";
// styles
import { Container, ChartContainer } from "./styles";

export const ChartComponent = () => {
  const { config } = useChartConfig();

  return (
    <Container>
      <ChartContainer>
        <Chart
          options={config.barOptions}
          series={config.barSeries}
          type="bar"
          width={300}
          height={300}
        />
      </ChartContainer>
      <ChartContainer>
        <Chart
          style={{ color: "gray" }}
          options={config.pieOptions}
          series={config.pieSeries}
          type="donut"
          width={350}
          height={350}
        />
      </ChartContainer>
    </Container>
  );
};
