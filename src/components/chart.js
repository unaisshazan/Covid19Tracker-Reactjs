import React from "react";
import { Doughnut } from "react-chartjs-2";

const Chart = ({ data: { confirmed, recovered, deaths } }) => {
  const data = {
    labels: ["infected", "recovered", "deaths"],
    datasets: [
      {
        data: [confirmed, recovered, deaths],
        backgroundColor: ["#4043ff", "#0fa14c", "#db2c0d"],
        hoverBackgroundColor: ["#4043ff", "#0fa14c", "#db2c0d"],
      },
    ],
  };

  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default Chart;
