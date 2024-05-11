import React from "react";
import { FiLogOut } from "react-icons/fi";
import Sidebar from "../AdminHome/Sidebar/Sidebar";
import BasicDetail from "./Components/Cards/BasicDetail";
import UserActivity from "./Components/Cards/UserActivity";
import { useSelector } from "react-redux";
function SubAdminEdit() {
  const update = useSelector((state) => state.register.subAdminData);
  return (
    <div className="flex flex-row justify-between  min-h-screen w-screen bg-white">
      <div className="flex flex-col justify-between bg-[#c2c0bc]">
        <div className="me-7">
          <Sidebar someData={{'index':1}}/>
        </div>
        <div>
          <FiLogOut
            className="ms-8"
            style={{ color: "#061ba1", fontSize: "40px" }}
          />
        </div>
      </div>
      <div className=" flex flex-col ">
        <div className=" flex flex-row ms-14 mt-5 gap-64">
          <div className="bg-[#FF0B0B] h-14 w-48 mt-3 ms-[-100px] ">
            <p className="text-white mt-4 ms-7 ">User Management</p>
          </div>
        </div>

        <div className="flex flex-row gap-32 mt-28">
          <div>
            <BasicDetail data={update} />
          </div>
          <div className=" me-36">
            {update.userActivity ? (
              <UserActivity UserActivities={update.userActivity} />
            ) : (
              <div className=" text-black  mt-20 h-11 w-28">not found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubAdminEdit;
