import React, { useEffect, useState } from "react";
import BarChartC from "../../component/Bar/BarChartC";
import instance from "../../../../axios";

function AgeWise() {
  const [appointmentServed, setAppointmentServed] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get(
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
