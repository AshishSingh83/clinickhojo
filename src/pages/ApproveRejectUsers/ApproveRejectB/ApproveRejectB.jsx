import React, { useEffect, useState } from "react";
import Sidebar from "../../AdminHome/Sidebar/Sidebar";
import Profile from "./Profile";
import BasicDetails from "./BasicDetails";
import IdentityProof from "./IdentityProof";
import Educationdetail from "./Educationdetail";
import RegistrationDetail from "./RegistrrationDetail";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Buttons from "../ButtonRow/Buttons.jsx";
import Dialog from "../../../components/ui/Diloge/Dialog.jsx";
import ClipBgB from "../../../components/ui/clipPath/ClipBgB.jsx";
import emailService from "../../../components/ui/emailService.js";
import instance from "../../../axios.js";

function ApproveRejectB() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    doctorBasicDetail: "",
    doctorIdentityProof: "",
    doctorEducationDetail: "",
    doctorRegistration: "",
  });
  const [textArea, setTextArea] = useState({
    remark: "",
  });
  const [sniper, setSniper] = useState(false);
  const update = useSelector((state) => state.register.doctorData);
  const {
    fullName,
    profileImage,
    uniqueDoctorId,
    email,
    clinicUniqueId,
    accountAddedBy,
    rating,
    marketingInternId

  } = update || '';

  const handleRadioChange = (name, option) => {
    setFormData((prevData) => ({ ...prevData, [name]: option }));
  };
  const navigate = useNavigate();

  const [ratingg, setRating] = useState("");
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
  });
  const [approved, setApproved] = useState("");
  const [message,setMessage] = useState('') ;
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
 
  const handleDialog = (message, isLoading) => {
    setDialog({
      message,
      isLoading,
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTextArea((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (isApproved) => {
   
    const counttt = Object.values(formData).filter(value => value !== "").length;
    if(counttt===4 && ratingg!=='' ){
      setMessage('')
      if (isApproved == true) {
        setApproved(isApproved);
        handleDialog("Are you sure you want to Approve Account?", true);
      }
      if (isApproved == false) {
        setApproved(isApproved);
        handleDialog("Are you sure you want to Reject Account?", true);
      }
    }else{
     setMessage('Please Verify All Document(tick radioButtons) and choose ratings')
    }
  };

  const areUSureDelete = async (choose) => {
    const keysWithNo = Object.keys(formData).filter(
      (key) => formData[key] === "No"
    );
    const message = `You provided wrong ${keysWithNo.join(
      ", "
    )} so your account is rejected.
    remark :${textArea.remark}
    `;
    const successMessage = `We are thrilled to inform you that your account has been successfully approved! Welcome to the ClinicKhojo community.
    remark :${textArea.remark}
    `
    if (choose) {
      setSniper(true);
      if (1) {
        try {
          const response = await instance.put("api/admin/approveDoctors", {
            doctorsUniqueId: uniqueDoctorId,
            approvedBy: "Test123",
            isApproved: approved,
            addRemark: textArea.remark,
          });
          if (!approved) {
            
            const isSent = await emailService({ message, fullName, email });
            console.log(isSent ? 'Email sent successfully' : 'Failed to send email');
          } else {
            try {
              await instance.post("api/admin/doctors/setRatings", {
                doctorEmail: email,
                rating: rating,
              });
              await emailService({ message:successMessage, fullName, email });
              setSniper(false);
              navigate("../ApproveReject");
            } catch (e) {
              console.log(e.message);
            }
          }
          localStorage.removeItem(`${uniqueDoctorId}a`);
          localStorage.removeItem(`${uniqueDoctorId}b`);
          navigate("../ApproveReject");
        } catch (error) {
          console.error("Error:", error);
        }
        setSniper(false);
      }
    } else {
      handleDialog("", false);
    }
  };
  return (
    <div className="flex flex-row   bg-[#0529BB] w-screen justify-end  ">
      <div className="bg-[#0529BB] w-96">
        <div className="me-7">
          <Sidebar someData={{ index: 2 }} />
        </div>
      </div>

      <div className="flex flex-row  bg-[#0529BB] me-28">
        <div className="flex flex-col h-auto ">
          <div className=" ">
            <ClipBgB width="w-[340px]" height="h-[65px]" bardervar="37px" />
          </div>

          <div className=" flex flex-row bg-[#03229F] mt-14  ">
            <div className=" ms-9">
              <div className="  mb-7 ms-6 bg-[#03229F] mt-5">
                <Profile
                  fullName={fullName}
                  profileImage={profileImage}
                  uniqueDoctorId={uniqueDoctorId}
                  accountAddedBy={marketingInternId}
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
                <hr />
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
              <hr />
              <RegistrationDetail
                BasicDetail={update.registration}
                onRadioChange={(option) =>
                  handleRadioChange("doctorRegistration", option)
                }
                radioData={formData.doctorRegistration}
              />
              <hr/>
              <div className=" bg-[#a9a9ab] w-[438px] h-[130px] mb-4 rounded-sm me-">
                <div className="h-[130px] border-zinc-100  ">
                  <textarea
                    id="inputTextArea"
                    name="remark"
                    className=" placeholder-white w-full h-full p-2 resize-none bg-[#335af2] text-white border-white"
                    placeholder="Add Remark..."
                    style={{ color: "white", borderColor: "white" }}
                    value={textArea.remark}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-row">
          <div className="flex flex-row mt-9  mb-5 justify-center items-center ">
           
           <div className=" mb-5 mt-3 ms-12">
             <Buttons
               bg="bg-[#0529BB]"
               handleSubmita={() => handleSubmit(true)}
               handleSubmitb={() => handleSubmit(false)}
               texta="Approve Account"
               textb="Reject Account"
             />
           </div>
         </div>
          <p className=" text-red-600 ms-20 text-lg mt-12">
           {message}
          </p>
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

export default ApproveRejectB;
