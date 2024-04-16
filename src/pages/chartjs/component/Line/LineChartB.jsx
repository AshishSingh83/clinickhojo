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
  const userAppointmentsData = [
    {
      _id: "1234567840",
      totalAppointments: 180,
      rank: 1,
    },
    {
      _id: "243",
      totalAppointments: 160,
      rank: 2,
    },
    {
      _id: "1234567844",
      totalAppointments: 155,
      rank: 3,
    },
    {
      _id: "1234567890",
      totalAppointments: 120,
      rank: 4,
    },
    {
      _id: "1234567890",
      totalAppointments: 110,
      rank: 5,
    },
    {
      _id: "1234567840",
      totalAppointments: 80,
      rank: 6,
    },
    {
      _id: "243",
      totalAppointments: 60,
      rank: 7,
    },
    {
      _id: "1234567844",
      totalAppointments: 50,
      rank: 8,
    },
    {
      _id: "1234567890",
      totalAppointments: 40,
      rank: 9,
    },
    {
      _id: "1234567890",
      totalAppointments: 30,
      rank: 10,
    },
  ];

  const LineChartData = {
    labels: userAppointmentsData.map((item) => `Rank ${item.rank}`),
    datasets: [
      {
        label: "Total Appointments",
        data: userAppointmentsData.map((item) => item.totalAppointments),
        borderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const datasetLabel = context.dataset.label || "";
            if (context.parsed.y !== null) {
              const userId = userAppointmentsData[context.dataIndex]._id;
              return `${datasetLabel}: ${context.parsed.y} (User ID: ${userId})`;
            }
            return "";
          },
        },
      },
    },
  };

  return (
    <div className=" bg-black w-[500px] h-[300px] text-white">
      <div className=" p-5  ">
        <Line data={LineChartData} options={options} />
      </div>
    </div>
  );
}

export default LineChart;
