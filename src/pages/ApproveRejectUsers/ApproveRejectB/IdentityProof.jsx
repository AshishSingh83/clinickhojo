import React, { useEffect, useState } from "react";
import RadioButtons from "../../../components/ui/RadioButtons";

const IdentityProof = ({ BasicDetail, onRadioChange, radioData }) => {
  const [doctorIdentityProofOption, setDoctorIdentityProofOption] =
    useState("");
  const [variable, setVariable] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [pdfURL, setPdfURL] = useState("");
  const proof = BasicDetail.identityProof[0];

  useEffect(() => {
    setDoctorIdentityProofOption(radioData);
    if (!proof) {
      setVariable("pointer-events-none");
    }
  }, [radioData, proof]);

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setDoctorIdentityProofOption(selectedOption);
    onRadioChange(selectedOption);
  };
  const handleViewProofClick = () => {
    const pdfUrl = `${BasicDetail.identityProof[0]}`;
    console.log(pdfUrl);
    setPdfURL(pdfUrl);
    if (pdfUrl) {
      window.open(pdfUrl, "_blank");
    }
    
  };
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="bg-[#03229F] md:w-[500px] md:h-[158px] mb-4 rounded-sm text-white">
      <div className="flex flex-row">
        <h1 className="text-lg ms-5 font-semibold mt-1 text-white">
          Identity Proof:
        </h1>
        <div className="mt-1 md:ms-20 ">
          <RadioButtons
            handleChange={handleChange}
            selectedOption={doctorIdentityProofOption}
          />
        </div>
      </div>
      <div className=" opacity-95">
        <div className="font-medium ms-2 mb-5">
          <div className="mt-3 flex flex-col md:flex-row">
            <label className="font-sm ">Type of Id:</label>
            <input
              type="text"
              value={BasicDetail.identityType || "null"}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-90 h-7 border-none text-black rounded-sm text-center md:ms-3 text-opacity-100"
            />
          </div>
          <div className="mt-3 flex flex-col md:flex-row">
            <label className="font-sm ">Unique Id number:</label>
            <input
              type="text"
              value={BasicDetail.uniqueIdNumber || "null"}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-90 h-7 border-none text-black rounded-sm text-center md:ms-3 text-opacity-100 "
            />
          </div>
          <div className="justify-end mt-2 opacity-100">
            <span
              className={`${variable}  inline-block  rounded-md cursor-pointer  h-10 px-4 py-1 m-1 md:ms-72   text-white pt-2`}
              style={{ backgroundColor: "green" }}
              onClick={handleViewProofClick}
            >

              <p className=" text-white">View Proof</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityProof;
