import React, { useEffect, useState } from "react";
import Sidebar from "../../AdminHome/Sidebar/Sidebar";
import { FiLogOut } from "react-icons/fi";
import Hbasicdetail from "./Hbasicdetail";
import Photos from "./Photos";
import Profile from "../ApproveRejectB/Profile";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Buttons from "../ButtonRow/Buttons";
import Address from "../ApproveRejectD/Address";
import SessionTimings from "../ApproveRejectD/SessionTimings";
import AppoitmentFee from "../ApproveRejectD/AppoitmentFee";
import WrongInfo from "../ApproveRejectD/WrongInfo";
import { useSelector, useDispatch } from "react-redux";
import HregistartionDetail from "./HregistrationDetail";
import Dialog from "../../../components/ui/Diloge/Dialog.jsx";
function ApproveRejectC() {
  const dispatch = useDispatch();
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
  });
  const [formData, setFormData] = useState({
    remark: "",
  });
  const [newData, setNewData] = useState(null);
  const [formDataC, setFormDataC] = useState({
    HospitalBasicDetail: "",
    HospitalPhotos: "",
    HospitalAddress: "",
    HospitalRegistration: "",
    HospitalTimings: "",
  });
  const [normalFee, setNormalFee] = useState("");
  const [emergencyFee, setEmergencyFee] = useState("");
  const [deleteData, setDeleteData] = useState([]);
  const [noClinic, setNoClinic] = useState(false);
  const [rating, setRating] = useState("");
  const [loading, setLoading] = useState(true);
  const [approved, setApproved] = useState("");

  const uniqueClinicId = useSelector((state) => state.register.uniqueClinicId);
  const doctorEemail = useSelector((state) => state.register.doctorEmail);
  const uniqueDoctorId = useSelector((state) => state.register.uniqueDoctorId);
  useEffect(() => {
    const savedDataString = localStorage.getItem(`${uniqueDoctorId}b`);
    if (savedDataString != "ashish") {
      const savedData = JSON.parse(savedDataString);
      setFormDataC({
        ...JSON.parse(localStorage.getItem(`${uniqueDoctorId}a`)),
        ...savedData,
      });
    } else {
      setFormDataC(JSON.parse(localStorage.getItem(`${uniqueDoctorId}a`)));
    }
  }, []);
  useEffect(() => {
    if (formDataC !== null) {
      localStorage.setItem(`${uniqueDoctorId}b`, JSON.stringify(formDataC));
    }
  }, [formDataC]);

  const handleRadioChange = (name, option) => {
    setFormDataC((prevData) => ({ ...prevData, [name]: option }));
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const [response, setResponse] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post("api/admin/getParticularClinic", {
          doctorEmail: doctorEemail,
          clinicUniqueId: uniqueClinicId,
        });
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
      if (1) {
        try {
          const response = await axios.put("api/admin/approveDoctors", {
            doctorsUniqueId: uniqueDoctorId,
            approvedBy: "Rahul123",
            isApproved: approved,
            addRemark: formData.remark,
          });
          if (approved) {
            await axios.post("api/admin/doctors/clinics/setAppointmentFee", {
              clinicKhojoAppointmentFeeNormal: normalFee,
              clinicKhojoAppointmentFeeEmergency: emergencyFee,
              clinicUniqueId: uniqueClinicId,
              doctorEmail: doctorEemail,
            });
          }
          if (approved) {
            await axios.post("api/admin/doctors/clinic/setRatings", {
              clinicUniqueId: uniqueClinicId,
              rating: rating,
            });
          }
          localStorage.removeItem(`${uniqueDoctorId}a`);
          localStorage.removeItem(`${uniqueDoctorId}b`);
          navigate("../ApproveReject");
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
                    <div className=" bg-[#D9D9D9] h-14 w-52">
                      <p className=" text-black mt-4 ms-7  ">
                        Approve/Reject User
                      </p>
                    </div>
                    <div>
                      <p className=" text-black text-2xl underline mt-5 me-[800px]">
                        Clinic Detail
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row   ">
                    <div className="flex flex-col  ms-16">
                      <div className="m-10">
                        <Profile
                          fullName={response.name}
                          profileImage={response.profilePhoto}
                          uniqueDoctorId={response.clinicUniqueId}
                          accountAddedBy={null}
                          bool={true}
                        />
                      </div>
                      <Hbasicdetail
                        BasicDetail={response}
                        onRadioChange={(option) =>
                          handleRadioChange("HospitalBasicDetail", option)
                        }
                        radioData={formDataC.HospitalBasicDetail}
                      />
                      <AppoitmentFee
                        normalFee={normalFee}
                        setNormalFee={setNormalFee}
                        emergencyFee={emergencyFee}
                        setEmergencyFee={setEmergencyFee}
                        BasicDetail={response.ratings}
                        onRatingChange={handleRatingChange}
                      />

                      <HregistartionDetail
                        BasicDetail={response.registration}
                        onRadioChange={(option) =>
                          handleRadioChange("HospitalRegistration", option)
                        }
                        radioData={formDataC.HospitalRegistration}
                      />
                      <WrongInfo data={formDataC} />
                      <div className=" bg-[#a9a9ab] w-[500px] h-[130px] mb-4 rounded-sm">
                        <div className="h-[130px] ">
                          <textarea
                            id="inputTextArea"
                            name="remark"
                            className=" placeholder-black w-full h-full p-2 resize-none bg-[#a9a9ab]"
                            placeholder="Add Remark..."
                            style={{ color: "black" }}
                            value={formData.remark}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className=" me-5 flex flex-col gap-4 mt-20 ">
                      <div className=" flex flex-row gap-4 ms-[-20px]  ">
                        <div>
                          <Address
                            addData={response.address}
                            onRadioChange={(option) =>
                              handleRadioChange("HospitalAddress", option)
                            }
                            radioData={formDataC.HospitalAddress}
                          />
                        </div>
                        <div>
                          <SessionTimings
                            onRadioChange={(option) =>
                              handleRadioChange("HospitalTimings", option)
                            }
                            SessionTimings={response.timingsSlots}
                            radioData={formDataC.HospitalTimings}
                          />
                        </div>
                      </div>

                      <div className=" ms-[-20px]">
                        <Photos
                          onRadioChange={(option) =>
                            handleRadioChange("HospitalPhotos", option)
                          }
                          radioData={formDataC.HospitalPhotos}
                        />

                        <div className=" mt-28 ms-44">
                          <Buttons
                            bg="bg-white"
                            handleSubmita={() => handleSubmit(true)}
                            handleSubmitb={() => handleSubmit(false)}
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
export default ApproveRejectC;