import React, { useMemo } from "react";
import Spinner from "../../../components/ui/clipPath/Spinner";

const Appoiment = ({ dataa = { appointments: [] }, loading }) => {
  const memoizedAppointments = useMemo(() => {
    return dataa.appointments.map((update, index) => (
      <div
        key={index}
        className={`p-4 mb-4 ${
          update.emergency === "true" ? "bg-[#E7ECFF]" : "bg-[#E7ECFF]"
        } flex flex-row justify-between ml-5 rounded-xl`}
        style={{ maxWidth: "480px" }}
      >
        <div className="text-black font-medium">
          <div className="flex flex-row text-xl">
            <p className="text-xl">{index + 1}. Name: </p>
            <p>{update.patient.name}</p>
          </div>
          <div className="opacity-75">
            <div className="flex flex-row font-medium mt-1">
              <p>Age: {update.patient.age}</p>
              <span>Gender: {update.patient.gender}</span>
              <span>Location: Bhopal</span>
            </div>
            <div className="flex flex-row font-medium mt-1">
              <p>Appointment Booked On: {update.timing}</p>
            </div>

            {update.BookedOn}
          </div>
        </div>
        {update.type === "emergency" && (
          <span
            className="inline-block rounded-md cursor-pointer h-9 px-4 py-1 text-sm text-white mt-5 pt-2"
            style={{ backgroundColor: "red" }}
          >
            Emergency
          </span>
        )}
      </div>
    ));
  }, [dataa.appointments]);

  return (
    <div
      style={{ backgroundColor: "#03229F", width: "530px", height: "470px" }}
    >
      <div className="h-14 flex items-center bg-[#FFFFFF] text-[#FA0808] text-2xl justify-center font-medium">
        <h3>Appointments Booked:</h3>
      </div>
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <div className="mb-14">
            <Spinner
              height="h-[70px]"
              width="w-[70px]"
              fontSize="text-[.9rem]"
            />
          </div>
        </div>
      ) : (
        <div style={{ overflow: "auto", maxHeight: "400px" }} className="mt-4">
          {memoizedAppointments.length === 0 ? (
            <div className="flex items-center justify-center h-full ">
              <p className="text-white text-2xl mt-40">No data available</p>
            </div>
          ) : (
            memoizedAppointments
          )}
        </div>
      )}
    </div>
  );
};

export default Appoiment;
