import React from "react";
import { FiLogOut } from "react-icons/fi";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Lists from "./Lists/Lists.jsx";
import NewUpdates from "./NewUpdates/NewUpdates.jsx";

function AdminHome() {
  return (
    <div
      className="flex flex-row justify-between h-screen w-screen bg-[#FFFCFC] "
      
    >
      <div
        className=" bg-[#D9D9D9] flex flex-col justify-between"
      >
        <div className="me-7">
          <Sidebar />
        </div>
        <div>
          <FiLogOut
            className="ms-8"
            style={{ color: "#061ba1", fontSize: "40px" }}
          />
        </div>
      </div>

      <div className="flex flex-row gap-80">
      <div className=" flex flex-col">

         <div className=" bg-[#D9D9D9] h-12 w-52 ms-[-200px] mt-5">
         <p className=" text-black mt-3 ms-16 font-serif ">Home</p>
         </div>

         <div className=" mt-[-40px]">
         <Lists />
         </div>
         
      </div>

        <NewUpdates />
      </div>
    </div>
  );
}

export default AdminHome;
