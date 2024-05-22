import React, { useMemo, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateHospitalData } from "../../../data/features/registerSlice";
import InputWithIcon from "../../../components/ui/InputWithIcon";
import { BiSolidUserDetail } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import ClipBgB from "../../../components/ui/clipPath/ClipBgB";
import Spinner from "../../../components/ui/clipPath/Spinner";
import { BiSearch } from "react-icons/bi";

const DemoHospital = ({
  text = "Pending Profiles Of Doctors ...",
  mh2 = "max-h-[400px]",
  showData,
  normalVerified,
  newBg = "bg-[#229649]",
  newBga,
  hwidth = "w-[380px]",
  hrad = "35px",
  spinner = false,
  msa = "ms-10",
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sortedData, setSortedData] = useState([...showData]);
  const [sortOption, setSortOption] = useState("");
  const [search, setSearch] = useState("");
  const sortData = useCallback((data, option) => {
    let sorted = [...data];
    if (option === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "recent") {
      sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    return sorted;
  }, []);
  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);
    const sorted = sortData(showData, option);
    setSortedData(sorted);
  };
  const handleMe = (update) => {
    dispatch(updateHospitalData(update));
    if (normalVerified === "true") {
      navigate("../VerifiedHospital");
    } else {
      if (localStorage.getItem(`${update.hospitalClinicKhojoId}a`) === null) {
        const myVal = "ashish";
        localStorage.setItem(`${update.hospitalClinicKhojoId}a`, myVal);
        localStorage.setItem(`${update.hospitalClinicKhojoId}b`, myVal);
      }
      navigate("../ApproveRejectHospital");
    }
  };
  const filteredData = useMemo(() => {
    if (search !== "") {
      return sortedData.filter((update) =>
        update.name.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return sortedData;
    }
  }, [sortedData, search]);
  return (
    <div className="md:w-[500px] h-[500px] bg-[#03229F] overflow-auto">
      <div className="sticky top-0 z-10  text-black flex flex-col">
        <div
          className={`h-14 items-center justify-center hidden md:block ${msa}`}
        >
          <ClipBgB
            width={hwidth}
            height="h-[55px]"
            bardervar={hrad}
            bg="bg-[#FFFFFF]"
            textColor="text-[#FA0808]"
            textSize="text-2xl"
            mt="mt-0"
            text={text}
          />
        </div>
        <div className="h-14 flex items-center bg-[#FFFFFF] text-center text-[#FA0808] text-2xl justify-center font-medium md:hidden">
          <h3>{text}</h3>
        </div>
        {sortedData[0] && (
          <div className="flex flex-row bg-[#03229F] gap-3">
            <div className="ms-4 mt-3">
              <InputWithIcon
                labelText="Search Profiles"
                labelFor="searchProfiles"
                type="text"
                autoComplete="off"
                placeholder="Search Profiles"
                bg1="bg-[#F2EFEF]"
                handleChange={(e) => setSearch(e.target.value)}
                iconData={BiSearch}
              />
            </div>
            <div className="mt-6 ms-6 md:ms-0">
              <select
                value={sortOption}
                onChange={handleSortChange}
                className="bg-white h-8 ps-3 text-black rounded-lg"
              >
                <option value="namee">Sort by</option>
                <option value="name">Sort by Name</option>
                <option value="recent">Sort by Recent</option>
              </select>
            </div>
          </div>
        )}
      </div>
      <div className={`overflow-auto ${mh2} me-5 md:me-0 rounded-md`}>
        {!filteredData[0] ? (
          <div className="flex justify-center items-center h-full">
            <div className="text-[#FFFFFF] mt-44 text-2xl font-medium">
              {spinner ? (
                <Spinner
                  height="h-[70px]"
                  width="w-[70px]"
                  fontSize="text-[.9rem]"
                />
              ) : (
                "No Data Available"
              )}
            </div>
          </div>
        ) : (
          filteredData.map((update, index) => (
            <div
              key={index}
              className="p-4 mb-4 me-6 bg-[#E7ECFF] flex flex-row justify-between ml-6 md:h-28 md:w-[450px] mt-3 cursor-pointer rounded-md"
            >
              <div className="text-black font-semibold">
                <span className="font-bold">{index + 1}. </span>
                {update.name} <br />
                <div className="flex">
                  <span>
                    <BiSolidUserDetail size="25px" color={`${newBga}`} />
                  </span>
                  <span className="font-medium text-[#535252]">
                    #{update.hospitalClinicKhojoId}
                  </span>
                </div>
                <div className="flex ms-4 gap-2 mt-[7px]">
                  <p>
                    <FaMapMarkerAlt size="15px" color="red" />
                  </p>
                  <p className="font-medium text-[#535252]">
                    {update.address.city}
                  </p>
                </div>
              </div>
              <span
                className={`inline-block rounded-md cursor-pointer h-9 px-4 py-1 w-20 text-sm text-white mt-2 md:mt-5 pt-2 ${newBg}`}
                onClick={() => handleMe(update)}
              >
                View...
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DemoHospital;
