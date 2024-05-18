import React from "react";
import { FiLogOut } from "react-icons/fi";
import SubAdminProfile from "./Components/SubAdminProfile";
import Sidebar from "../AdminHome/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import ClipBgB from "../../components/ui/clipPath/ClipBgB";
function SubAdminMainProfile() {
  const navigate = useNavigate();
  const mydata = {
    index: 1,
  };
  const handleMe = () => {
    navigate("../CreateSubAdmin");
  };
  return (
    <div className="flex flex-row justify-between h-screen w-screen bg-[#0529BB]">
      <div className="flex flex-col justify-between bg-[#c2c0bc]">
        <div className="">
          <Sidebar someData={{ index: 1 }} />
        </div>
        <div>
          <FiLogOut
            className="ms-8"
            style={{ color: "#061ba1", fontSize: "40px" }}
          />
        </div>
      </div>

      <div className="flex flex-col  gap-16  ">
        <div className="   flex flex-row justify-between ">
          <div className=" h-12 w-48  ms-[290px]  ">
            <ClipBgB width='w-[300px]' height='h-[60px]'  bardervar="32px" 
           text="User Management" 
         />
          </div>

          <div
            className=" h-12 px-7 rounded-3xl cursor-pointer  text-sm   text-white bg-[#229649] flex items-center text-opacity-75 me-20 mt-12
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
