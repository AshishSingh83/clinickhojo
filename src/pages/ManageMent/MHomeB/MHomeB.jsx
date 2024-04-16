import React, { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Profile from "./Profile.jsx";
import Sidebar from "../../AdminHome/Sidebar/Sidebar.jsx";
import Button from "../../../components/ui/Button.jsx";
import IdentityProof from "../../ApproveRejectUsers/ApproveRejectB/IdentityProof.jsx";
import BasicDetails from "./BasicDetail.jsx";
import {
  updateManagementContactNumber,
  updateManagementEmail,
} from "../../../data/features/registerSlice.js";

function MHomeB() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    managementBasicDetails: "",
    managementIdentityProof: "",
  });
  const [clinickhojoId, setClinicKhojoId] = useState("");
  const [ratingg, setRating] = useState("");
  const update = useSelector((state) => state.register.managementData);
  const {
    fullName,
    profilePhoto,
    contactNumber,
    email,
    accountAddedBy,
    managementUniqueId,
    rating,
  } = update || {};
  const handleRadioChange = (name, option) => {
    setFormData((prevData) => ({ ...prevData, [name]: option }));
  };
  const navigate = useNavigate();
  const handleRatingChange = (ratingValue) => {
    setRating(ratingValue);
  };
  useEffect(() => {
    const savedDataString = localStorage.getItem(`${contactNumber}a`);
    if (savedDataString != "ashish") {
      const savedData = JSON.parse(savedDataString);
      setFormData(savedData);
    }
  }, [contactNumber]);
  useEffect(() => {
    localStorage.setItem(`${contactNumber}a`, JSON.stringify(formData));
  }, [formData]);

  const manageme = async () => {
    const ratingToUse = ratingg === "" ? rating : ratingg;
    dispatch(updateManagementEmail(email));
    dispatch(updateManagementContactNumber(contactNumber));
    dispatch(updateManagementContactNumber(contactNumber));
    if (ratingg != "" && rating != ratingg) {
      try {
        await axios.post("api/admin/managementPersonnel/setRatings", {
          managementUniqueId: email,
          rating: ratingToUse,
        });
        navigate("../MHomeC");
      } catch (e) {
        console.log(e.message);
      }
    }
    navigate("../MHomeC");
  };
  return (
    <div className="flex flex-row justify-between w-screen h-screen">
      <div
        className="bg-white flex flex-col justify-between"
        style={{ backgroundColor: "#c2c0bc" }}
      >
        <div className="me-7">
          <Sidebar />
        </div>
        <div>
          <FiLogOut
            className="ms-8"
            style={{ color: "#061ba1", fontSize: "40px" }}
          />
        </div>
      </div>

      <div className="flex flex-row gap-16 ms-24">
        <div className="flex flex-col mt-5">
          <div className="flex flex-row justify-between">
            <div className="bg-[#D9D9D9] h-14 w-52">
              <p className="text-black mt-4 ms-7 ">Approve/Reject User</p>
            </div>
          </div>
          <div></div>
          <div className=" m-8 flex flex-col">
            <div className=" mt-9">
              <Profile
                fullName={fullName}
                profileImage={profilePhoto}
                uniqueDoctorId={contactNumber}
                accountAddedBy={null}
                bool={false}
              />
            </div>
            <div className=" mt-16">
              <IdentityProof
                BasicDetail={update.identityDetails}
                onRadioChange={(option) =>
                  handleRadioChange("managementIdentityProof", option)
                }
                radioData={formData.managementIdentityProof}
              />
            </div>
          </div>
        </div>

        <div className=" mt-32 flex flex-col">
          <div>
            <BasicDetails
              BasicDetail={update}
              onRadioChange={(option) =>
                handleRadioChange("managementBasicDetails", option)
              }
              onRatingChange={handleRatingChange}
              radioData={formData.managementBasicDetails}
            />
          </div>
        </div>

        <div className="flex flex-row mt-[640px] me-10 ms-[-200px]">
          <div className="w-28">
            <Button
              text=" Next >> "
              bgColor="bg-[#24C70A]"
              hoverColor="hover:bg-green-800"
              handleSubmit={manageme}
            />
          </div>
          <div className="w-32 mt-2">
            <span className="text-black  font-medium">Hospital Detail</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MHomeB;
