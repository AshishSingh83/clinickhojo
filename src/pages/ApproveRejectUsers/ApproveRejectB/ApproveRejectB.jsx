import React, { useEffect, useState } from "react";
import Sidebar from "../../AdminHome/Sidebar/Sidebar";
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
  updateDoctorName
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
    if (savedDataString != "ashish"){
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
    dispatch(updateDoctorName(fullName));
    if (ratingg != "" && rating != ratingg){
      try{
        await axios.post("api/admin/doctors/setRatings", {
          doctorEmail: email,
          rating: ratingToUse,
        });
        navigate("../ApproveRejectC");
      } catch (e) {
        console.log(e.message);
      }
    }
    navigate("../ApproveRejectC");
  };
  return (
    <div className="flex flex-row   bg-[#0529BB] w-screen justify-end  ">
      <div
        className="bg-[#0529BB] w-96"
      >
        <div className="me-7">
          <Sidebar someData={{'index':2}}/>
        </div>
        
      </div>

      <div className="flex flex-row  bg-[#0529BB] me-28">
        <div className="flex flex-col ">
          <div className="flex flex-row justify-between">
            <div className="bg-[#FF0B0B] h-14 w-52">
              <p className="text-white mt-4 ms-7 ">Approve/Reject User</p>
            </div>
          </div>

          <div className=" flex flex-row bg-[#03229F] mt-14  ">
          <div >
          <div className="  mb-7 ms-6 bg-[#03229F] mt-5">
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

          <div className=" mt-14">
          <hr/>
          </div>
          <div className=" mt-9">
          <IdentityProof
            BasicDetail={update.identityDetails}
            onRadioChange={(option) =>
              handleRadioChange("doctorIdentityProof", option)
            }
            radioData={formData.doctorIdentityProof}
          />
          </div>
          
          </div>

          <div className=" flex flex-col gap-4 mt-[142px] ms-16">
          <Educationdetail
            BasicDetail={update.education}
            onRadioChange={(option) =>
              handleRadioChange("doctorEducationDetail", option)
            }
            radioData={formData.doctorEducationDetail}
          />
          <hr/>
          <RegistrationDetail
            BasicDetail={update.registration}
            onRadioChange={(option) =>
              handleRadioChange("doctorRegistration", option)
            }
            radioData={formData.doctorRegistration}
          />
        </div>

          </div>

          <div className="flex flex-row mt-9 ms-80 mb-5 ">
          <div className="">
            <Button
              text=" Next >> "
              bgColor="bg-[#24C70A]"
              hoverColor="hover:bg-green-800"
              handleSubmit={manageme}
            />
          </div>
          <div className=" ">
            <span className="text-white   text-3xl">Clinic Detail</span>
          </div>
        </div>




          
          
        </div>
       


        
        
      </div>
    </div>
  );
}

export default ApproveRejectB;
