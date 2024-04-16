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

function VerifiedClinic() {
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
  const [loading, setLoading] = useState(true);
  const [approved, setApproved] = useState("");

  const uniqueClinicId = useSelector((state) => state.register.uniqueClinicId);
  const doctorEemail = useSelector((state) => state.register.doctorEmail);
  const uniqueDoctorId = useSelector((state) => state.register.uniqueDoctorId);

  const [response, setResponse] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post("api/admin/getParticularClinic", {
          doctorEmail: doctorEemail,
          clinicUniqueId: uniqueClinicId,
        });
        setNormalFee(response.data.clinicKhojoAppointmentFeeEmergency);
        setEmergencyFee(response.data.clinicKhojoAppointmentFeeEmergency);
        setRatingg(response.data.rating);
        setResponse(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        setNoClinic(true);
      }
    }
    fetchData();
  }, []);
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
      handleDialog("Are you sure you want to Approve?", true);
    }
    if (isApproved == false) {
      setApproved(isApproved);
      handleDialog("Are you sure you want to Reject?", true);
    }
  };

  const areUSureDelete = async (choose) => {
    if (choose) {
      if (approved == true) {
        try {
          await axios.post("api/admin/delete/doctor", {
            doctorUniqueId: uniqueDoctorId,
          });
          localStorage.removeItem(`${uniqueDoctorId}a`);
          localStorage.removeItem(`${uniqueDoctorId}b`);
          navigate("../ViewProfileMain");
        } catch (error) {
          console.error("Error:", error);
        }
      }
      if (approved == false) {
        try {
          await axios.post("api/admin/delete/doctor", {
            doctorUniqueId: uniqueDoctorId,
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
  };
  return (
    <>
      {loading && (
        <div className="flex justify-center items-center h-screen text-black  text-3xl">
          <p>Loading...</p>
        </div>
      )}
      {!loading &&
        (noClinic ? (
          <div className="flex flex-row justify-between max-h-[1500px] w-screen">
            <div
              className=" bg-white flex flex-col justify-between"
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
            <div className="text-black  font-medium text-3xl flex justify-center items-center h-screen me-[600px]">
              No clinic is available.
            </div>
          </div>
        ) : (
          response && (
            <>
              <div
                className="flex flex-row justify-between max-h-[1500px] w-screen "
                style={{ backgroundColor: "white" }}
              >
                <div
                  className=" bg-white flex flex-col justify-between"
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
                <div className=" flex flex-col">
                  <div className="      flex flex-row justify-between ms-14 mt-5 ">
                    <div className=" bg-[#D9D9D9] h-14 w-44">
                      <p className=" text-black mt-4 ms-7  ">Clinic Details</p>
                    </div>
                    <div>
                      <p className=" text-black text-2xl underline mt-5 me-[800px]">
                        Clinic Detail
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row   ">
                    <div className="flex flex-col me-10 mt-12">
                      <div className="m-10">
                        <Profile
                          fullName={response.name}
                          profileImage={response.profilePhoto}
                          uniqueDoctorId={response.clinicUniqueId}
                          accountAddedBy={null}
                          bool={true}
                        />
                      </div>
                      <Hbasicdetail BasicDetail={response} />
                      <AppoitmentFee
                        normalFee={normalFee}
                        setNormalFee={setNormalFee}
                        emergencyFee={emergencyFee}
                        setEmergencyFee={setEmergencyFee}
                        BasicDetail={response.ratings}
                        onRatingChange={handleRatingChange}
                        rating={ratingg}
                      />
                      <HregistartionDetail
                        BasicDetail={response.registration}
                      />
                    </div>

                    <div className=" me-5 flex flex-col gap-4 mt-20 ">
                      <div className=" flex flex-row gap-4 ms-[-20px]  ">
                        <div>
                          <Address addData={response.address} />
                        </div>
                        <div>
                          <SessionTimings
                            SessionTimings={response.timingsSlots}
                          />
                        </div>
                      </div>

                      <div className=" ms-[-20px]">
                        <Photos />

                        <div className="  ms-44 mb-10">
                          <Buttons
                            bg="bg-white"
                            handleSubmita={() => handleSubmit(true)}
                            handleSubmitb={() => handleSubmit(false)}
                            texta="Delete Account"
                            textb="Suspend Account"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        ))}

      {dialog.isLoading && (
        <Dialog
          nameProduct={dialog.nameProduct}
          onDialog={areUSureDelete}
          message={dialog.message}
        />
      )}
    </>
  );
}
export default VerifiedClinic;
