import React, { useEffect, useState } from "react";
import axios from "axios";
import BarChartB from "../../component/Bar/BarChartB";
import BarChartC from "../../component/Bar/BarChartC";
import PieChartB from "../../component/Pie/PieChartB";
import BarChartD from "../../component/Bar/BarChartD";
import Sidebar from "../../../AdminHome/Sidebar/Sidebar";
import { RiArrowDownSLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import Skeletonn from "../../../../components/ui/SkeletonPage.jsx/Skeletonn";
function AllInOne() {
  const [appointmentServed, setAppointmentServed] = useState([]);
  const [genderAppoitment, setGenderAppoitment] = useState([]);
  const [appointmentServedAge, setAppointmentServedAge] = useState([]);
  const [appointmentServedGender, setAppointmentServedGender] = useState([]);
  const [appointmentServedLocation, setAppointmentServedLocation] = useState(
    []
  );
  const [requireData, setRequireData] = useState([]);
  const [newLoading, setNewLoading] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [appointmentServedUser, setAppointmentServedUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState("");
  const obj = {
    A: "api/admin/analytics/doctorRanking/appointmentsServed",
    B: "",
    C: "api/admin/analytics/userRanking",
    D: "api/admin/analytics/doctorRanking/gender",
    E: "api/admin/analytics/appointments/ageWise",
  };
  useEffect(() => {
    async function fetchData(a, b) {
      console.log("pahle", a, b, loading);
      setLoading(false);
      try {
        const requireData = await axios.get(a);
        console.log("le data require", requireData.data);
        setRequireData(requireData.data[b]);
        setLoading(true);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    }
    if (sortOption == "A") {
      console.log(1);
      fetchData(
        "api/admin/analytics/doctorRanking/appointmentsServed",
        "doctorRankings"
      );
    } else if (sortOption == "B") {
      console.log(2);
      fetchData("");
    } else if (sortOption == "C") {
      console.log(3);
      fetchData("api/admin/analytics/userRanking", "userAppointments");
    } else if (sortOption == "D") {
      console.log(4);
      fetchData(
        "api/admin/analytics/doctorRanking/gender",
        "doctorRankingsByGender"
      );
    } else if (sortOption == "E") {
      console.log(5);
      fetchData(
        "api/admin/analytics/appointments/ageWise",
        "appointmentsByAge"
      );
    } else {
      console.log(6);
      fetchData(
        "api/admin/analytics/doctorRanking/appointmentsServed",
        "doctorRankings"
      );
    }
  }, [sortOption]);

  const filterChange = (e) => {
    setLoading(false);
    setSortOption(e.target.value);
    console.log("Sorting by", e.target.value);
  };

  const renderSelectedComponent = () => {
    console.log("hiiiiiiiiii", sortOption, requireData, loading);
    switch (sortOption) {
      case "A":
        return (
          <BarChartB
            userData={requireData}
            ylabel="totalAppointments"
            xlabel="_id"
            xxlabel="rank"
            title="Doctor ranking on the basis of appointmemnts made"
          />
        );
      case "B":
        return <BarChartC />;
      case "C":
        return (
          <BarChartB
            userData={requireData}
            ylabel="totalAppointments"
            xlabel="_id"
            xxlabel="rank"
            title="user ranking on the basis of appointmemnts made"
          />
        );
      case "D":
        return <BarChartD newData={requireData} />;
      case "E":
        return <BarChartC />;
      default:
        return (
          <BarChartB
            userData={requireData}
            ylabel="totalAppointments"
            xlabel="_id"
            xxlabel="rank"
            title="Doctor ranking on the basis of appointmemnts made"
          />
        );
    }
  };

  // if (loading) {
  //   return (
  //     <div className=" text-black font-serif font-medium text-3xl">
  //       Loading...
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-row  h-screen w-screen gap-48 bg-[#0529BB]">
      <div className=" bg-[#0529BB] flex flex-col justify-between">
        <div className="">
          <Sidebar someData={{ index: 4 }} />
        </div>
        <div>
          <FiLogOut
            className="ms-8"
            style={{ color: "#061ba1", fontSize: "40px" }}
          />
        </div>
      </div>

      <div className=" flex flex-col">
        <div className=" flex items-center ms-20">
          <div className=" bg-[#FF0B0B] h-16 w-60">
            <p className=" text-white mt-4 ms-7 text-2xl  ">
              statics & reports
            </p>
          </div>
        </div>

        <div className="  w-80 ms-16 mt-4 ">
          <div
            style={{ position: "relative", display: "inline-block" }}
            className="p-3"
          >
            <select
              value={sortOption}
              onChange={(e) => filterChange(e)}
              className="p-3 w-[430px] bg-[#E7ECFF] text-[#0529BB] text-lg rounded-lg "
            >
              <option value="A">
                Doctors Ranking based on appointments served
              </option>
              <option value="B">Total Appointments served</option>
              <option value="C">
                Users ranking based on no. of appointments made
              </option>
              <option value="D">No. of appointments based on Gender</option>
              <option value="E">No. of appointments based on AGE</option>
            </select>
          </div>
        </div>
        <div className="bg-blue-600 w-[980px] h-[580px] ms-20">
          {loading ? (
            renderSelectedComponent()
          ) : (
            <div className=" flex  items-center justify-center mt-16  bg-blue-600 opacity-70 ">
              <Skeletonn count="18" width={700} />
            </div>
          )}
        </div>

        {/* <div className="flex flex-row">
          <div className=" mt-24">
            <BarChartC />
          </div>
          <div className=" ms-10">
            <PieChartB
              userAppointments={appointmentServedGender}
              ylabel="totalAppointments"
              xlabel="_id"
              xxlabel="_id"
            />
          </div>
        </div>

        <div className=" flex flex-row mt-24">
          <BarChartD newData={genderAppoitment}/>
          <BarChartB
            userData={appointmentServedLocation}
            ylabel="totalAppointments"
            xlabel="_id"
            xxlabel="_id"
            title="ranking on the basis of location"
          />
        </div>

        <div className=" mt-24 mb-8 flex flex-row">
          <BarChartB
            userData={appointmentServedUser}
            ylabel="totalAppointments"
            xlabel="_id"
            xxlabel="rank"
            title="user ranking on the basis of appointmemnts made"
          />
          <BarChartB
            userData={appointmentServedUser}
            ylabel="totalAppointments"
            xlabel="_id"
            xxlabel="rank"
            title="Doctor ranking on the basis of appointmemnts made"
          />
        </div> */}
      </div>
    </div>
  );
}
{
  /* <Skeletonn 
      count="9" 
      width={800}
    /> */
}
export default AllInOne;
