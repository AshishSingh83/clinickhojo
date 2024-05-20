import React from "react";
import "./Spinner.css";
function Spinner({
  fontSize = "text-[.7rem]",
  height = "h-[50px]",
  width = "w-[50px]",
  text = "loading",
  bgColor = "bg-slate-400",
}) {
  return (
    <div
      className={`spinner ${width} ${height} bg-opacity-85   ${bgColor} rounded-full ${fontSize}`}
    >
      {text}
      <div className="spinner-sector spinner-sector-red"></div>
      <div className="spinner-sector spinner-sector-blue"></div>
      <div className="spinner-sector spinner-sector-green"></div>
    </div>
  );
}

export default Spinner;
