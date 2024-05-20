import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/ui/Input";
import { useDispatch } from "react-redux";
import { updateHospitalData } from "../../../data/features/registerSlice";
import InputWithIcon from "../../../components/ui/InputWithIcon";
import { BiSolidUserDetail } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFilter } from 'react-icons/fa';
import ClipBgB from "../../../components/ui/clipPath/ClipBgB";
import Spinner from "../../../components/ui/clipPath/Spinner";
import { BiSearch } from "react-icons/bi";
const DemoHospital = ({
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
  hwidth= 'w-[380px]',
  hrad='35px',
  spinner=false
}) => {
  const dispatch = useDispatch();
  console.log('demo hos',showData);
  const navigate = useNavigate();
  console.log(showData);
  const [sortedData, setSortedData] = useState([...showData]);
  const [sortOption, setSortOption] = useState("");
  const [search, setSearch] = useState("");
  console.log("object", showData);
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
    console.log('normal verified',normalVerified);
    dispatch(updateHospitalData(update));
    if(normalVerified=='true'){
      console.log('nanananaaaaah');
      navigate("../VerifiedHospital");
    }else{
      if (localStorage.getItem(`${update.hospitalClinicKhojoId}a`) === null) {
        const myVal = "ashish";
        localStorage.setItem(`${update.hospitalClinicKhojoId}a`, myVal);
        localStorage.setItem(`${update.hospitalClinicKhojoId}b`, myVal);
      }
      navigate("../ApproveRejectHospital");
    }
  };
  // const filteredData = sortedData.filter((update) =>
  //   update.name.toLowerCase().includes(search.toLowerCase())
  // );

  const filteredData = useMemo(() => {
    if(search!=''){
      console.log('andar bandar',search);
      return sortedData.filter((update) =>
        update.name.toLowerCase().includes(search.toLowerCase())
      );
    }else{
      return sortedData
    }
  }, [sortedData, search]);

  return (
    <div className={` ${Width} ${Height} bg-[#03229F] overflow-hidden  `}>
      <div className={` mt-[-12px] text-black flex flex-col `}>
        <div className=" h-14 flex items-center justify-center ">
        <ClipBgB width={hwidth} height='h-[55px]'  bardervar={hrad} bg='bg-[#FFFFFF]' textColor="text-[#FA0808]"  textSize="text-2xl"  mt='mt-2' text={text}/>
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
            <div className=" mt-6">
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
      <div className={`overflow-auto ${mh2}`}>
        {filteredData.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <p className="text-[#FFFFFF]  mt-44 text-2xl font-medium">
            {
              spinner?<Spinner height="h-[70px]" width="w-[70px]" fontSize="text-[.9rem]"/>:'No Data Available'
            }
            </p>
          </div>
        ) : (
          filteredData.map((update, index) => (
            <div
              key={index}
              className={`p-4 mb-4  bg-[#E7ECFF] flex flex-row justify-between ml-6 ${mw3} mt-3 cursor-pointer`}
            >
              <p className="text-black font-semibold ">
                <span className="font-bold ">{index + 1}. </span>
                {update.name} <br />
                <div className=" flex flex-row ms-7 gap-2">
                  <p>
                    <BiSolidUserDetail size="25px" color={`${newBga}`} />
                  </p>
                  <p className=" font-medium text-[#535252] ">
                    {" "}
                    #{update.hospitalClinicKhojoId}
                  </p>
                </div>
                <div className=" flex flex-row ms-7 gap-2 mt-">
                  <p className=" mt-[7px]">
                    <FaMapMarkerAlt size="15px" color="red" />
                  </p>
                  <p className=" font-medium text-[#535252]  ">
                    {" "}
                    {update.address.city}
                  </p>
                </div>
                {/* <span className="font-medium ">City : </span>
                {update.address.city} */}
              </p>
              <span
                className={`inline-block rounded-md cursor-pointer h-9 px-4 py-1  text-sm   text-white mt-5 pt-2 ${newBg}`}
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