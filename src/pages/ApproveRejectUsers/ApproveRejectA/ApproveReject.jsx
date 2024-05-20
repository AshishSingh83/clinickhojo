
import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "../../AdminHome/Sidebar/Sidebar";
import { FiLogOut } from "react-icons/fi";
import Demo from "./Demo";
import Input from "../../../components/ui/Input";
import instance from '../../../axios';
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import Skeletonn from "../../../components/ui/SkeletonPage.jsx/Skeletonn";
import DemoHospital from "./DemoHospital";
import { updateApprovedHospitals } from "../../../data/features/registerSlice";
import { useDispatch } from "react-redux";
import ClipBgB from "../../../components/ui/clipPath/ClipBgB";

function ApproveReject() {
  const [pending, setPending] = useState([]);
  const [notApprovedHospitals, setNotApprovedHospitals] = useState([]);
  const [changed, setChanged] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch() ;
  const mydata = {
    index: 2,
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const [pendingResponse, pendingHospitalResponse, changedResponse] = await Promise.all([
          axios.get('api/admin/getToBeApprovedDoctors'),
          axios.get('api/admin/getAll/hospitals'),
          axios.get('api/admin/doctors/approved/updated'),
        ]);

        setPending(pendingResponse.data.doctors || []);
        setChanged(changedResponse.data || []);
        
        const hospitals = pendingHospitalResponse.data || [];
        const approved = [];
        const notApproved = [];
        
        hospitals.forEach(update => {
          console.log(update);
          if(update.requestForApproval && !update.isApproved && !update.isSuspended){
            notApproved.push(update);
          }
          if(update.isApproved && !update.isSuspended){
            approved.push(update);
          }
        }
      
      );
        setNotApprovedHospitals(notApproved);
        dispatch(updateApprovedHospitals(approved));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-black font-medium text-3xl flex flex-row gap-28 h-screen w-screen bg-blue-600">


        <div className="flex flex-col justify-between">
          <div className="me-7">
            <Sidebar someData={mydata} />
          </div>
          <div>
            <FiLogOut className="ms-8" style={{ color: "#061ba1", fontSize: "40px" }} />
          </div>
        </div>

        
        <div >
          <div className="flex flex-row gap-28 mt-32 ms-28">
          <div className="bg-[#D9D9D9] ">
            <Demo bg1="bg-[#F75990]" bg2="bg-[#bf9ee6]" bg3="bg-blue-200" showData={[]} newBg="bg-[#0032FF]" newBga="#0032FF" spinner={true} />
          </div>
          <div className="me-32">
            <DemoHospital bg1="bg-[#845BB3]" bg2="bg-blue-300" bg3="bg-[#f089a4]" text='Pending Profiles Of Hospital ...' showData={[]} newBg="bg-[#229649]" newBga="#229649" spinner={true} />
          </div>
        </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-row justify-between h-screen w-screen bg-[#0529BB]">
      <div className="flex flex-col justify-between bg-[#c2c0bc]">
        <div className="me-7">
          <Sidebar someData={mydata} />
        </div>
        <div>
          <FiLogOut className="ms-8" style={{ color: "#061ba1", fontSize: "40px" }} />
        </div>
      </div>
      <div>
        <div className=" flex flex-row justify-between">
          {/* <div className="bg-[#FF0B0B] h-14 w-52">
            <p className="text-white mt-4 ms-7">Approve/Reject User</p>
          </div> */}
          <ClipBgB width='w-[340px]' height='h-[65px]'  bardervar="37px" />
        </div>
        <div className="flex flex-row gap-28 mt-16">
          <div className="bg-[#D9D9D9]">
            <Demo bg1="bg-[#F75990]" bg2="bg-[#bf9ee6]" bg3="bg-blue-200" showData={pending} newBg="bg-[#0032FF]" newBga="#0032FF" spinner={false} />
          </div>
          <div className="me-32">
            <DemoHospital bg1="bg-[#845BB3]" bg2="bg-blue-300" bg3="bg-[#f089a4]" text='Pending Profiles Of Hospital ...' showData={notApprovedHospitals} newBg="bg-[#229649]" newBga="#229649" spinner={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApproveReject;

