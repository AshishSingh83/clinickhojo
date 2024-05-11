import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUserData } from "../../../data/features/registerSlice";
import Input from "../../../components/ui/Input";
import InputWithIcon from "../../../components/ui/InputWithIcon";

const DemoUser = ({
  text = "All Users ...",
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
  const [sortedData, setSortedData] = useState([...showData]);
  const [sortOption, setSortOption] = useState("");
  const [search, setSearch] = useState("");

  const filterChange = (e) => {
    const option = e.target.value;
    setSortOption(option);
    let sorted = [...showData];
    if (option === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "recent") {
      sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    setSortedData(sorted);
  };

  const handleViewProfile = (user) => {
    dispatch(updateUserData(user));
    navigate("../UserProfile");
  };

  const filteredData = sortedData.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`${Width} ${Height} bg-[#03229F]`}>
      <div className={`bg-[#D9D9D9] mt-[-12px] text-black flex flex-col`}>

      <div className=" h-14 flex items-center">
      <h3 className={`${text1} font-medium ${p1} ${m1} text-center text-[#FA0808]`}>
          {text}
        </h3>
      </div>
        {showData.length !== 0 && (
          <div className=" flex flex-row bg-[#03229F] gap-3">
          <div className="ms-4 mt-3 w-64">
              <InputWithIcon
                labelText="Search Profiles"
                labelFor="searchProfiles"
                type="text"
                autoComplete="off"
                placeholder="Search Profiles"
                bg1="bg-[#F2EFEF]"
                handleChange={(e) => setSearch(e.target.value)}
                iconData="BiSearch"
              />
            </div>
            <div className=" mt-6">
              <select
                value={sortOption}
                onChange={(e) => filterChange(e)}
                className="bg-white h-8 ps-3 text-black"
              >
               <option value="okay">Sort by</option>
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
            <p className="text-black mt-44 text-2xl font-medium">
              No data available
            </p>
          </div>
        ) : (
          filteredData.map((user, index) => (
            <div
              key={index}
              className={`p-4 mb-4 bg-[#FFFCFC] flex flex-row justify-between ml-6 ${mw3} mt-3 cursor-pointer`}
            >
              <p className="text-black font-semibold">
                <span className="font-bold">{index + 1}. </span>
                Name: {user.name} <br />
                Mobile No. : {user.mobileNumber} <br />
                Email : {user.email}
              </p>
              <span
                className="inline-block rounded-md cursor-pointer h-9 px-4 py-1 text-sm text-white mt-5 pt-2"
                style={{ backgroundColor: "#03229F" }}
                onClick={() => handleViewProfile(user)}
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

export default DemoUser;
