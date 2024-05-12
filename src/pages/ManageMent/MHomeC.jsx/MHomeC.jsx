import React, { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import Hbasicdetail from "./Hbasicdetail";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Dialog from "../../../components/ui/Diloge/Dialog.jsx";
import Sidebar from "../../AdminHome/Sidebar/Sidebar.jsx";
import Photos from "../../ApproveRejectUsers/ApproveRejectC/Photos.jsx";
import Profile from "../../ApproveRejectUsers/ApproveRejectB/Profile.jsx";
import Buttons from "../../ApproveRejectUsers/ButtonRow/Buttons.jsx";
import Address from "../../ApproveRejectUsers/ApproveRejectD/Address.jsx";
import SessionTimings from "../../ApproveRejectUsers/ApproveRejectD/SessionTimings.jsx";
import WrongInfo from "../../ApproveRejectUsers/ApproveRejectD/WrongInfo.jsx";
import HregistartionDetail from "../../ApproveRejectUsers/ApproveRejectC/HregistrationDetail.jsx";
import AppoitmentFee from "../../ApproveRejectUsers/ApproveRejectD/AppoitmentFee.jsx";

function MHomeC() {
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
    hBasicdetail: "",
    hPhotos: "",
    hAddress: "",
    hRegistrationDetail: "",
    hSessionTimings: "",
  });
  const [normalFee, setNormalFee] = useState("");
  const [emergencyFee, setEmergencyFee] = useState("");
  const [deleteData, setDeleteData] = useState([]);
  const [noClinic, setNoClinic] = useState(false);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState("");
  const [approved, setApproved] = useState("");
  const [clinickhojoId, setClinicKhojoId] = useState("");
  const managementContactNumber = useSelector(
    (state) => state.register.managementContactNumber
  );
  const managementEmail = useSelector(
    (state) => state.register.managementEmail
  );
  useEffect(() => {
    const savedDataString = localStorage.getItem(`${managementContactNumber}b`);
    if (savedDataString != "ashish") {
      const savedData = JSON.parse(savedDataString);
      setFormDataC({
        ...savedData,
        ...JSON.parse(localStorage.getItem(`${managementContactNumber}a`)),
      });
    } else {
      setFormDataC(
        JSON.parse(localStorage.getItem(`${managementContactNumber}a`))
      );
    }
  }, [managementContactNumber]);

  useEffect(() => {
    if (formDataC !== null) {
      localStorage.setItem(
        `${managementContactNumber}b`,
        JSON.stringify(formDataC)
      );
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
        const response = await axios.post(
          "api/admin/whileApproval/getParticular/hospital",
          {
            managementEmail: managementEmail,
            hospitalClinicKhojoId: "941887",
          }
        );
        setResponse(response.data.hospital);
        setLoading(false);
      } catch (error) {
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
          const response = await axios.put(
            "api/admin/approve/managementPersonnel",
            {
              managementUniqueId: "908269",
              approvedBy: "Rahul123",
              isApproved: approved,
              addRemark: formData.remark,
            }
          );

          if (approved) {
            await axios.post("api/admin/hospitals/setAppointmentFee", {
              hospitalClinicKhojoId: "117192",
              managementEmail: managementEmail,
              clinicKhojoAppointmentFeeNormal: normalFee,
              clinicKhojoAppointmentFeeEmergency: emergencyFee,
            });
          }
          if (approved) {
            await axios.post("api/admin/hospitals/setRatings", {
              hospitalClinicKhojoId: "062607",
              rating: rating,
            });
          }
          localStorage.removeItem(`${managementContactNumber}a`);
          localStorage.removeItem(`${managementContactNumber}b`);
          navigate("../MHomeB");
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
      {noClinic ? (
        <div className="flex flex-row justify-between max-h-[1500px] w-screen">
          <div
            className=" bg-white flex flex-col justify-between"
            style={{ backgroundColor: "#c2c0bc" }}
          >
            <div className="me-7">
              <Sidebar someData={{'index':6}}/>
            </div>
            <div>
              <FiLogOut
                className="ms-8"
                style={{ color: "#061ba1", fontSize: "40px" }}
              />
            </div>
          </div>
          {/* <div className="text-black  font-medium text-3xl flex justify-center items-center h-screen me-[600px]">
            No Hospital is available.
          </div> */}
          <div className=" flex flex-col gap-9">
            <div className="text-black  font-medium text-3xl flex justify-center items-center  me-[600px]">
            No Hospital is available.
            </div>
              <div className=" ">
                <Buttons
                  bg="bg-white"
                  handleSubmita={() => handleSubmit(true)}
                  handleSubmitb={() => handleSubmit(false)}
                />
              </div>
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
                  <Sidebar someData={{'index':6}}/>
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
                      Hospital Detail
                    </p>
                  </div>
                </div>

                <div className="flex flex-row   ">
                  <div className="flex flex-col  ms-16">
                    <div className="m-10">
                      <Profile
                        fullName={response.name}
                        profileImage={response.profilePhoto}
                        uniqueDoctorId={response.hospitalClinicKhojoId}
                        accountAddedBy={null}
                        bool={false}
                      />
                    </div>
                    <Hbasicdetail
                      BasicDetail={response}
                      onRadioChange={(option) =>
                        handleRadioChange("hBasicdetail", option)
                      }
                      radioData={formDataC.hBasicdetail}
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
                        handleRadioChange("hRegistrationDetail", option)
                      }
                      radioData={formDataC.hRegistrationDetail}
                    />
                    <WrongInfo data={formDataC} newData={newData} />
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
                            handleRadioChange("hAddress", option)
                          }
                          radioData={formDataC.hAddress}
                        />
                      </div>
                      <div>
                        <SessionTimings
                          onRadioChange={(option) =>
                            handleRadioChange("hSessionTimings", option)
                          }
                          SessionTimings={response.timingsSlots}
                          radioData={formDataC.hSessionTimings}
                        />
                      </div>
                    </div>

                    <div className=" ms-[-20px]">
                      <Photos
                        onRadioChange={(option) =>
                          handleRadioChange("hPhotos", option)
                        }
                        radioData={formDataC.hPhotos}
                      />

                      <div className=" mt-14 ms-52">
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
      )}

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

export default MHomeC;
