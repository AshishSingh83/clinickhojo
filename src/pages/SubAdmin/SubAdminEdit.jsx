
import React from "react";
import Sidebar from "../AdminHome/Sidebar/Sidebar";
import BasicDetail from "./Components/Cards/BasicDetail";
import UserActivity from "./Components/Cards/UserActivity";
import { useSelector } from "react-redux";
import ClipBgB from "../../components/ui/clipPath/ClipBgB";

function SubAdminEdit() {
  const update = useSelector((state) => state.register.subAdminData);

  return (
    <div className="flex flex-col md:flex-row justify-normal md:justify-center  min-h-screen w-screen bg-[#0529BB]">
      <div className="flex flex-col justify-between">
        <div className="me-7 ">
          <Sidebar someData={{ index: 1 }} />
        </div>
       
      </div>
      <div className="flex flex-col w-full md:w-auto ms-0 md:ms-16    ">
        <div className="flex justify-center md:justify-normal mb-5 md:mb-0  ">
          <ClipBgB
            width="w-[290px]"
            height="h-[55px]"
            bardervar="32px"
            text="User Management"
          />
        </div>
        <div className="flex flex-col  lg:flex-row gap-0 md:gap-12 mt-8 md:mt-28 justify-center items-center  overflow-auto">
          <div className="flex-1">
            <BasicDetail data={update} />
          </div>
          <div className="flex-1 ">
            {update.userActivity ? (
              <UserActivity UserActivities={update.userActivity} />
            ) : (
              <div className="text-white mt-20 h-11 w-28">not found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubAdminEdit;