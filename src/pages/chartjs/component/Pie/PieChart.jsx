import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const LineChartData = {
    labels: ["a", "b", "c", "d", "e", "f"],
    datasets: [
      {
        label: "Time Spent",
        data: [3, 4, 5, 6, 88, 99],
        backgroundColor: [
          "rgb(250, 99, 132)",
          "rgb(300, 99, 132)",
          "rgb(350, 99, 132)",
          "rgb(255, 99, 100)",
          "rgb(255, 99, 232)",
          "rgb(255, 99, 432)",
        ],
        hoverOffset: 15,
      },
    ],
  };

  const options = {};

  return (
    <div className=" bg-white w-[500px] h-[300px]">
      <div className=" p-5  ">
        <Pie data={LineChartData} options={options} />
      </div>
    </div>
  );
}

export default PieChart;
