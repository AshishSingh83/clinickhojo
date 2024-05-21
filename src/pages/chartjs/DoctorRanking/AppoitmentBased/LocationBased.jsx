import React, { useEffect, useState } from "react";
import BarChartB from "../../component/Bar/BarChartB";
import instance from "../../../../axios";

function LocationBased() {
  const [appointmentServed, setAppointmentServed] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get(
          "api/admin/analytics/appointments/locationWise"
        );
        setAppointmentServed(response.data.appointmentsByLocation);
        setLoading(false);
        console.log(response.data.appointmentsByLocation);
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
        xxlabel="_id"
      />
    </div>
  );
}

export default LocationBased;
