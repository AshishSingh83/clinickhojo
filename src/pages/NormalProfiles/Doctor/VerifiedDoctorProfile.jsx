import React, { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import IdentityProof from "./IdentityProof";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  updateDoctorEmail,
  updateUniqueClinicId,
  updateUniqueDoctorId,
} from "../../../data/features/registerSlice.js";
import axios from "axios";
import Sidebar from "../../AdminHome/Sidebar/Sidebar.jsx";
import Profile from "../../ApproveRejectUsers/ApproveRejectB/Profile.jsx";
import BasicDetails from "./BasicDetails.jsx";
import RegistrationDetail from "./RegistrationDetail.jsx";
import Educationdetail from "./Educationdetail.jsx";
import Button from "../../../components/ui/Button.jsx";

function VerifiedDoctorProfile() {
  const dispatch = useDispatch();
  const update = useSelector((state) => state.register.doctorData);
  const {
    fullName,
    profileImage,
    uniqueDoctorId,
    email,
    clinicUniqueId,
    accountAddedBy,
    rating,
  } = update || {};
  const navigate = useNavigate();
  const [ratingg, setRating] = useState("");
  const handleRatingChange = (ratingValue) => {
    setRating(ratingValue);
  };

  const manageme = async () => {
    const ratingToUse = ratingg === "" ? rating : ratingg;
    dispatch(updateDoctorEmail(email));
    dispatch(updateUniqueClinicId(clinicUniqueId[0]));
    dispatch(updateUniqueDoctorId(uniqueDoctorId));
    if (ratingg != "" && rating != ratingg) {
      try {
        await axios.post("api/admin/doctors/setRatings", {
          doctorEmail: email,
          rating: ratingToUse,
        });
        navigate("../VerifiedClinic");
      } catch (e) {
        console.log(e.message);
      }
    }
    navigate("../VerifiedClinic");
  };
  return (
    <div className="flex flex-row justify-between w-screen">
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

          <div className=" m-8">
            <Profile
              fullName={fullName}
              profileImage={profileImage}
              uniqueDoctorId={uniqueDoctorId}
              accountAddedBy={accountAddedBy}
              bool={true}
            />
          </div>
          <BasicDetails
            BasicDetail={update}
            onRatingChange={handleRatingChange}
          />

          <IdentityProof BasicDetail={update.identityDetails} />
        </div>
        <div className="me-8 flex flex-col gap-4 mt-56">
          <Educationdetail BasicDetail={update.education} />
          <RegistrationDetail BasicDetail={update.registration} />
        </div>
        <div className="flex flex-row mt-[640px] me-10">
          <div className="w-28">
            <Button
              text=" Next >> "
              bgColor="bg-[#24C70A]"
              hoverColor="hover:bg-green-800"
              handleSubmit={manageme}
            />
          </div>
          <div className="w-32 mt-2">
            <span className="text-black  font-medium">Clinic Detail</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifiedDoctorProfile;
