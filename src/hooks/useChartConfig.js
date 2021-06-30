import { useEffect, useState, useContext } from "react";
// context
import { SocketContext } from "context/SocketContext";

export const useChartConfig = () => {
  const { socket } = useContext(SocketContext);
  const [bandList, setBandList] = useState([]);
  const [data, setData] = useState({
    bandNames: [],
    bandVotes: [],
  });

  useEffect(() => {
    socket.on("current-bands", (bands) => {
      setBandList(bands);
    });
  }, [socket]);

  useEffect(() => {
    let names = [];
    let votes = [];
    bandList.map((band) => {
      names.push(band.name);
      votes.push(band.votes);
    });
    setData({
      bandNames: names,
      bandVotes: votes,
    });
  }, [bandList]);

  const options = {
    chart: {
      id: "votes-chart",
    },
    xaxis: {
      categories: data.bandNames,
    },
  };

  const series = [
    {
      name: "series-1",
      data: data.bandVotes,
    },
  ];

  const pieSeries = data.bandVotes;
  const pieOptions = {
    labels: data.bandNames,
  };
  return {
    options,
    series,
    pieSeries,
    pieOptions,
  };
};
