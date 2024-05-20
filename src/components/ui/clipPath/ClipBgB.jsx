import React from "react";
import "./ClipBgB.css";

function ClipBgB({
  width = "w-[360px]",
  height = "h-[70px]",
  bg = "bg-[#FF0B0B]",
  bardervar = "40px",
  text = "Approve/Reject User",
  textColor = "text-white",
  textSize = "text-3xl",
  mt = "mt-0",
}) {
  const customStyle = {
    borderRadius: `0 0 ${bardervar} ${bardervar}`,
  };

  return (
    <div
      className={`custom-button flex justify-center items-center ${mt}  ${textSize} font-medium ${textColor} ${width} ${height} ${bg}`}
      style={customStyle}
    >
      {text}
    </div>
  );
}

export default ClipBgB;
