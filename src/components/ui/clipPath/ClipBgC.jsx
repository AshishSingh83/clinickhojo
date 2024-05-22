import React from "react";
import "./ClipBgC.css";

function ClipBgC({
  width = "w-[360px]",
  height = "h-[70px]",
  bg = "bg-[#0032FF]",
  bardervar = "54px",
  text = "Approve/Reject User",
  textColor = "text-white",
  textSize = "text-medium",
  mt = "mt-0",
}) {
  const customStyle = {
    borderRadius: ` ${bardervar} ${bardervar} 0 0`,
  };

  return (
    <div
      className={`okay flex justify-center items-center text-[13px] font-medium text-white  md:w-[250px] h-[64px] bg-[#0032FF] text-opacity-85`}
      style={{ borderRadius: "44px 44px 0 0" }}
    >
      <div className=" flex flex-col">
        <p className=" ms-2">Shamyani health services Pvt Ltd </p>
        <p>An ISO 9001:2015 certified company</p>
      </div>
    </div>
  );
}

export default ClipBgC;
