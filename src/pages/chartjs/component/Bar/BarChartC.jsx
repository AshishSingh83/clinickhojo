
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
function BarChartC({userData}) {
  console.log(userData);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
     
      const ageRanges = Object.keys(userData);
      const { maleData, femaleData } = ageRanges.reduce(
        (acc, range) => {
          acc.maleData.push(userData[range].male);
          acc.femaleData.push(userData[range].female);
          return acc;
        },
        { maleData: [], femaleData: [] }
      );

      const LineChartData = {
        labels: ageRanges,
        datasets: [
          {
            label: "Male",
            data: maleData,
            backgroundColor: "rgb(75, 192, 2,1)",
            borderWidth: 0.2,
          },
          {
            label: "Female",
            data: femaleData,
            backgroundColor: "rgb(7, 92, 500,1)",
            borderWidth: 0.2,
          },
        ],
      };

      setChartData(LineChartData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Age Between",
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
      y: {
        title: {
          display: true,
          text: "Appointments Booked",
          color: "black",
          font: {
            size: 20,
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
    plugins: {
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
  };

  return (
    <div className="w-full md:max-w-[960px] mx-auto">
      <div className="w-full h-full md:h-[540px] bg-white">
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
          <Bar data={chartData} options={options} />
        )}
      </div>
    </div>
  );
}
export default BarChartC;