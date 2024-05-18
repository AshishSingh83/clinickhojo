import React, { useEffect, useState } from "react";
import Sidebar from "../../AdminHome/Sidebar/Sidebar";
import { FiLogOut } from "react-icons/fi";
import Hbasicdetail from "./Hbasicdetail";
import Photos from "./Photos";
import Profile from "../../ApproveRejectUsers/ApproveRejectB/Profile";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Buttons from "../../ApproveRejectUsers/ButtonRow/Buttons.jsx";
import Address from "./Address";
import SessionTimings from "./SessionTimings";
import AppoitmentFee from "./AppoitmentFee";
import { useSelector, useDispatch } from "react-redux";
import HregistartionDetail from "./HregistartionDetail.jsx";
import Dialog from "../../../components/ui/Diloge/Dialog.jsx";
import Skeletonn from "../../../components/ui/SkeletonPage.jsx/Skeletonn.jsx";
import ClipBgB from "../../../components/ui/clipPath/ClipBgB.jsx";
function VerifiedHospital() {
  const dispatch = useDispatch();
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
  });

  const [normalFee, setNormalFee] = useState("");
  const [emergencyFee, setEmergencyFee] = useState("");
  const [ratingg, setRatingg] = useState("");
  const [noClinic, setNoClinic] = useState(false);
  const [rating, setRating] = useState("");
  const [loading, setLoading] = useState(false);
  const [approved, setApproved] = useState(""); 
  const [sniper,setSniper] = useState(false)

  const response = useSelector((state) => state.register.hospitalData);
  console.log('hos res',response);
  const hospitalClinicKhojoId = response.hospitalClinicKhojoId ;
  const managementEmail = response.managementEmail ;
  //   const uniqueClinicId = useSelector((state) => state.register.uniqueClinicId);
  //   const doctorEemail = useSelector((state) => state.register.doctorEmail);
  //   const uniqueDoctorId = useSelector((state) => state.register.uniqueDoctorId);

  //   const [response, setResponse] = useState(null);

  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const response = await axios.post("api/admin/getParticularClinic", {
  //           doctorEmail: doctorEemail,
  //           clinicUniqueId: uniqueClinicId,
  //         });
  //         setNormalFee(response.data.clinicKhojoAppointmentFeeEmergency);
  //         setEmergencyFee(response.data.clinicKhojoAppointmentFeeEmergency);
  //         setRatingg(response.data.rating);
  //         setResponse(response.data);
  //         setLoading(false);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //         setLoading(false);
  //         setNoClinic(true);
  //       }
  //     }
  //     fetchData();
  //   }, []);
  const navigate = useNavigate();
  const handleRatingChange = (ratingValue) => {
    setRating(ratingValue);
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
    console.log(hospitalClinicKhojoId,managementEmail);
    setSniper(true)
    if (choose) {
      if (approved == true) {
        try {
          await axios.post("api/admin/hospitals/delete", {
            "hospitalClinicKhojoId":"094210",
        "managementEmail":"johndoe@hospital27.com"
        });
          localStorage.removeItem(`${uniqueDoctorId}a`);
          localStorage.removeItem(`${uniqueDoctorId}b`);
          navigate("../ViewProfileMain");
        } catch (error) {
          console.error("Error:", error.message);
        }
      }
      if (approved == false) {
        try {
          await axios.post("api/admin/hospitals/suspend", {
            hospitalClinicKhojoId,
            managementEmail,
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
    <>
      <div className="flex flex-row justify-end max-h-[1500px] w-screen bg-[#0529BB]">
        <div
          className=" bg-white flex flex-col justify-between"
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
        <div className=" flex flex-col ms-52 bg-[#0529BB] me-6">
          <div className="      flex flex-row  ms-14   ">
            {/* <div className=" bg-[#FF0B0B] h-14 w-44">
                      <p className=" text-white mt-4 ms-7  ">Hospitals Details</p>
                    </div> */}
            <ClipBgB
              width="w-[290px]"
              height="h-[55px]"
              bardervar="32px"
              text="View Profile"
            />
            <div >
              <p className=" text-white text-2xl underline mt-5 ms-20">
                Hospital Detail
              </p>
            </div>
          </div>

          <div className="flex flex-row  mt-6 bg-[#03229F] w-[1233px]">
            <div className="flex flex-col ">
              <div className="m-11">
                <Profile
                  fullName={response.name}
                  profileImage={response.profilePhoto}
                  uniqueDoctorId={response.hospitalClinicKhojoId}
                  accountAddedBy={null}
                  bool={false}
                />
              </div>

              <div className=" flex flex-row">
                <div className=" flex flex-col">
                  <Hbasicdetail BasicDetail={response} />
                  <hr />
                  <AppoitmentFee
                    normalFee={normalFee}
                    setNormalFee={setNormalFee}
                    emergencyFee={emergencyFee}
                    setEmergencyFee={setEmergencyFee}
                    BasicDetail={response.ratings}
                    onRatingChange={handleRatingChange}
                    rating={ratingg}
                  />
                  <hr />
                  <HregistartionDetail
                    BasicDetail={response.registration || {}}
                  />
                  <hr />
                </div>

                <div className=" flex flex-col me-7">
                  <div className=" flex flex-row gap-3">
                    <Address addData={response.address} />
                    {/* <SessionTimings
                            SessionTimings={response.timingsSlots}
                          /> */}
                  </div>
                  <hr />
                  <div>
                    <Photos />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" ms-56 mb-10 mt-7 ">
            <Buttons
              bg="bg-[#0529BB]"
              handleSubmita={() => handleSubmit(true)}
              handleSubmitb={() => handleSubmit(false)}
              texta="Delete Account"
              textb="Suspend Account"
            />
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
    </>
  );
}
export default VerifiedHospital;
