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
import Dialog from "../../../components/ui/Diloge/Dialog.jsx";
import Buttons from "../../ApproveRejectUsers/ButtonRow/Buttons.jsx";
import ClipBgB from "../../../components/ui/clipPath/ClipBgB.jsx";
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
  const [sniper,setSniper] = useState(false) ;

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
  const handleDialog = (message, isLoading) => {
    setDialog({
      message,
      isLoading,
    });
  };
  const handleSubmit = async (isApproved) => {
    if (isApproved == true) {
      setApproved(isApproved);
      handleDialog("Are you sure you want to Delete Account?", true);
    }
    if (isApproved == false) {
      setApproved(isApproved);
      handleDialog("Are you sure you want to Suspend Account?", true);
    }
  };

  const areUSureDelete = async (choose) => {
    setSniper(true)
    if (choose) {
      if (approved == true) {
        try {
          await axios.post("api/admin/delete/doctor", {
            doctorUniqueId: uniqueDoctorId,
          });
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
          await axios.post("api/admin/doctors/suspend", {
            uniqueDoctorId: uniqueDoctorId,
          });
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
    setSniper(false)
  };
  return (
    <div className="flex flex-row justify-between w-screen bg-[#0529BB]">
      <div
        className="bg-[#0529BB] flex flex-col justify-between"
        style={{ backgroundColor: "#c2c0bc" }}
      >
        <div className="me-7">
          <Sidebar someData={{ index: 5 }}/>
        </div>
        <div>
          <FiLogOut
            className="ms-8"
            style={{ color: "#061ba1", fontSize: "40px" }}
          />
        </div>
      </div>

      {/* <div className="flex flex-row  "> */}


        <div className="flex flex-col me-36   ">


          <div className="flex flex-row justify-between">
            {/* <div className="bg-[#FF0B0B] h-14 w-52">
              <p className="text-white mt-4 ms-7 ">Approve/Reject User</p>
            </div> */}
            <ClipBgB width='w-[290px]' height='h-[55px]'  bardervar="32px" 
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
          <hr/>
          <IdentityProof BasicDetail={update.identityDetails} />
          </div>
          <div className=" flex flex-col">
          <Educationdetail BasicDetail={update.education} />
          <hr/>
          <RegistrationDetail BasicDetail={update.registration} />
          </div>

          </div>

          </div>

         


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
          {/* <div className=" flex flex-row gap-5 mt-7 ms-24">
          <div>
          <Button
              text=" Next >> "
              bgColor="bg-[#24C70A]"
              hoverColor="hover:bg-green-800"
              handleSubmit={manageme}
            />
          </div>
            <div className="text-white   text-3xl">Hospital Detail</div>
          </div>
           */}
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
