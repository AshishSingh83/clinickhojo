import React from "react";
import { FiLogOut } from "react-icons/fi";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Lists from "./Lists/Lists.jsx";
import NewUpdates from "./NewUpdates/NewUpdates.jsx";
import "./AdminHome.css";
import ClipBgB from "../../components/ui/clipPath/ClipBgB.jsx";
function AdminHome() {
  const mydata = {
    index: 0,
  };
  return (
    <div className="flex flex-row justify-between h-screen w-screen bg-[#0529BB] ">
      <div className=" bg-[#D9D9D9] flex flex-col justify-between">
        <div className="me-7">
          <Sidebar someData={mydata} />
        </div>
        <div>
          <FiLogOut
            className="ms-8"
            style={{ color: "#061ba1", fontSize: "40px" }}
          />
        </div>
      </div>

      <div className="flex flex-row ">
        <div className=" flex flex-col me-60 ">
          <ClipBgB
            width="w-[200px]"
            height="h-[65px]"
            bardervar="24px"
            text="Home"
          />
          <div className=" mt-[-40px]  ">
            <Lists />
          </div>
        </div>

        <NewUpdates />
      </div>
    </div>
  );
}

export default AdminHome;
