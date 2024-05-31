
import React from "react";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Lists from "./Lists/Lists.jsx";
import NewUpdates from "./NewUpdates/NewUpdates.jsx";
import ClipBgB from "../../components/ui/clipPath/ClipBgB.jsx";

function AdminHome() {
  const mydata = {
    index: 0,
  };

  return (
    <div className="flex flex-col w-screen md:flex-row h-screen bg-[#0529BB]">
     
      <div className=" md:w-1/5">
        <div className="me-7">
          <Sidebar someData={mydata} />
        </div>
      </div>
      <div className="md:w-3/4 flex flex-col gap-8 md:ms-20 ">
        <div className="flex flex-col md:flex-row md:justify-around md:gap-8">
          <div className="flex flex-col">
          <div className=" flex justify-center md:justify-normal mb-5 md:mb-0">
          <ClipBgB
              width="w-[200px]"
              height="h-[65px]"
              bardervar="24px"
              text="Home"
            />
          </div>
           
            <div className="mt-[-40px] flex justify-center items-center">
              <Lists />
            </div>
          </div>
          <div className=" justify-center items-center flex mt-5 md:mt-0 ms-auto">
          <NewUpdates />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
