import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart() {
  const LineChartData = {
    labels: ["a", "b", "c", "d", "e", "f"],
    datasets: [
      {
        label: "steps",
        data: [3, 4, 5, 6, 88, 99],
        borderColor: "rgb(255, 99, 132)",
      },
      {
        label: "another dataset",
        data: [5, 6, 7, 8, 9, 10],
        borderColor: "rgb(54, 162, 235)",
      },
      {
        label: "yet another dataset",
        data: [10, 20, 30, 40, 50, 60],
        borderColor: "rgb(255, 205, 86)",
      },
      {
        label: "one more dataset",
        data: [60, 50, 40, 30, 20, 10],
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  };

  const options = {};

  return (
    <div className=" bg-white w-[500px] h-[300px]">
      <div className=" p-5  ">
        <Line data={LineChartData} options={options} />
      </div>
    </div>
  );
}

export default LineChart;
