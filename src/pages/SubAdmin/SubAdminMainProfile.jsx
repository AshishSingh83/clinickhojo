import React from "react";
import { FiLogOut } from "react-icons/fi";
import SubAdminProfile from "./Components/SubAdminProfile";
import Sidebar from "../AdminHome/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
function SubAdminMainProfile() {
  const navigate = useNavigate();
  const handleMe = ()=>{
    navigate("../CreateSubAdmin");
  };
  return (
    <div className="flex flex-row justify-between h-screen w-screen bg-white">
      <div className="flex flex-col justify-between bg-[#c2c0bc]">
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

      <div className="flex flex-col me-56 gap-16 mt-12 ">
        <div className="   flex flex-row justify-between">
          <div className="bg-[#D9D9D9] h-14 w-48 mt-3 ms-[-220px] ">
            <p className="text-black mt-4 ms-7 ">User Management</p>
          </div>

          <div
            className="  rounded-md cursor-pointer px-7 py-1  text-sm   text-white mt-5 pt-4 pb-3 bg-blue-600
          "
            onClick={handleMe}
          >
            Create Additional User Profile
          </div>
        </div>
        <div className=" me-16">
          <SubAdminProfile />
        </div>
      </div>
    </div>
  );
}
export default SubAdminMainProfile;
