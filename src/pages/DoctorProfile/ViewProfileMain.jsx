
import React, { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import axios from 'axios';
import Sidebar from "../AdminHome/Sidebar/Sidebar";
import Demo from "../ApproveRejectUsers/ApproveRejectA/Demo";
import Input from "../../components/ui/Input";
import DemoUser from "./Components/DemoUser";

function ViewProfileMain() {
  const [allUsers, setAllUsers] = useState([]);
  const [approveDoctors, setApproveDoctors] = useState([]);
  const [deleteRequest, setDeleteRequest] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const [pendingResponse, changedResponse, doctorDeleteRequest] = await Promise.all([
          axios.get('api/admin/getAllUser'),
          axios.get('api/admin/getApprovedDoctors'),
          axios.get('api/admin/delete/getAllDoctors'),
        ]);
        setAllUsers(pendingResponse.data.user || []);
        setApproveDoctors(changedResponse.data.doctors || []);
        setDeleteRequest(doctorDeleteRequest.data.doctors || []);
        setLoading(false);
        console.log('users',pendingResponse.data.user);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  

  if (loading) {
    return <div className=" text-black  font-medium text-3xl">Loading...</div>;
  }
  function deleteUser() {
   console.log('okay');
  }
  return (
    <div className="flex flex-row justify-between  w-screen bg-white">
      <div className="flex flex-col justify-between bg-[#c2c0bc]">
        <div className="me-7">
          <Sidebar someData={{'index':5}}/>
        </div>
        <div>
          <FiLogOut className="ms-8" style={{ color: "#061ba1", fontSize: "40px" }} />
        </div>
      </div>
      <div>
        <div className="   mt-14   flex flex-row justify-between ">
         <div className=" bg-[#D9D9D9] h-14 w-44 ms-[-80px]">
         <p className=" text-black mt-4 ms-10  ">View Profile</p>
         </div>
        </div>
        <div>
        <div className="flex flex-row gap-28 mt-16">
        <div className="  ">
            <Demo bg1="bg-[#845BB3]" bg2="bg-blue-300" bg3="bg-[#f089a4]" text='All verified Doctors Profiles' showData={approveDoctors} normalVerified={true} />
          </div>
          <div className="  me-32">
            <DemoUser bg1="bg-[#845BB3]" bg2="bg-blue-300" bg3="bg-[#f089a4]" text='All Users' showData={allUsers} />
          </div>
        </div>
        <div className="flex flex-row gap-28 mt-16">
        <Demo bg1="bg-[#845BB3]" bg2="bg-blue-300" bg3="bg-[#f089a4]" text='Doctors Requested for delete profiles' showData={deleteRequest} normalVerified={true} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProfileMain;
