import React, { useEffect, useState, useMemo } from "react";
import Input from "../../../components/ui/Input.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateSubAdminData } from "../../../data/features/registerSlice.js";

const SubAdminProfile = () => {
  const [demoConstant, setDemoConstant] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function getAllSubAdmins() {
      try {
        const response = await axios.get("api/admin/getAllSubAdmins");
        setDemoConstant(response.data.subAdmins);
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

  return (
    <div
      style={{ backgroundColor: "#494D5F", width: "775px", height: "550px" }}
    >
      <div className="bg-[#845BB3] mt-[-12px] rounded-md">
        <h2 className="text-xl p-3 ms-6 m-3  font-medium">
          Existing Admin User Profiles
        </h2>
      </div>
      <div>
        <div className="w-80 ms-48 mt-3 py-3">
          <Input
            labelText=" Search Profiles"
            labelFor="Search Profiles"
            type="Search Profiles"
            autoComplete="current-password"
            placeholder="Search Profiles"
            bg1="bg-[#F2EFEF]"
            handleChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div style={{ overflow: "auto", maxHeight: "400px" }}>
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
      className="p-4 mb-4 bg-blue-100 flex flex-row justify-between ml-9"
      style={{ maxWidth: "680px" }}
    >
      <p className="text-black font-medium ">
        <span className="font-medium">
          {" "}
          {index + 1}. {update.assignedUserId}
        </span>
        <br />
        <span className="font-medium">Name : </span>
        {update.fullName} <br />
        <span className="font-medium">Email Id : </span>
        {update.email} <br />
        <span className="font-medium">Contact Number : </span>
        {update.contactNumber}
      </p>
      <span
        className="ms-32 rounded-md cursor-pointer h-9 px-7 py-1 text-sm  text-white mt-5 pt-2 bg-[#0032FF]"
        onClick={handleEdit}
      >
        View / Edit Profile
      </span>
    </div>
  );
};
export default SubAdminProfile;
