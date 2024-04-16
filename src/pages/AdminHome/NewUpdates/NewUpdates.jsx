import React from "react";
import { updateConstant } from "./updateConstant";

const NewUpdates = () => {
  return (
    <div style={{  overflow: "scroll" }} className="bg-[#D9D9D9]">
      <div className="bg-[#E2FCF6] mt-[-12px] rounded-md">
        <h2 className="text-xl text-black font-medium p-3 m-3 font-sans ms-12">Recent Updates :</h2>
      </div>
      {updateConstant.map((update, index) => (
        <div
          key={index}
          className=" p-4 mb-4 bg-[#EDF4EB]"
          style={{ maxWidth: "300px" }}
        >
          <p className="text-black font-medium text-lg ">
            <span className=" mr-2">{index + 1}.</span>
            {update.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NewUpdates;
