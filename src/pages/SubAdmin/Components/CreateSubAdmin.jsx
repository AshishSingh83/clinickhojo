import React, { useEffect, useState } from "react";
import Sidebar from "../../AdminHome/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import CreateSubAdminFormA from "./Cards/CreateSubAdminFormA";
import ClipBgB from "../../../components/ui/clipPath/ClipBgB";
function CreateSubAdmin() {
  const [formData, setFormData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    if (location.state != null) {
      const { data } = location.state;
      setFormData(data);
    }
  }, []);
  return (
    <div className="flex flex-row justify-center xl:justify-around 2xl:justify-center h-screen w-full bg-[#0529BB] ">
      <div>
        <div className="me-7">
          <Sidebar someData={{ index: 1 }} />
        </div>
      </div>

      <div className=" flex flex-col ms-0 2xl:ms-16">
        <div className=" flex flex-row gap-7 md:gap-80">
          <div className=" flex justify-center xl:justify-normal mb-5 md:mb-0">
            <ClipBgB
              width="w-[290px]"
              height="h-[55px]"
              bardervar="32px"
              text="User Management"
            />
          </div>

          <div className="bg-[#229649] h-12 w-64 mt-3 ms-4 md:ms-[-220px] rounded-2xl ">
            <p className="text-black mt-3 ms-7 ">
              Create Additional User Profile
            </p>
          </div>
        </div>

        <div className=" mt-5 ">
          <CreateSubAdminFormA formDataa={formData} />
        </div>
      </div>
    </div>
  );
}

export default CreateSubAdmin;
