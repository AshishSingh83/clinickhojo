import React, { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import axios from "axios";
import Sidebar from "../../AdminHome/Sidebar/Sidebar";
import Demo from "./Demo";
function ManagementHome() {
  const [pending, setPending] = useState([]);
  const [changed, setChanged] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState("");
  const [formData, setFormData] = useState({
    managementBasicDetails: "",
    managementIdentityProof: "",
  });
  const handleRadioChange = (name, option) => {
    setFormData((prevData) => ({ ...prevData, [name]: option }));
  };
  const handleRatingChange = (ratingValue) => {
    setRating(ratingValue);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const [pendingResponse, changedResponse] = await Promise.all([
          axios.get("api/admin/managementPersonnel/notApproved"),
          axios.get("api/admin/getAll/managememntPersonnel/approved/updated"),
        ]);
        setPending(pendingResponse.data.management || []);
        setChanged(changedResponse.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
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
          <Sidebar someData={{'index':6}}/>
        </div>
        <div>
          <FiLogOut
            className="ms-8"
            style={{ color: "#061ba1", fontSize: "40px" }}
          />
        </div>
      </div>
      <div>
        <div className="   mt-14   flex flex-row justify-between ">
          <div className=" bg-[#D9D9D9] h-14 w-64">
            <p className=" text-black mt-4 ms-7  ">Approve/Reject Management</p>
          </div>
        </div>
        <div className="flex flex-row gap-28 mt-16">
          <div className=" bg-[#D9D9D9]">
            <Demo
              bg1="bg-[#F75990]"
              bg2="bg-[#bf9ee6]"
              bg3="bg-blue-200"
              showData={pending}
              text="Pending Profiles Of Managements ......"
            />
          </div>
          <div className="  me-32">
            <Demo
              bg1="bg-[#845BB3]"
              bg2="bg-blue-300"
              bg3="bg-[#f089a4]"
              text="approved management updated profiles ..."
              showData={changed}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagementHome;
