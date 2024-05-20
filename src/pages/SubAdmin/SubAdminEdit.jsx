import React from "react";
import { FiLogOut } from "react-icons/fi";
import Sidebar from "../AdminHome/Sidebar/Sidebar";
import BasicDetail from "./Components/Cards/BasicDetail";
import UserActivity from "./Components/Cards/UserActivity";
import { useSelector } from "react-redux";
import ClipBgB from "../../components/ui/clipPath/ClipBgB";
function SubAdminEdit() {
  const update = useSelector((state) => state.register.subAdminData);
  return (
    <div className="flex flex-row justify-between  min-h-screen w-screen bg-[#0529BB]">
      <div className="flex flex-col justify-between ">
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
        <div className=" flex flex-row ms-14  gap-64">
          {/* <div className="bg-[#FF0B0B] h-14 w-48 mt-3 ms-[-60px] ">
            <p className="text-white mt-4 ms-7 ">User Management</p>
          </div> */}
          <ClipBgB width='w-[290px]' height='h-[55px]'  bardervar="32px" 
           text="User Management" 
         />
        </div>

        <div className="flex flex-row gap-20 mt-28 justify-center items-center">
          <div>
            <BasicDetail data={update} />
          </div>
          <div className=" me-36">
            {update.userActivity ? (
              <UserActivity UserActivities={update.userActivity} />
            ) : (
              <div className=" text-white  mt-20 h-11 w-28">not found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubAdminEdit;
