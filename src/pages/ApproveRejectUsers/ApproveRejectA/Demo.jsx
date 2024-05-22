import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateDoctorData } from "../../../data/features/registerSlice";
import InputWithIcon from "../../../components/ui/InputWithIcon";
import { BiSolidUserDetail } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import ClipBgB from "../../../components/ui/clipPath/ClipBgB";
import Spinner from "../../../components/ui/clipPath/Spinner";
import { BiSearch } from "react-icons/bi";
const Demo = ({
  text = "Pending Profiles Of Doctors ...",
  Width = "h-[500px]",
  Height = "w-[500px]",
  p1 = "p-3",
  m1 = "m-3",
  text1 = "text-2xl",
  mh2 = "max-h-[400px]",
  mw3 = "max-w-[450px]",
  showData,
  normalVerified,
  newBg = "bg-[#229649]",
  newBga,
  hwidth = "w-[380px]",
  hrad = "35px",
  spinner = false,
  msa="ms-16"
}) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sortedData, setSortedData] = useState([...showData]);
  const [sortOption, setSortOption] = useState("");
  const [search, setSearch] = useState("");
  const filterChange = (e) => {
    setSortOption(e.target.value);
    let sorted = [...showData];
    if (e.target.value === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (e.target.value === "recent") {
      sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    setSortedData(sorted);
  };

  const handleMe = (update) => {
    dispatch(updateDoctorData(update));
    if (normalVerified) {
      navigate("../VerifiedDoctorProfile");
    } else {
      if (localStorage.getItem(`${update.uniqueDoctorId}a`) === null) {
        const myVal = "ashish";
        localStorage.setItem(`${update.uniqueDoctorId}a`, myVal);
        localStorage.setItem(`${update.uniqueDoctorId}b`, myVal);
      }
      navigate("../ApproveRejectB", { state: { update } });
    }
  };
  const filteredData = sortedData.filter((update) =>
    update.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={` md:w-[500px] h-[500px] bg-[#03229F] overflow-auto  `}>
      <div className={` mt-[-12px] text-black flex flex-col   `}>
        <div className="h-14 flex items-center bg-[#FFFFFF] text-[#FA0808] text-2xl justify-center font-medium md:hidden">
        <h3>{text}</h3>
      </div>
      <div className={` h-14   items-center justify-center hidden md:block ${msa} `}>
      <ClipBgB
            width={hwidth}
            height="h-[55px]"
            bardervar={hrad}
            bg="bg-[#FFFFFF]"
            textColor="text-[#FA0808]"
            textSize="text-2xl"
            mt="mt-2"
            text={text}
          />
        </div>
        {sortedData.length === 0 ? (
          ""
        ) : (
          <div className=" flex flex-row bg-[#03229F] gap-3 ">
            <div className=" ms-4 mt-3 ">
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
            <div className=" mt-6  ms-6 md:ms-0">
              <select
                value={sortOption}
                onChange={(e) => filterChange(e)}
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
        {filteredData.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <div className="text-[#FFFFFF]  mt-44 text-2xl font-medium">
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
              className={`p-4 mb-4 me-6  bg-[#E7ECFF] flex flex-row justify-between ml-6  md:h-28 md:w-[450px] mt-3 cursor-pointer rounded-md `}
            >
              <div className="text-black font-semibold ">
                <span className="font-bold ">{index + 1}. </span>
                {update.name} <br />
                <div className=" flex ms-4 gap-2">
                  <span>
                    <BiSolidUserDetail size="25px" color={`${newBga}`} />
                  </span>
                  <span className=" font-medium text-[#535252] ">
                    {" "}
                    #{update.uniqueDoctorId}
                  </span>
                </div>
                <div className=" flex  ms-8 gap-2 mt-">
                  <p className=" mt-[7px]">
                    <FaMapMarkerAlt size="15px" color="red" />
                  </p>
                  <p className=" font-medium text-[#535252]  ">
                    {" "}
                    {update.address.locality}
                  </p>
                </div>
              </div>
              <span
                className={`inline-block rounded-md w-20 cursor-pointer h-9 px-4 py-1  text-sm   text-white mt-2 md:mt-5 pt-2 ${newBg}`}
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

export default Demo;
