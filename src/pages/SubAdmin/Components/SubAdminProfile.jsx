import React, { useEffect, useState, useMemo } from "react";
import Input from "../../../components/ui/Input.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateSubAdminData } from "../../../data/features/registerSlice.js";
import InputWithIcon from "../../../components/ui/InputWithIcon.jsx"
import Skeletonn from "../../../components/ui/SkeletonPage.jsx/Skeletonn.jsx";
import Sidebar from "../../AdminHome/Sidebar/Sidebar.jsx";
import { FiLogOut } from "react-icons/fi";
const SubAdminProfile = () => {
  const [demoConstant, setDemoConstant] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getAllSubAdmins() {
      try {
        const response = await axios.get("api/admin/getAllSubAdmins");
        setDemoConstant(response.data.subAdmins);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching sub admins:", error);
      }
    }
    getAllSubAdmins();
  }, []);
  const memoizedSubAdmins = useMemo(() => {
    return demoConstant
      .filter((item) => {
        return search.toLowerCase() === ""
          ? item
          : item.fullName.toLowerCase().includes(search);
      })
      .map((update, index) => (
        <SubAdminProfileItem key={index} update={update} index={index} />
      ));
  }, [demoConstant, search]);

  if (loading) {
    return <div className=" text-black  font-medium text-3xl flex flex-row gap-28  h-[500px] bg-blue-600 bg-opacity-85 mt-[88px] w-[1470px]  justify-center items-center ">
      <div className=" flex flex-row justify-center items-center  gap-28 ms-10 mt-[-70px] opacity-65 ">
      <Skeletonn 
      count="6" 
      width={200}
    />
     <Skeletonn 
      count="6" 
      width={200}
    />
    <Skeletonn 
      count="6" 
      width={200}
    />
      </div>
    
    </div>;
  }
  return (
    <div
      style={{ backgroundColor: "#494D5F", width: "1080px", height: "450px" }}
      className=" ms-64 bg-[#0529BB] mt-[-30px]"
    >
      <div className="bg-[#0529BB]  rounded-md flex flex-row justify-between ">
        <h2 className="text-xl p-3 ms-6 m-3  font-medium underline">
          Existing Admin User Profiles
        </h2>

        <div className="w-80  mt-1 py-3 bg-[#0529BB] mb-9  ">
          <InputWithIcon
            labelText=" Search Profiles"
            labelFor="Search Profiles"
            type="Search Profiles"
            autoComplete="current-password"
            placeholder="Search Profiles ..."
            bg1="bg-[#F2EFEF]"
            handleChange={(e) => setSearch(e.target.value)}
            iconData="BiSearch"
          />
        </div>

      </div>
      <div className=" bg-[#0529BB]">
        <div style={{ overflow: "auto", maxHeight: "450px", maxWidth:'1080px' }} className=" grid grid-cols-3 gap-4  bg-[#0529BB]">
          {memoizedSubAdmins}
        </div>
      </div>
    </div>
  );
};

const SubAdminProfileItem = ({ update, index }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(updateSubAdminData(update));
    navigate("../SubAdminEdit", { state: { update } });
  };
  return (
    <div
      className="  mb-4 bg-[#E7ECFF] flex flex-col justify-between ml-9 rounded-lg"
      style={{ maxWidth: "300px" }}
    >
      <p className="text-black font-medium  ">
      <div className=" font-semibold text-xl ms-20 m-2   ">
          {"SubAdmin "}
          {index + 1}
      </div>
        
        <span className="font-medium ">Name : </span>
        {update.fullName} <br />
        <span className="font-medium">Email Id : </span>
        {update.email} <br />
        <span className="font-medium">Contact Number : </span>
        {update.contactNumber}
      </p>
      <div
        className="ms-12  cursor-pointer h-9 px-7 py-1 text-sm  text-white mt-4  bg-[#0032FF] w-44 rounded-2xl flex items-center mb-2 "
        onClick={handleEdit}
      >
        View / Edit Profile
      </div>
    </div>
  );
};
export default SubAdminProfile;
