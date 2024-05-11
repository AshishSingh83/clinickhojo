import React, { useEffect, useState } from "react";
import axios from "axios";
import BarChartB from "../../component/Bar/BarChartB";
import BarChartC from "../../component/Bar/BarChartC";
import PieChartB from "../../component/Pie/PieChartB";
import BarChartD from "../../component/Bar/BarChartD";
import Sidebar from "../../../AdminHome/Sidebar/Sidebar";
import { FiLogOut } from "react-icons/fi";
function AllInOne() {
  const [appointmentServed, setAppointmentServed] = useState([]);
  const [genderAppoitment, setGenderAppoitment] = useState([]);
  const [appointmentServedAge, setAppointmentServedAge] = useState([]);
  const [appointmentServedGender, setAppointmentServedGender] = useState([]);
  const [appointmentServedLocation, setAppointmentServedLocation] = useState(
    []
  );
  const [appointmentServedUser, setAppointmentServedUser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const [
          pendingResponse,
          changedResponse,
          agewiseResponse,
          genderwiseResponse,
          locationwiseResponse,
          userwiseResponse,
        ] = await Promise.all([
          axios.get("api/admin/analytics/doctorRanking/appointmentsServed"),
          axios.get("api/admin/analytics/doctorRanking/gender"),
          axios.get("api/admin/analytics/appointments/ageWise"),
          axios.get("api/admin/analytics/appointmentRanking/gender"),
          axios.get("api/admin/analytics/appointments/locationWise"),
          axios.get("api/admin/analytics/userRanking"),
        ]);
        setAppointmentServed(pendingResponse.data.doctorRankings);
        setGenderAppoitment(changedResponse.data.doctorRankingsByGender);

        setAppointmentServedAge(agewiseResponse.data.appointmentsByAge);

        setAppointmentServedGender(
          genderwiseResponse.data.appointmentsRankingsByGender
        );

        setAppointmentServedLocation(
          locationwiseResponse.data.appointmentsByLocation
        );

        setAppointmentServedUser(userwiseResponse.data.userAppointments);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className=" text-black font-serif font-medium text-3xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-row justify-between max-h-[1500px] w-screen">
      <div
        className=" bg-white flex flex-col justify-between"
        style={{ backgroundColor: "#c2c0bc" }}
      >
        <div className="me-7">
          <Sidebar someData={{'index':4}}/>
        </div>
        <div>
          <FiLogOut
            className="ms-8"
            style={{ color: "#061ba1", fontSize: "40px" }}
          />
        </div>
      </div>
      <div className=" me-40">
        <div className="flex flex-row">
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
          <BarChartD newData={genderAppoitment} />
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
        </div>
      </div>
    </div>
  );
}

export default AllInOne;
