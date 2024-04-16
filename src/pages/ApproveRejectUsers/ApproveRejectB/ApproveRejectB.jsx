import React, { useEffect, useState } from "react";
import Sidebar from "../../AdminHome/Sidebar/Sidebar";
import { FiLogOut } from "react-icons/fi";
import Profile from "./Profile";
import BasicDetails from "./BasicDetails";
import IdentityProof from "./IdentityProof";
import Educationdetail from "./Educationdetail";
import RegistrationDetail from "./RegistrrationDetail";
import Button from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  updateDoctorEmail,
  updateUniqueClinicId,
  updateUniqueDoctorId,
} from "../../../data/features/registerSlice.js";
import axios from "axios";
function ApproveRejectB() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    doctorBasicDetail: "",
    doctorIdentityProof: "",
    doctorEducationDetail: "",
    doctorRegistration: "",
  });
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
  const handleRadioChange = (name, option) => {
    setFormData((prevData) => ({ ...prevData, [name]: option }));
  };
  const navigate = useNavigate();

  const [ratingg, setRating] = useState("");

  const handleRatingChange = (ratingValue) => {
    setRating(ratingValue);
  };
  useEffect(() => {
    const savedDataString = localStorage.getItem(`${uniqueDoctorId}a`);
    if (savedDataString != "ashish") {
      const savedData = JSON.parse(savedDataString);
      setFormData(savedData);
    }
  }, [uniqueDoctorId]);
  useEffect(() => {
    localStorage.setItem(`${uniqueDoctorId}a`, JSON.stringify(formData));
  }, [formData]);

  const manageme = async () => {
    const ratingToUse = ratingg === "" ? rating : ratingg;
    dispatch(updateDoctorEmail(email));
    dispatch(updateUniqueClinicId(clinicUniqueId[0]));
    dispatch(updateUniqueDoctorId(uniqueDoctorId));
    try {
      await axios.post("api/admin/doctors/setRatings", {
        doctorEmail: email,
        rating: ratingToUse,
      });
      navigate("../ApproveRejectC");
    } catch (e) {
      console.log(e.message);
    }
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
            onRadioChange={(option) =>
              handleRadioChange("doctorBasicDetail", option)
            }
            onRatingChange={handleRatingChange}
            radioData={formData.doctorBasicDetail}
          />
          <IdentityProof
            BasicDetail={update.identityDetails}
            onRadioChange={(option) =>
              handleRadioChange("doctorIdentityProof", option)
            }
            radioData={formData.doctorIdentityProof}
          />
        </div>
        <div className="me-8 flex flex-col gap-4 mt-56">
          <Educationdetail
            BasicDetail={update.education}
            onRadioChange={(option) =>
              handleRadioChange("doctorEducationDetail", option)
            }
            radioData={formData.doctorEducationDetail}
          />
          <RegistrationDetail
            BasicDetail={update.registration}
            onRadioChange={(option) =>
              handleRadioChange("doctorRegistration", option)
            }
            radioData={formData.doctorRegistration}
          />
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

export default ApproveRejectB;
