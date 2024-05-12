import React from "react";
import { FiLogOut } from "react-icons/fi";
import SubAdminProfile from "./Components/SubAdminProfile";
import Sidebar from "../AdminHome/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
function SubAdminMainProfile() {
  const navigate = useNavigate();
  const mydata = {
    index:1 ,
  }
  const handleMe = ()=>{
    navigate("../CreateSubAdmin");
  };
  return (
    <div className="flex flex-row justify-between h-screen w-screen bg-[#0529BB]">
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

      <div className="flex flex-col me-56 gap-16 mt-12 ">
        <div className="   flex flex-row justify-between">
          <div className="bg-[#FF0B0B] h-12 w-48  ms-[200px]  ">
            <p className="text-white mt-3 ms-7 mb-3 ">User Management</p>
          </div>
          <div
            className=" h-12 px-7 rounded-3xl cursor-pointer  text-sm   text-white bg-[#229649] flex items-center text-opacity-75 me-20
          "
            onClick={handleMe}
          >
            Create Additional User Profile
          </div>
        </div>



        <div className=" me-16 bg-[#0529BB]">
          <SubAdminProfile />
        </div>



      </div>
    </div>
  );
}
export default SubAdminMainProfile;
