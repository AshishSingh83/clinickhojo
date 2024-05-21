import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUserData } from "../../../data/features/registerSlice";
import InputWithIcon from "../../../components/ui/InputWithIcon";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import ClipBgB from "../../../components/ui/clipPath/ClipBgB";
import { BiSearch } from "react-icons/bi";
import Spinner from "../../../components/ui/clipPath/Spinner";
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
  hwidth = "w-[380px]",
  hrad = "35px",
  spinner = false,
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
      <div className={`  text-black flex flex-col`}>
        <div className=" flex items-center justify-center">
          <ClipBgB
            width={hwidth}
            height="h-[50px]"
            bardervar={hrad}
            bg="bg-[#FFFFFF]"
            textColor="text-[#FA0808]"
            textSize="text-2xl"
            mt="mt-0"
            text={text}
          />
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
                iconData={BiSearch}
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
            <p className="text-white mt-44 text-2xl font-medium">
              {spinner ? (
                <Spinner
                  height="h-[70px]"
                  width="w-[70px]"
                  fontSize="text-[.9rem]"
                />
              ) : (
                "No Data Available"
              )}
            </p>
          </div>
        ) : (
          filteredData.map((user, index) => (
            <div
              key={index}
              className={`p-4 mb-4 bg-[#FFFCFC] flex flex-row justify-between ml-6 ${mw3} mt-3 cursor-pointer overflow-auto`}
            >
              <p className="text-black font-semibold">
                <span className="font-bold">{index + 1}. </span>
                Name: {user.name} <br />
                <div className=" flex flex-row ms-3 gap-3">
                  <AiOutlinePhone size="25px" color="green" />{" "}
                  <p className="text-[#535252]">{user.mobileNumber}</p>
                </div>
                <div className=" flex flex-row ms-3 gap-3">
                  <AiOutlineMail size="25px" color="red" />{" "}
                  <p className="text-[#535252]">{user.email}</p>
                </div>
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
