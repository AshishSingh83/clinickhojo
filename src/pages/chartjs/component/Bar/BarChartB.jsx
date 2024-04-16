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

function BarChartB({ userData, ylabel, xlabel, xxlabel, title }) {
  const ranks = userData.map((user) => ` ${user[xxlabel]}`);
  const data = userData.map((user) => `${user[ylabel]}`);
  const userIDs = userData.map((user) => user[xlabel]);

  const barChartData = {
    labels: ranks,
    datasets: [
      {
        label: "Total Appointments",
        data: data,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        textColor: "white",
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const index = context.dataIndex;
            return `ID: ${userIDs[index]}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Total Appointments",
        },
      },
    },
  };

  return (
    <div className=" w-[500px] h-[300px] bg-white">
      <div className=" p-5   ">
        <Bar data={barChartData} options={options} />
      </div>
      <div>
        <p className="text-xl text-black ms-24">{title}</p>
      </div>
    </div>
  );
}

export default BarChartB;
