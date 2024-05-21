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

function BarChartD({ newData }) {
  const maleData = newData.map((entry) => entry.totalMaleAppointments);
  const femaleData = newData.map((entry) => entry.totalFemaleAppointments);

  const LineChartData = {
    labels: Array(newData.length).fill(""),
    datasets: [
      {
        label: "Male",
        data: maleData,
        backgroundColor: "rgb(75, 192, 200)",
        borderWidth: 0.2,
      },
      {
        label: "Female",
        data: femaleData,
        backgroundColor: "rgb(75, 192, 500)",
        borderWidth: 0.2,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || "";
            if (label) {
              return `${label}: ${context.parsed.y}`;
            }
            return null;
          },
          afterLabel: function (context) {
            return `Doctor ID: ${newData[context.dataIndex].uniqueDoctorId}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Male-Female",
          color: "black",
          font: {
            size: 20,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Appointments Booked",
          color: "black",
          font: {
            size: 20,
          },
        },
      },
    },
  };

  return (
    <div className="bg-white">
      <div className="w-[960px] h-[540px]">
        <Bar data={LineChartData} options={options} />
      </div>
      <div className=" mt-[-50px]">
        <p className="text-xl text-black ms-12">
          RANKING of doctor on the basis of patient gender
        </p>
      </div>
    </div>
  );
}

export default BarChartD;
