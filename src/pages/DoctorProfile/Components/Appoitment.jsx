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
          update.emergency === "true" ? "bg-[#E7ECFF]" : "bg-[#E7ECFF]"
        } flex flex-row justify-between ml-5 rounded-xl `}
        style={{ maxWidth: "480px" }}
      >
        <p className="text-black font-medium ">
        <div className=" flex flex-row text-xl">
        <p className=" text-xl ">{index + 1}. Name : </p>
        <p className="">{update.patient.name}</p>
        </div>
        <div className=" opacity-75">
        <div className=" flex flex-row font-medium mt-1">
            <p >Age : {update.patient.age}</p>
            <span >Gender : </span>{update.patient.gender}
            <span >Location : </span>Bhopal
          </div>
          <div className=" flex flex-row font-medium mt-1 ">
          <p >Appoitment Booked On : {update.timing} </p>
          </div>
          {update.BookedOn}
        </div>
         
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
      style={{ backgroundColor: "#03229F", width: "530px", height: "470px" }}
    >
     
      <div className=" h-14 flex items-center bg-[#FFFFFF] text-[#FA0808] text-2xl justify-center font-medium ">
      <h3 >
      Appoiment Booked :
        </h3>
      </div>
      <div style={{ overflow: "auto", maxHeight: "400px" }} className=" mt-4">
        {memoizedAppointments()}
      </div>
    </div>
  );
};

export default Appoiment;
