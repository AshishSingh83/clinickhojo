import React, { useEffect, useState } from "react";
import axios from "axios";
import PieChartB from "../../component/Pie/PieChartB";

function GenderBased() {
  const [appointmentServed, setAppointmentServed] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "api/admin/analytics/appointmentRanking/gender"
        );
        setAppointmentServed(response.data.appointmentsRankingsByGender);
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
      <PieChartB
        userAppointments={appointmentServed}
        ylabel="totalAppointments"
        xlabel="_id"
        xxlabel="_id"
      />
    </div>
  );
}

export default GenderBased;
