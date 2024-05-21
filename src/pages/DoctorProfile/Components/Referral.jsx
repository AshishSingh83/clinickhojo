import React, { useMemo } from "react";
import { Appoitmentconst } from "./Appoitmentconst.js";

const Referral = () => {
  const appointments = useMemo(() => Appoitmentconst, []);
  const compo = () => {
    return appointments.map((update, index) => (
      <div
        key={index}
        className={`p-4 mb-4 bg-blue-100 flex flex-row justify-between ml-5 `}
        style={{ maxWidth: "420px" }}
      >
        <div className=" flex flex-row gap-16  text-black">
          <p className=" font-medium ">{index + 1}. +91XXXXXXXXXX </p>
          <p className=" font-medium   ">Sent On : 04/04/2023 </p>
        </div>
      </div>
    ));
  };
  return (
    <div
      style={{ backgroundColor: "#494D5F", width: "480px", height: "470px" }}
    >
      <div className="bg-[#845BB3] mt-[-12px] rounded-md">
        <h2 className="text-xl  p-1 m-1 ml-5  font-medium">Referrals Sent :</h2>
      </div>
      <div style={{ overflow: "auto", maxHeight: "400px" }} className=" mt-4">
        {compo()}
      </div>
    </div>
  );
};

export default Referral;
