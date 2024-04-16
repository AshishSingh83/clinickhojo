

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateManagementData } from "../../../data/features/registerSlice";
import Input from "../../../components/ui/Input";
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
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sortedData, setSortedData] = useState([...showData]); // State to hold sorted data
  const [sortOption, setSortOption] = useState(""); // Default sort option is by name
  const [search, setSearch] = useState(""); // State to hold search input value


  
  const filterChange = (e) => {
    setSortOption(e.target.value)
    console.log("Sorting by", e.target.value);
    let sorted = [...showData];
    if (e.target.value === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (e.target.value === "recent") {
      sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    setSortedData(sorted);
  };
  const handleMe = (update) =>{
    dispatch(updateManagementData(update));
    if(localStorage.getItem(`${update.contactNumber}a`)===null){
      const myVal = 'ashish' ;
      localStorage.setItem(`${update.contactNumber}a`,myVal)
      localStorage.setItem(`${update.contactNumber}b`,myVal)
    }
    navigate("../MHomeB");
  };
  const filteredData = sortedData.filter((update) =>
    update.fullName.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className={` ${Width} ${Height} bg-[#D9D9D9]  `}>
      <div className={`bg-[#D9D9D9] mt-[-12px] text-black`}>
        <h3 className={`${text1} font-medium ${p1} ${m1}  underline `}>
          {text}
        </h3>

        {sortedData.length === 0 ? "" : (
          <div className="ms-6 flex flex-row">
            <div>
              <select
                value={sortOption}
                onChange={(e) => filterChange(e)}
                className="bg-white h-8 ps-3 text-black"
              >
                <option value="namee">Sort by</option>
                <option value="name">Sort by Name</option>
                <option value="recent">Sort by Recent</option>
              </select>
            </div>
            <div className="ms-16 w-64">
              <Input
                labelText="Search Profiles"
                labelFor="searchProfiles"
                type="text"
                autoComplete="off"
                placeholder="Search Profiles"
                bg1="bg-[#F2EFEF]"
                handleChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>
      <div className={`overflow-auto ${mh2}`}>
        {filteredData.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <p className="text-black  mt-44 text-2xl font-medium">
              No data available
            </p>
          </div>
        ) : (
          filteredData.map((update, index) => (
            <div
              key={index}
              className={`p-4 mb-4  bg-[#FFFCFC] flex flex-row justify-between ml-6 ${mw3} mt-3 cursor-pointer`}
            >
              <p className="text-black font-semibold ">
                <span className="font-bold ">{index + 1}. </span>
                {update.fullName} <br />
                <span className=" font-medium ">UniqueId : </span>
                {update.contactNumber} <br />
                <span className="font-medium ">Email : </span>
                {update.email}
              </p>
              <span
                className="inline-block rounded-md cursor-pointer h-9 px-4 py-1  text-sm   text-white mt-5 pt-2"
                style={{ backgroundColor: "#4575f7" }}
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

