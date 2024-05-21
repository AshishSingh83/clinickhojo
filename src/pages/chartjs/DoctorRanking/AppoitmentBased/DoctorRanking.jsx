import React, { useEffect, useState } from "react";
import BarChartB from "../../component/Bar/BarChartB";
import instance from "../../../../axios";

function DoctorRanking() {
  const [appointmentServed, setAppointmentServed] = useState([]);
  const [genderAppoitment, setGenderAppoitment] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const [pendingResponse, changedResponse] = await Promise.all([
          instance.get("api/admin/analytics/doctorRanking/appointmentsServed"),
          instance.get("api/admin/analytics/doctorRanking/gender"),
        ]);
        setAppointmentServed(pendingResponse.data.doctorRankings);
        setGenderAppoitment(changedResponse.data.doctorRankingsByGender);
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
    <div className=" bg-white">
      <BarChartB
        userData={appointmentServed}
        ylabel="totalPatientsArrived"
        xlabel="uniqueDoctorId"
      />
    </div>
  );
}

export default DoctorRanking;
