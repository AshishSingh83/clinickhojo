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

function BarChartC() {
  var newData = {
    "0-12": {
      male: 12,
      female: 6,
      kid: 0,
      total: 18,
      undefined: null,
    },
    "13-18": {
      male: 1,
      female: 4,
      kid: 0,
      total: 5,
    },
    "19-30": {
      male: 5,
      female: 4,
      kid: 0,
      total: 9,
    },
    "31-45": {
      male: 10,
      female: 10,
      kid: 0,
      total: 20,
    },
    "46-60": {
      male: 60,
      female: 20,
      kid: 0,
      total: 80,
    },
    "61+": {
      male: 30,
      female: 70,
      kid: 0,
      total: 100,
    },
  };
  const ageRanges = Object.keys(newData);
  const maleData = ageRanges.map((range) => newData[range].male);
  const femaleData = ageRanges.map((range) => newData[range].female);
  const LineChartData = {
    labels: ageRanges,
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
    scales: {
      x: {
        title: {
          display: true,
          text: "Age Between",
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
    <div className=" bg-white">
      <div className="   w-[980px] h-[580px] ">
        <Bar data={LineChartData} options={options} />
      </div>
      <div>
        <p className="text-xl text-black ms-24">
          Agewise total appoitment booked
        </p>
      </div>
    </div>
  );
}

export default BarChartC;
