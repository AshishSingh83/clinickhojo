
import React, { useEffect, useState } from "react";
import Sidebar from "../../AdminHome/Sidebar/Sidebar";
import { FiLogOut } from "react-icons/fi";
import Demo from "./Demo";
import Input from "../../../components/ui/Input";
import instance from '../../../axios';
import axios from "axios";
function ApproveReject() {
  const [pending, setPending] = useState([]);
  const [changed, setChanged] = useState([]);
  const [loading, setLoading] = useState(true);
  const mydata = {
    index:2 ,
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const [pendingResponse, changedResponse] = await Promise.all([
          axios.get('api/admin/getToBeApprovedDoctors'),
          axios.get('api/admin/doctors/approved/updated')
        ]);
        setPending(pendingResponse.data.doctors || []);
        setChanged(changedResponse.data || []);
        setLoading(false);
      }catch (error){
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className=" text-black  font-medium text-3xl">Loading...</div>;
  }
  return (
    <div className="flex flex-row justify-between h-screen w-screen bg-[#0529BB]">
      <div className="flex flex-col justify-between bg-[#c2c0bc]">
        <div className="me-7">
          <Sidebar someData={mydata}/>
        </div>
        <div>
          <FiLogOut className="ms-8" style={{ color: "#061ba1", fontSize: "40px" }} />
        </div>
      </div>
      <div>
        <div className="   mt-14   flex flex-row justify-between ">
         <div className=" bg-[#FF0B0B] h-14 w-52">
         <p className=" text-white mt-4 ms-7  ">Approve/Reject User</p>
         </div>
         
        </div>
        <div className="flex flex-row gap-28 mt-16">
          <div className=" bg-[#D9D9D9]">
            <Demo bg1="bg-[#F75990]" bg2="bg-[#bf9ee6]" bg3="bg-blue-200" showData={pending} newBg="bg-[#0032FF]" newBga="#0032FF" />
          </div>
          <div className="  me-32">
            <Demo bg1="bg-[#845BB3]" bg2="bg-blue-300" bg3="bg-[#f089a4]" text='approved Doctors who updated profiles...' showData={changed} newBg="bg-[#229649]" newBga="#229649" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApproveReject;

