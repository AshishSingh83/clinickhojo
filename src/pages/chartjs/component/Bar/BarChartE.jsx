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
const processAndPrepareData = async (appointments) => {
  const doctorData = {};
  await appointments.forEach((appointment) => {
    const { doctor } = appointment;
    if (!doctorData[doctor]) {
      doctorData[doctor] = 0;
    }
    doctorData[doctor] += 1;
  });
  const sortedDoctors = Object.entries(doctorData).sort((a, b) => b[1] - a[1]);
  const labels = sortedDoctors.map((_, index) => `Rank ${index + 1}`);
  const totalAppointments = sortedDoctors.map(([, total]) => total);
  return { labels, totalAppointments, sortedDoctors };
};
const BarChartE = ({userData}) => {
  const appointmentData = {
    totalAppointments: 10,
    allAppointments: [
      {
        patient: {
          name: "Alice",
          age: 31,
          gender: "male",
          mobileNumber: "243",
        },
        _id: "6617afd3e73807f8ccf15af2",
        type: "emergency",
        doctor: "661398a2ec3fcffe5c052da711",
        block: "A",
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
          name: "Alice",
          age: 31,
          gender: "male",
          mobileNumber: "243",
        },
        _id: "6617b024e73807f8ccf15aff",
        type: "normal",
        doctor: "661398a2ec3fcffe5c052da7a",
        block: "A",
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
          name: "Alice",
          age: 31,
          gender: "female",
          mobileNumber: "243",
        },
        _id: "6617b166884f3ed8ffb384da",
        type: "normal",
        doctor: "661398a2ec3fcffe5c052da7a",
        block: "A",
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
          name: "Alice",
          age: 31,
          gender: "female",
          mobileNumber: "243",
        },
        _id: "66190e32c71f9ceced24d1af",
        type: "normal",
        doctor: "661398a2ec3fcffe5c052da7",
        block: "A",
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
          name: "Alice",
          age: 31,
          gender: "male",
          mobileNumber: "243",
        },
        _id: "661970d7a32c7cf15f163b0b",
        type: "normal",
        doctor: "66196a579e044b0dba29a740",
        block: "A",
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
          name: "Alice",
          age: 31,
          gender: "male",
          mobileNumber: "243",
        },
        _id: "661970daa32c7cf15f163b10",
        type: "normal",
        doctor: "66196a579e044b0dba29a740",
        block: "A",
        timing: "2024-04-05T10:00:00.000Z",
        arrived: false,
        createdBy: "243",
        isAccepted: false,
        appointmentUniqueId: "96561214",
        createdAt: "2024-04-12T17:35:22.574Z",
        __v: 0,
      },
      {
        patient: {
          name: "Alice",
          age: 31,
          gender: "female",
          mobileNumber: "243",
        },
        _id: "66190e32c71f9ceced24d1af",
        type: "normal",
        doctor: "661398a2ec3fcffe5c052da7",
        block: "A",
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
          name: "Alice",
          age: 31,
          gender: "male",
          mobileNumber: "243",
        },
        _id: "661970d7a32c7cf15f163b0b",
        type: "normal",
        doctor: "66196a579e044b0dba29a740",
        block: "A",
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
          name: "Alice",
          age: 31,
          gender: "male",
          mobileNumber: "243",
        },
        _id: "661970daa32c7cf15f163b10",
        type: "normal",
        doctor: "66196a579e044b0dba29a740",
        block: "A",
        timing: "2024-04-05T10:00:00.000Z",
        arrived: false,
        createdBy: "243",
        isAccepted: false,
        appointmentUniqueId: "96561214",
        createdAt: "2024-04-12T17:35:22.574Z",
        __v: 0,
      },
      {
        patient: {
          name: "Alice",
          age: 31,
          gender: "female",
          mobileNumber: "243",
        },
        _id: "66190e32c71f9ceced24d1af",
        type: "normal",
        doctor: "661398a2ec3fcffe5c052da7",
        block: "A",
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
          name: "Alice",
          age: 31,
          gender: "male",
          mobileNumber: "243",
        },
        _id: "661970d7a32c7cf15f163b0b",
        type: "normal",
        doctor: "66196a579e044b0dba29a740",
        block: "A",
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
          name: "Alice",
          age: 31,
          gender: "male",
          mobileNumber: "243",
        },
        _id: "661970daa32c7cf15f163b10",
        type: "normal",
        doctor: "66196a579e044b0dba29a740",
        block: "A",
        timing: "2024-04-05T10:00:00.000Z",
        arrived: false,
        createdBy: "243",
        isAccepted: false,
        appointmentUniqueId: "96561214",
        createdAt: "2024-04-12T17:35:22.574Z",
        __v: 0,
      },
      {
        patient: {
          name: "Alice",
          age: 31,
          gender: "female",
          mobileNumber: "243",
        },
        _id: "66190e32c71f9ceced24d1af",
        type: "normal",
        doctor: "661398a2ec3fcffe5c052da7",
        block: "A",
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
          name: "Alice",
          age: 31,
          gender: "male",
          mobileNumber: "243",
        },
        _id: "661970d7a32c7cf15f163b0b",
        type: "normal",
        doctor: "66196a579e044b0dba29a740",
        block: "A",
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
          name: "Alice",
          age: 31,
          gender: "male",
          mobileNumber: "243",
        },
        _id: "661970daa32c7cf15f163b10",
        type: "normal",
        doctor: "66196a579e044b05dba29a740",
        block: "A",
        timing: "2024-04-05T10:00:00.000Z",
        arrived: false,
        createdBy: "243",
        isAccepted: false,
        appointmentUniqueId: "96561214",
        createdAt: "2024-04-12T17:35:22.574Z",
        __v: 0,
      },
      {
        patient: {
          name: "Alice",
          age: 31,
          gender: "female",
          mobileNumber: "243",
        },
        _id: "66190e32c71f9ceced24d1af",
        type: "normal",
        doctor: "661398a2ec3fcffe5c052da75",
        block: "A",
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
          name: "Alice",
          age: 31,
          gender: "male",
          mobileNumber: "243",
        },
        _id: "661970d7a32c7cf15f1563b0b",
        type: "normal",
        doctor: "66196a579e044b0dba29a740",
        block: "A",
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
          name: "Alice",
          age: 31,
          gender: "male",
          mobileNumber: "243",
        },
        _id: "661970daa32c7cf15f163b10",
        type: "normal",
        doctor: "66196a579e044b0dba29a7450",
        block: "A",
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
  const [chartData, setChartData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const { labels, totalAppointments, sortedDoctors } =
        await processAndPrepareData(userData);
      setChartData({
        labels,
        datasets: [
          {
            label: "Total Appointments",
            data: totalAppointments,
            backgroundColor: "rgba(153, 50, 204, 1)",
            borderWidth: 1,
          },
        ],
        sortedDoctors,
      });
    };
    fetchData();
  }, []);

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Doctor's Rank",
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
          label: function (tooltipItem) {
            const datasetLabel = tooltipItem.dataset.label || "";
            const index = tooltipItem.dataIndex;
            const doctorId = chartData.sortedDoctors[index][0];
            const totalAppointments = chartData.sortedDoctors[index][1];
            return `${datasetLabel}: Doctor ID ${doctorId} - Total Appointments: ${totalAppointments}`;
          },
        },
      },
    },
  };
  return (
    <div className=" w-full ">
      {chartData ? (
        <div className="w-full md:max-w-[960px] mx-auto ">
          <div className="w-full h-full md:h-[540px] bg-white">
            <Bar data={chartData} options={options} />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-blue-600 bg-opacity-70">
          <div className="">
            <Spinner
              height="h-[80px]"
              width="w-[80px]"
              fontSize="text-[1rem]"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default BarChartE;
