import React, { useState, useEffect } from "react";
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
import Spinner from "../../../../components/ui/clipPath/Spinner";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChartB({ userData, ylabel, xlabel, xxlabel, title }) {
  const [loading, setLoading] = useState(true);
  const [barChartData, setBarChartData] = useState(null);

  useEffect(() => {
    const processUserData = async () => {
      const chartData = userData.map((user) => ({
        label: ` ${user[xxlabel]}`,
        data: user[ylabel],
        userID: user[xlabel],
      }));

      const data = {
        labels: chartData.map((dataPoint) => dataPoint.label),
        datasets: [
          {
            label: "Total Appointments",
            data: chartData.map((dataPoint) => dataPoint.data),
            backgroundColor: "rgba(255, 9, 132, 1)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            userID: chartData.map((dataPoint) => dataPoint.userID),
          },
        ],
      };

      setBarChartData(data);
      setLoading(false);
    };

    setLoading(true);
    processUserData();
  }, [userData, ylabel, xlabel, xxlabel, title]);

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            if (barChartData) {
              const dataset = barChartData.datasets[context.datasetIndex];
              if (dataset) {
                const userID = dataset.userID[context.dataIndex];
                return `ID: ${userID}`;
              }
            }
            return '';
          },
        },
      },
      legend: {
        position: "top",
        labels: {
          color: "black",
          font: {
            size: 14,
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
          color: "black",
          font: {
            size: 16,
          },
        },
        ticks: {
          color: "black",
        },
        grid: {
          color: "#808a9c",
        },
      },
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: `${title}`,
          color: "black",
          font: {
            size: 16,
          },
        },
        ticks: {
          color: "black",
        },
        grid: {
          color: "#808a9c",
        },
      },
    },
  };

  return (
    <div className="w-full md:max-w-[960px] mx-auto">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-blue-600 bg-opacity-70">
          <div className="">
            <Spinner
              height="h-[80px]"
              width="w-[80px]"
              fontSize="text-[1rem]"
            />
          </div>
        </div>
      ) : (
        <div className="w-full h-full md:h-[540px] bg-white">
          <Bar data={barChartData} options={options} />
        </div>
      )}
    </div>
  );
}

export default BarChartB;
