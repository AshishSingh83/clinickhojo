import React, { useState } from "react";
import { FiLogOut } from "react-icons/fi";
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
    accountAddedBy,
    rating,
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
        setMessage("SubAdmin can not Delete/Suspend account");
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
    <div className="flex flex-row justify-between w-screen bg-[#0529BB]">
      <div
        className="bg-[#0529BB] flex flex-col justify-between"
        style={{ backgroundColor: "#c2c0bc" }}
      >
        <div className="me-7">
          <Sidebar someData={{ index: 5 }} />
        </div>
        <div>
          <FiLogOut
            className="ms-8"
            style={{ color: "#061ba1", fontSize: "40px" }}
          />
        </div>
      </div>

      <div className="flex flex-col me-36   ">
        <div className="flex flex-row justify-between">
          <ClipBgB
            width="w-[290px]"
            height="h-[55px]"
            bardervar="32px"
            text="View Profile"
          />
        </div>

        <div className="bg-[#03229F] mt-16 ">
          <div className=" mb-7 ms-6 bg-[#03229F] mt-5">
            <Profile
              fullName={fullName}
              profileImage={profileImage}
              uniqueDoctorId={uniqueDoctorId}
              accountAddedBy={accountAddedBy}
              bool={true}
            />
          </div>

          <div className=" flex flex-row gap-24">
            <div className=" flex flex-col">
              <BasicDetails
                BasicDetail={update}
                onRatingChange={handleRatingChange}
                email={email}
              />
              <div className=" mt-14">
                <hr />
              </div>

              <IdentityProof BasicDetail={update.identityDetails} />
            </div>
            <div className=" flex flex-col">
              <Educationdetail BasicDetail={update.education} />
              <div className=" mt-5 mb-4">
                <hr />
              </div>
              <RegistrationDetail BasicDetail={update.registration} />
            </div>
          </div>
        </div>

        <div className=" flex flex-row">
          <div className="flex flex-row mt-9  mb-5 ">
            <div className=" ms-40 mb-10 mt-7 ">
              <Buttons
                bg="bg-[#0529BB]"
                handleSubmita={() => handleSubmit(true)}
                handleSubmitb={() => handleSubmit(false)}
                texta="Delete Account"
                textb="Suspend Account"
              />
            </div>
          </div>
          <p className=" text-red-600 ms-20 text-lg mt-16">{message}</p>
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
