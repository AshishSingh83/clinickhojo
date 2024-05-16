import React, { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import Referral from "./Components/Referral";
import Sidebar from "../AdminHome/Sidebar/Sidebar";
import axios from "axios";
import { useSelector } from "react-redux";
import Profile from "../ApproveRejectUsers/ApproveRejectB/Profile";
import ProfileUser from "./Components/ProfileUser";
import Appoiment from "./Components/Appoitment";
function UserProfile() {
  const [appoitments, setAppoitments] = useState([]);
  const [loading, setLoading] = useState(true);
  const update = useSelector((state) => state.register.userData);
  const { name, profilePicture, mobileNumber, email } = update;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post("api/admin/user-getAllAppointments", {
          userMobileNumber: '243',
        });
        console.log('appoitments hahahahaaaaa',response.data);
        setAppoitments(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-row justify-between h-screen w-screen bg-[#0529BB]">
      <div className="flex flex-col justify-between bg-[#c2c0bc]">
        <div className="me-7">
          <Sidebar someData={{'index':5}}/>
        </div>
        <div>
          <FiLogOut
            className="ms-8"
            style={{ color: "#061ba1", fontSize: "40px" }}
          />
        </div>
      </div>
      <div className=" flex flex-col">

        <div
          className="text-black mt-20   font-medium flex flex-row justify-between w-screen "
          style={{ fontSize: "18px" }}
        >
          <div className="bg-[#D9D9D9] h-14 w-52 ms-40 mt-[-20px]  ">
              <p className="text-black mt-3 ms-12   ">
                User Profile
              </p>
            </div>
            <div className=" me-44 mt-[-20px]">
            <ProfileUser
              fullName={name}
              profileImage={profilePicture}
              uniqueDoctorId={mobileNumber}
              email={email}
            />
          </div>
        </div>
        <div className=" mt-9 ms-96">

          <div className=" ">
            <Appoiment dataa={appoitments} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
