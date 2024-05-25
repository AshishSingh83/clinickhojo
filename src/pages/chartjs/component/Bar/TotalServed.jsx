import React, { useEffect, useState } from "react";
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
function TotalServed({userData}) {
  const [barChartData, setBarChartData] = useState({
    labels: ["Normal", "Emergency"],
    datasets: [],
  });
  const [pending, setPending] = useState(true);
  const appointmentData = {
    totalAppointments: 10,
    allAppointments: [
      {
        patient: {
          name: "Alicsdxvcxvvdve",
          age: 31,
          gender: "male",
          mobileNumber: "243",
        },
        _id: "6617afd3e73807f8ccf15af2",
        type: "emergency",
        doctor: "661398a2ec3fcffe5c052da7",
        block: "Asdfdf",
        timing: "2024-04-05T10:00:00.000Z",
        arrived: true,
        createdBy: "1237767890",
        isAccepted: false,
        appointmentUniqueId: "57345644",
        expiresAt: "2024-04-12T09:39:31.269Z",
        createdAt: "2024-04-11T09:39:31.269Z",
        __v: 0,
      },
      {
        patient: {
          name: "Alicsdxvcxvvdve",
          age: 31,
          gender: "male",
          mobileNumber: "243",
        },
        _id: "6617b024e73807f8ccf15aff",
        type: "normal",
        doctor: "661398a2ec3fcffe5c052da7",
        block: "Asdfdf",
        timing: "2024-04-05T10:00:00.000Z",
        arrived: true,
        createdBy: "243",
        isAccepted: true,
        appointmentUniqueId: "04075609",
        createdAt: "2024-04-11T09:40:52.791Z",
        __v: 0,
      },
      {
        patient: {
          name: "Alicsdxvcxvvdve",
          age: 31,
          gender: "male",
          mobileNumber: "243",
        },
        _id: "6617b166884f3ed8ffb384da",
        type: "normal",
        doctor: "661398a2ec3fcffe5c052da7",
        block: "Asdfdf",
        timing: "2024-04-05T10:00:00.000Z",
        arrived: false,
        createdBy: "243",
        isAccepted: false,
        appointmentUniqueId: "06493805",
        createdAt: "2024-04-11T09:46:14.361Z",
        __v: 0,
      },
      {
        patient: {
          name: "Alicsdxvcxvvdve",
          age: 31,
          gender: "male",
          mobileNumber: "243",
        },
        _id: "66190e32c71f9ceced24d1af",
        type: "normal",
        doctor: "661398a2ec3fcffe5c052da7",
        block: "Asdfdf",
        timing: "2024-04-05T10:00:00.000Z",
        arrived: true,
        createdBy: "243",
        isAccepted: true,
        appointmentUniqueId: "90653569",
        createdAt: "2024-04-12T10:34:26.020Z",
        __v: 0,
      },
      {
        patient: {
          name: "Alicsdxvcxvvdve",
          age: 31,
          gender: "male",
          mobileNumber: "243",
        },
        _id: "661970d7a32c7cf15f163b0b",
        type: "normal",
        doctor: "66196a579e044b0dba29a740",
        block: "Asdfdf",
        timing: "2024-04-05T10:00:00.000Z",
        arrived: true,
        createdBy: "243",
        isAccepted: false,
        appointmentUniqueId: "14503563",
        createdAt: "2024-04-12T17:35:19.621Z",
        __v: 0,
      },
      {
        patient: {
          name: "Alicsdxvcxvvdve",
          age: 31,
          gender: "male",
          mobileNumber: "243",
        },
        _id: "661970daa32c7cf15f163b10",
        type: "normal",
        doctor: "66196a579e044b0dba29a740",
        block: "Asdfdf",
        timing: "2024-04-05T10:00:00.000Z",
        arrived: false,
        createdBy: "243",
        isAccepted: false,
        appointmentUniqueId: "96561214",
        createdAt: "2024-04-12T17:35:22.574Z",
        __v: 0,
      },
    ],
  };

  const calculateAppointmentData = async (data) => {
    const appointmentCounts = {
      emergency: { total: 0, arrived: 0, accepted: 0 },
      normal: { total: 0, arrived: 0, accepted: 0 },
    };

    await data.forEach((appointment) => {
      const type = appointment.type;
      appointmentCounts[type].total += 1;
      if (appointment.arrived) {
        appointmentCounts[type].arrived += 1;
      }
      if (appointment.isAccepted) {
        appointmentCounts[type].accepted += 1;
      }
    });
    setPending(false);
    return appointmentCounts;
  };
  useEffect(() => {
    const fetchAppointmentData = async () => {
      try {
        const appointmentCounts = await calculateAppointmentData(
          userData
        );
        const normalData = [
          appointmentCounts.normal.total,
          appointmentCounts.normal.arrived,
          appointmentCounts.normal.accepted,
        ];

        const emergencyData = [
          appointmentCounts.emergency.total,
          appointmentCounts.emergency.arrived,
          appointmentCounts.emergency.accepted,
        ];

        const chartData = {
          labels: ["Normal Appoitments", "Emergency Appoitments"],
          datasets: [
            {
              label: "Total",
              data: [normalData[0], emergencyData[0]],
              backgroundColor: ["rgba(355, 9, 132, 1)", "rgba(355, 9, 132, 1)"],
              borderColor: ["rgba(75, 192, 192, 1)", "rgba(100, 99, 132, 1)"],
              borderWidth: 1,
            },
            {
              label: "Arrived",
              data: [normalData[1], emergencyData[1]],
              backgroundColor: ["rgba(255, 30, 86, 1)", "rgba(255, 30, 86, 1)"],
              borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 206, 86, 1)"],
              borderWidth: 1,
            },
            {
              label: "Accepted",
              data: [normalData[2], emergencyData[2]],
              backgroundColor: ["rgba(75, 12, 192, 1)", "rgba(75, 12, 192, 1)"],
              borderColor: ["rgba(75, 192, 192, 1)", "rgba(75, 192, 192, 1)"],
              borderWidth: 1,
            },
          ],
        };
        setBarChartData(chartData);
      } catch (error) {
        console.error("Error fetching appointment data:", error);
      }
    };

    fetchAppointmentData();
  }, []);

  const options = {
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
        title: {
          display: true,
          text: "Categories",
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
      tooltip: {
        callbacks: {
          label: function (context) {
            const dataset = context.dataset;
            const index = context.dataIndex;
            const label = context.label;
            return `${dataset.label} ${label}: ${dataset.data[index]}`;
          },
        },
      },
    },
  };

  return (
    <div className=" w-full">
      {pending ? (
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
        <div className="w-full md:max-w-[960px] mx-auto ">
          <div className="w-full h-full md:h-[540px] bg-white">
            <Bar data={barChartData} options={options} />
          </div>
        </div>
      )}
    </div>
  );
}

export default TotalServed;
