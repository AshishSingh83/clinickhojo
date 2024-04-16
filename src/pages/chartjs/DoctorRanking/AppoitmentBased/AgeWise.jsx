import React, { useEffect, useState } from "react";
import axios from "axios";
import BarChartC from "../../component/Bar/BarChartC";

function AgeWise() {
  const [appointmentServed, setAppointmentServed] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "api/admin/analytics/appointments/ageWise"
        );
        setAppointmentServed(response.data.appointmentsByAge);
        setLoading(false);
        console.log(response.data);
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
    <div>
      <BarChartC />
    </div>
  );
}

export default AgeWise;
