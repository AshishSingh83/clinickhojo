import React, { useEffect, useState } from "react";
import Sidebar from "../AdminHome/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import ProfileUser from "./Components/ProfileUser";
import Appoiment from "./Components/Appoitment";
import ClipBgB from "../../components/ui/clipPath/ClipBgB";
import instance from "../../axios";
function UserProfile() {
  const [appoitments, setAppoitments] = useState([]);
  const [loading, setLoading] = useState(true);
  const update = useSelector((state) => state.register.userData);
  const { name, profilePicture, mobileNumber, email } = update;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.post(
          "api/admin/user-getAllAppointments",
          {
            userMobileNumber: mobileNumber,
          }
        );
        setAppoitments(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-row  h-screen w-screen bg-[#0529BB] gap-[249.5px]">
        <div className="flex flex-col justify-between ">
          <div className="">
            <Sidebar someData={{ index: 5 }} />
          </div>
        </div>
        <div className=" flex flex-col gap-16">
          <div
            className="text-black   font-medium flex flex-row justify-between gap-40  "
            style={{ fontSize: "18px" }}
          >
            <div className=" flex flex-row gap-24  ">
              <div>
                <ClipBgB
                  width="w-[290px]"
                  height="h-[55px]"
                  bardervar="32px"
                  text="View Profile"
                />
              </div>

              <p className="text-white mt-3 underline text-2xl    ">
                User Profile
              </p>
            </div>
          </div>
          <div className=" mt-12 flex justify-center items-center  ">
            <div className=" flex justify-center ">
              <Appoiment loading={loading} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-row justify-between h-screen w-screen bg-[#0529BB]">
      <div className="flex flex-col justify-between ">
        <div className="me-7">
          <Sidebar someData={{ index: 5 }} />
        </div>
      </div>
      <div className=" flex flex-col gap-28">
        <div
          className="text-black   font-medium flex flex-row justify-between gap-36  "
          style={{ fontSize: "18px" }}
        >
          <div className=" flex flex-row md:gap-24  ">
            <div className=" flex justify-center md:justify-normal mb-5 md:mb-0">
              <ClipBgB
                width="w-[290px]"
                height="h-[55px]"
                bardervar="32px"
                text="View Profile"
              />
            </div>
            <div className=" flex justify-center">
              <p className="text-white mt-3 underline text-2xl   ">
                User Profile
              </p>
            </div>
          </div>
        </div>

        <div className=" flex flex-row gap-8 md:gap-28 md:me-9">
          <div className="  md:ms-0">
            <ProfileUser
              fullName={name}
              profileImage={profilePicture}
              uniqueDoctorId={mobileNumber}
              email={email}
            />
          </div>
          <div className=" ">
            <Appoiment dataa={appoitments} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
