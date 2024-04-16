import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChartB({ userAppointments }) {
  const labels = userAppointments.map(
    (appointment) => `ID: ${appointment._id} (Rank ${appointment.rank})`
  );
  const data = userAppointments.map(
    (appointment) => appointment.totalAppointments
  );

  const pieChartData = {
    labels: labels,
    datasets: [
      {
        label: "Number of Appointments",
        data: data,
        backgroundColor: [
          "rgb(250, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
        ],
        hoverOffset: 15,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="bg-white w-[400px] h-[200px]">
      <div className="p-5">
        <Pie data={pieChartData} options={options} />
      </div>
      <div className="p-">
        <p className="text-xl text-black ms-12">
          Total appointment booked gender wise
        </p>
      </div>
    </div>
  );
}

export default PieChartB;
