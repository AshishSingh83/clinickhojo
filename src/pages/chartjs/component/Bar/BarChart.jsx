import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({ userData }) {
  const chartData = {
    labels: Object.keys(userData),
    datasets: [
      {
        label: "Male",
        data: Object.values(userData).map((ageGroupData) => ageGroupData.male),
        backgroundColor: "rgba(75, 192, 200, 0.2)",
        borderColor: "rgba(75, 192, 200, 1)",
        borderWidth: 1,
      },
      {
        label: "Female",
        data: Object.values(userData).map(
          (ageGroupData) => ageGroupData.female
        ),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white w-[500px] h-[300px]">
      <div className="p-5">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}

export default BarChart;
