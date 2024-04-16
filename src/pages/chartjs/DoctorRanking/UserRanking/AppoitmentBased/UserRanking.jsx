import React, { useEffect, useState } from "react";
import axios from "axios";
import BarChartB from "../../../component/Bar/BarChartB";

function UserRanking() {
  const [appointmentServed, setAppointmentServed] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("api/admin/analytics/userRanking");

        setAppointmentServed(response.data.userAppointments);
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
    <div className=" bg-black">
      <BarChartB
        userData={appointmentServed}
        ylabel="totalAppointments"
        xlabel="_id"
        xxlabel="rank"
      />
    </div>
  );
}

export default UserRanking;
