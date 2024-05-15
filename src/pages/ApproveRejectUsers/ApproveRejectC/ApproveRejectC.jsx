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
import Skeletonn from "../../../components/ui/SkeletonPage.jsx/Skeletonn.jsx";
import emailjs from '@emailjs/browser';
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
  const doctorName = useSelector((state) => state.register.doctorName);
  useEffect(() => {
    const savedDataString = localStorage.getItem(`${uniqueDoctorId}b`);
    if (savedDataString != "ashish") {
      const savedData = JSON.parse(savedDataString);
      const aaa = JSON.parse(localStorage.getItem(`${uniqueDoctorId}a`));
      setFormDataC({
        ...savedData,
        ...JSON.parse(localStorage.getItem(`${uniqueDoctorId}a`)),
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
    console.log(formData);
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
        console.log(doctorEemail,uniqueClinicId);
        const response = await axios.post("api/admin/getParticularClinic", {
          doctorEmail: doctorEemail,
          clinicUniqueId: uniqueClinicId,
        });
        setResponse(response.data);
        setLoading(false);
      } catch (error){
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
  const areUSureDelete = async (choose) =>{
    const serviceId = 'service_om433u9' ;
    const templateId = 'template_zzith2l';
    const publicKey = '9BN6G8lDUWm0rzkqZ';
    const keysWithNo = Object.keys(formDataC).filter(key => formDataC[key] === "No");
    const message = `You provided wrong ${keysWithNo.join(', ')} so your account is rejected.`;
    const templateParams={
      to_name:doctorName,
      from_name:'ClinicKhojo',
      message:message,
      to_email:doctorEemail
    }
    if (choose) {
      console.log(choose,approved);
      if (1) {
        try{
          const response = await axios.put("api/admin/approveDoctors",{
            doctorsUniqueId: uniqueDoctorId,
            approvedBy: "Rahul123",
            isApproved: approved,
            addRemark: formData.remark,
          });
          if(!approved){
            console.log('email bhej');
            try{
              const eres = await emailjs.send(serviceId,templateId,templateParams,publicKey)
              console.log(eres);
            }catch(e){
              console.log('error sending email',e);
            }
          }else{
            console.log('sent some good gmail');
          }
          if(!noClinic){
            if (approved){
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
        <div className=" text-black  font-medium text-3xl flex flex-row gap-28 h-screen w-screen bg-blue-600 ">
    <div className="flex flex-col justify-between ">
        <div className="me-7">
          <Sidebar someData={{ index: 2 }}/>
        </div>
        <div>
          <FiLogOut className="ms-8" style={{ color: "#061ba1", fontSize: "40px" }} />
        </div>
      </div>
      <div className=" flex  items-center ms-60 mt-16 opacity-60 ">
      <Skeletonn 
      count="9" 
      width={800}
    />
      </div>
    
    </div>
      )}
      {!loading &&
        (noClinic ? (
          <div className="flex flex-row justify-between h-screen w-screen bg-[#03229F] ">
            <div
              className="  flex flex-col justify-between bg-[#03229F]"
              
            >
              <div className="me-7">
                <Sidebar someData={{ index: 2 }} />
              </div>
              <div>
                <FiLogOut
                  className="ms-8"
                  style={{ color: "#061ba1", fontSize: "40px" }}
                />
              </div>
            </div>
            <div className=" flex flex-col gap-9 self-center">
            <div className="text-white  font-medium text-3xl flex justify-center items-center  me-[600px]">
              No clinic is available.
            </div>
              <div className=" ms-5">
                <Buttons
                  bg="bg-[#03229F]"
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
                className="flex flex-row justify-between max-h-[1500px] w-screen  bg-[#0529BB] "
                
              >

                <div
                  className=" bg-[#03229F] flex flex-col justify-between"
                  style={{ backgroundColor: "#c2c0bc" }}
                >
                  <div className="me-7">
                    <Sidebar someData={{ index: 2 }} />
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
                    <div className=" bg-[#FF0B0B] h-14 w-52 ms-5">
                      <p className=" text-white mt-4 ms-7  ">
                        Approve/Reject User
                      </p>
                    </div>
                    <div>
                      <p className=" text-white text-2xl underline mt-5 me-[800px]">
                        Clinic Detail
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row  mt-6 bg-[#03229F] me-3  ">
                    <div className="flex flex-col ms-3 ">
                      <div className="m-11">
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
                      <hr/>
                      <AppoitmentFee
                        normalFee={normalFee}
                        setNormalFee={setNormalFee}
                        emergencyFee={emergencyFee}
                        setEmergencyFee={setEmergencyFee}
                        BasicDetail={response.ratings}
                        onRatingChange={handleRatingChange}
                      />
                      <hr/>

                      <HregistartionDetail
                        BasicDetail={response.registration}
                        onRadioChange={(option) =>
                          handleRadioChange("HospitalRegistration", option)
                        }
                        radioData={formDataC.HospitalRegistration}
                      />
                      <hr/>
                      <WrongInfo data={formDataC} />
                     

                      <div className=" bg-[#a9a9ab] w-[438px] h-[130px] mb-4 rounded-sm me-12">
                        <div className="h-[130px] border-zinc-100 ">
                          <textarea
                            id="inputTextArea"
                            name="remark"
                            className=" placeholder-white w-full h-full p-2 resize-none bg-[#335af2] text-white border-white" 
                            placeholder="Add Remark..."
                            style={{ color: "white",borderColor: "white"  }}
                            value={formData.remark}
                            onChange={handleChange}
                          />
                        </div>
                      </div>


                    </div>



                    <div className="  flex flex-col gap-4 mt-[157px] ">
                      <div className=" flex flex-row gap- ms-[-20px]  ">
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
                      <hr/>
                      <div className=" ms-[-20px]">
                        <Photos
                          onRadioChange={(option) =>
                            handleRadioChange("HospitalPhotos", option)
                          }
                          radioData={formDataC.HospitalPhotos}
                        />
                        <hr/>
                      </div>



                    </div>

                  </div>


                  <div className=" mt-5 mb-5 ms-80 bg-[#0529BB]">
                          <Buttons
                            bg="bg-[#0529BB]"
                            handleSubmita={() => handleSubmit(true)}
                            handleSubmitb={() => handleSubmit(false)}
                          />
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
  )
}
export default ApproveRejectC;
