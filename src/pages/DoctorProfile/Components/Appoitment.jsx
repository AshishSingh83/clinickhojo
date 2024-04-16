import React, { useEffect, useMemo } from "react";
import { Appoitmentconst } from "./Appoitmentconst.js";
const Appoiment = ({dataa}) => {
  console.log(dataa.appointments);
  const memoizedDemoConstant = useMemo(() => dataa.appointments, []);
  const memoizedAppointments = () => {
    return memoizedDemoConstant.map((update, index) => (
      <div
        key={index}
        className={`p-4 mb-4 ${
          update.emergency === "true" ? "bg-[#f089a4]" : "bg-blue-100"
        } flex flex-row justify-between ml-5 `}
        style={{ maxWidth: "480px" }}
      >
        <p className="text-black font-medium ">
          <span className=" font-medium ">{index + 1}. Name : </span>
          {update.patient.name} <br />
          <div className=" flex flex-row">
            <p className=" font-medium ">Age : {update.patient.age}</p>
            <span className=" font-medium ">Gender : </span>{update.patient.gender}
            <span className=" font-medium ">Location : </span>Bhopal
          </div>
          <span className="font-medium ">Appoitment Booked On : {update.timing} </span>
          {update.BookedOn}
        </p>
        {update.type === "emergency" && (
          <span
            className="inline-block rounded-md cursor-pointer h-9 px-4 py-1  text-sm   text-white mt-5 pt-2"
            style={{ backgroundColor: "red" }}
          >
            Emergency
          </span>
        )}
      </div>
    ));
  };

  return (
    <div
      style={{ backgroundColor: "#494D5F", width: "530px", height: "470px" }}
    >
      <div className="bg-[#845BB3] mt-[-12px] rounded-md">
        <h2 className="text-xl  p-1 m-1 ml-5  font-medium">
          Appoiment Booked :
        </h2>
      </div>
      <div style={{ overflow: "auto", maxHeight: "400px" }} className=" mt-4">
        {memoizedAppointments()}
      </div>
    </div>
  );
};

export default Appoiment;
