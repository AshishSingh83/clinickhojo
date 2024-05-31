
import React, { useState } from "react";
import IdentityProof from "./IdentityProof";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  updateDoctorEmail,
  updateUniqueClinicId,
  updateUniqueDoctorId,
} from "../../../data/features/registerSlice.js";
import Sidebar from "../../AdminHome/Sidebar/Sidebar.jsx";
import Profile from "../../ApproveRejectUsers/ApproveRejectB/Profile.jsx";
import BasicDetails from "./BasicDetails.jsx";
import RegistrationDetail from "./RegistrationDetail.jsx";
import Educationdetail from "./Educationdetail.jsx";
import Dialog from "../../../components/ui/Diloge/Dialog.jsx";
import Buttons from "../../ApproveRejectUsers/ButtonRow/Buttons.jsx";
import ClipBgB from "../../../components/ui/clipPath/ClipBgB.jsx";
import instance from "../../../axios.js";
import emailService from "../../../components/ui/emailService.js";
import checkAdmin from "../../Protected/checkAdmin.js";

function VerifiedDoctorProfile() {
  const dispatch = useDispatch();
  const update = useSelector((state) => state.register.doctorData);
  const {
    fullName,
    profileImage,
    uniqueDoctorId,
    email,
    clinicUniqueId,
    rating,
    marketingInternId
  } = update || {};
  const navigate = useNavigate();
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
  });
  const [ratingg, setRating] = useState("");
  const [approved, setApproved] = useState("");
  const [sniper, setSniper] = useState(false);
  const [message, setMessage] = useState("");
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
        await instance.post("api/admin/doctors/setRatings", {
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
  const handleDialog = (message, isLoading) => {
    setDialog({
      message,
      isLoading,
    });
  };
  const handleSubmit = async (isApproved) => {
    if (isApproved == true) {
      const check = await checkAdmin();
      if (check) {
        setApproved(isApproved);
        handleDialog("Are you sure you want to Delete Account?", true);
      } else {
        setMessage("SubAdmin can not Delete account");
      }
    }
    if (isApproved == false) {
      setApproved(isApproved);
      handleDialog("Are you sure you want to Suspend Account?", true);
    }
  };

  const areUSureDelete = async (choose) => {
    setSniper(true);
    if (choose) {
      if (approved == true) {
        try {
          const response = await instance.post("api/admin/delete/doctor", {
            doctorUniqueId: uniqueDoctorId,
          });
          const message = "your doctor profile deleted";
          console.log("response", response.data);
          await emailService({ message, toName: fullName, email });
          if (localStorage.getItem(`${uniqueDoctorId}a`) !== null) {
            localStorage.removeItem(`${uniqueDoctorId}a`);
          }
          if (localStorage.getItem(`${uniqueDoctorId}b`) !== null) {
            localStorage.removeItem(`${uniqueDoctorId}b`);
          }
          navigate("../ViewProfileMain");
        } catch (error) {
          console.error("Error:", error);
        }
      }
      if (approved == false) {
        try {
          await instance.post("api/admin/doctors/suspend", {
            uniqueDoctorId: uniqueDoctorId,
          });
          const message = "your doctor profile suspended";
          await emailService({ message, toName: fullName, email });
          localStorage.removeItem(`${uniqueDoctorId}a`);
          localStorage.removeItem(`${uniqueDoctorId}b`);
          navigate("../ViewProfileMain");
        } catch (error) {
          console.error("Error:", error);
        }
      }
    } else {
      handleDialog("", false);
    }
    setSniper(false);
  };
  return (
    <div className="flex flex-col md:flex-row justify-around 2xl:justify-center w-screen bg-[#0529BB]">
      <div className="bg-[#0529BB] flex flex-col md:w-1/4 lg:w-1/5">
        <div className="me-7">
          <Sidebar someData={{ index: 5 }} />
        </div>
      </div>
      <div className="flex flex-col 2xl:justify-center md:flex-1  ">
        <div className="flex justify-center md:justify-start mb-5 md:mb-0">
          <ClipBgB
            width="w-[290px]"
            height="h-[55px]"
            bardervar="32px"
            text="View Profile"
          />
        </div>

        <div className="bg-[#03229F]  p-4 md:p-8 rounded-lg mt-9">
          <div className="mb-7">
            <Profile
              fullName={fullName}
              profileImage={profileImage}
              uniqueDoctorId={uniqueDoctorId}
              accountAddedBy={marketingInternId}
              bool={true}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="flex flex-col w-full md:w-1/2">
              <BasicDetails
                BasicDetail={update}
                onRatingChange={handleRatingChange}
                email={email}
              />
              <div className="md:mt-16 mb-2">
                <hr />
              </div>
              <IdentityProof BasicDetail={update.identityDetails} />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <Educationdetail BasicDetail={update.education} />
              <div className="mt-4 mb-4">
                <hr />
              </div>
              <RegistrationDetail BasicDetail={update.registration} />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-8">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5 ">
            <Buttons
              bg="bg-[#0529BB]"
              handleSubmita={() => handleSubmit(true)}
              handleSubmitb={() => handleSubmit(false)}
              texta="Delete Account"
              textb="Suspend Account"
            />
            <p className="text-red-600 text-lg">{message}</p>
          </div>
        </div>
      </div>

      {dialog.isLoading && (
        <Dialog
          nameProduct={dialog.nameProduct}
          onDialog={areUSureDelete}
          message={dialog.message}
          sniper={sniper}
        />
      )}
    </div>
  );
}

export default VerifiedDoctorProfile;
