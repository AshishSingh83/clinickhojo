import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateSubAdminData } from "../../../data/features/registerSlice.js";
import InputWithIcon from "../../../components/ui/InputWithIcon.jsx";
import { BiSearch } from "react-icons/bi";
import Spinner from "../../../components/ui/clipPath/Spinner.jsx";
import instance from "../../../axios.js";

const useFetchSubAdmins = () => {
  const [subAdmins, setSubAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchSubAdmins() {
      try {
        const response = await instance.get("api/admin/getAllSubAdmins");
        setSubAdmins(response.data.subAdmins);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching sub admins:", error);
        setLoading(false);
      }
    }
    fetchSubAdmins();
  }, []);

  return { subAdmins, loading };
};

const SubAdminProfile = () => {
  const { subAdmins, loading } = useFetchSubAdmins();
  const [search, setSearch] = useState("");
  const [bool, setBool] = useState(true);

  const memoizedSubAdmins = useMemo(() => {
    return subAdmins.filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.fullName.toLowerCase().includes(search.toLowerCase());
    });
  }, [subAdmins, search]);
  if (loading) {
    return (
      <div className="text-black font-medium text-3xl flex flex-wrap gap-6 me-72 mb-10 h-[500px] bg-blue-700 bg-opacity-85 mt-[88px] w-full justify-center items-center">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-[#E7ECFF] flex justify-center items-center h-36 w-52 rounded-lg"
          >
            <Spinner
              height="h-[65px]"
              width="w-[65px]"
              fontSize="text-[.9rem]"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-4 bg-[#0529BB] mt-5 rounded-md">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl p-3 font-medium underline text-center md:text-left ms-5 mb-4">
          Existing Admin User Profiles
        </h2>
        <div className="w-full md:w-80 mt-1 py-3 mb-6">
          <InputWithIcon
            labelText="Search Profiles"
            labelFor="Search Profiles"
            type="Search Profiles"
            autoComplete="current-password"
            placeholder="Search Profiles ..."
            bg1="bg-[#F2EFEF]"
            handleChange={(e) => setSearch(e.target.value)}
            iconData={BiSearch}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto md:max-h-[450px] min-h-[300px]">
        {memoizedSubAdmins[0] ? (
          memoizedSubAdmins.map((update, index) => (
            <SubAdminProfileItem key={index} update={update} index={index} />
          ))
        ) : (
          <div className=" h-full w-full text-center text-white text-xl flex justify-center items-center me-40 mt-2">
            No Subadmin found
          </div>
        )}
      </div>
    </div>
  );
};

const SubAdminProfileItem = ({ update, index }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEdit = useCallback(() => {
    dispatch(updateSubAdminData(update));
    navigate("../SubAdminEdit", { state: { update } });
  }, [dispatch, navigate, update]);

  return (
    <div
      className="mb-4 bg-[#E7ECFF] flex flex-col justify-between md:ml-9 rounded-lg"
      style={{ minWidth: "250px", maxHeight: "195px", maxWidth: "400px" }}
    >
      <div className="text-black font-medium">
        <div className="font-semibold text-xl ms-20 m-2">
          {"SubAdmin "} {index + 1}
        </div>
        <span className="font-medium">Name: </span>
        {update.fullName} <br />
        <span className="font-medium">Email Id: </span>
        {update.email} <br />
        <span className="font-medium">Contact Number: </span>
        {update.contactNumber}
      </div>
      <div
        className="ms-12 cursor-pointer h-9 px-7 py-1 text-sm text-white mt-4 bg-[#0032FF] w-44 rounded-2xl flex items-center  mb-2"
        onClick={handleEdit}
      >
        View / Edit Profile
      </div>
    </div>
  );
};

export default SubAdminProfile;
