import React from "react";
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
    <div className="flex flex-row xl:justify-around 2xl:justify-center  h-screen w-screen bg-[#0529BB]">
      <div className="flex flex-col justify-between ">
        <div className="">
          <Sidebar someData={{ index: 1 }} />
        </div>
      </div>
      <div className="flex flex-col  gap-16 ms-0 2xl:ms-16  ">
        <div className="   flex flex-row justify-between ">
          <div className=" flex justify-center md:justify-normal mb-5 md:mb-0 ">
            <ClipBgB
              width="w-[300px]"
              height="h-[60px]"
              bardervar="32px"
              text="User Management"
            />
          </div>

          <div
            className=" h-12 px-7 flex justify-center items-center rounded-3xl cursor-pointer  text-sm   text-white bg-[#229649] text-center  text-opacity-75 mx-10 md:mx-0 md:me-20 mt-12
          "
            onClick={handleMe}
          >
            Create Additional User Profile
          </div>
        </div>
        <div className="    bg-[#0529BB]">
          <SubAdminProfile />
        </div>
      </div>
    </div>
  );
}
export default SubAdminMainProfile;