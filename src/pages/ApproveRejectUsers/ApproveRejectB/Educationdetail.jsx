import React, { useEffect, useState } from "react";
import RadioButtons from "../../../components/ui/RadioButtons.jsx";
const Educationdetail = ({ BasicDetail, onRadioChange, radioData }) => {
  const [doctorEducationDetailOption, setDoctorEducationDetailOption] =
    useState("");
  const [variable, setVariaable] = useState("");
  var proof;
  if (BasicDetail[0]) {
    const proof = BasicDetail[0].certificates[0];
  }
  useEffect(() => {
    setDoctorEducationDetailOption(radioData);
    if (!proof) {
      setVariaable("pointer-events-none");
    }
  }, [radioData]);
  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setDoctorEducationDetailOption(selectedOption);
    onRadioChange(selectedOption);
  };
  const handleViewProofClick = (proof) => {
    if (proof) {
      window.open(proof, "_blank");
    }
  };
  const renderDetails =
    BasicDetail.length === 0 ? (
      <div className="flex justify-center items-center h-[200px]">
        <p className=" text-xl  text-black">No education details available</p>
      </div>
    ) : BasicDetail.length === 1 ? (
      <div className=" h-[240px] items-center    ">
        <div
          key={BasicDetail[0].degreeName}
          className=" w-[420px] h-[185px] mb-4 rounded-sm ms-3 mt-5 text-white opacity-75  "
        >
          <div className=" font-medium  ms-2 mb-5  ">
            <div className="mt-1">
              <span className="font-sm">College:</span>{" "}
              {BasicDetail[0].collegeName}
              <br />
            </div>
            <div className="mt-1">
              <span className="font-sm">Degree:</span>{"           "}
                   {BasicDetail[0].degreeName}
              <br />
            </div>
            <div className="mt-1">
              <span className="font-sm">Field Of Study:</span>{" "}
              {BasicDetail[0].fieldOfStudy}
              <br />
            </div>
            <div className="mt-1">
              <span className="font-sm">Start Date:</span>{" "}
              {BasicDetail[0].startDate}
              <br />
            </div>
            <div className="mt-1">
              <span className="font-sm">End Date:</span>{" "}
              {BasicDetail[0].passingYear}
              <br />
            </div>
            <div>
              <span
                className={`${variable} inline-block rounded-md cursor-pointer h-9 px-4 py-1 m-1 ms-72 text-sm  text-white pt-2 bg-[#0032FF] `}
                onClick={() =>
                  handleViewProofClick(BasicDetail[0].certificates[0])
                }
              >
                View Proof
              </span>
            </div>
          </div>
        </div>
      </div>
    ) : (
      BasicDetail.map((update) => (
        <div
          key={update.degreeName}
          className=" w-[420px] h-[185px] mb-4 rounded-sm ms-3 text-white"
        >
          <div className=" font-medium  ms-2 mb-5 ">
            <div className="mt-1">
              <span className="font-sm">College:</span> {update.collegeName}
              <br />
            </div>
            <div className="mt-1">
              <span className="font-sm">Degree:</span> {update.degreeName}
              <br />
            </div>
            <div className="mt-1">
              <span className="font-sm">Field Of Study:</span>{" "}
              {update.fieldOfStudy}
              <br />
            </div>
            <div className="mt-1">
              <span className="font-sm">Start Date:</span> {update.startDate}
              <br />
            </div>
            <div className="mt-1">
              <span className="font-sm">End Date:</span> {update.passingYear}
              <br />
            </div>
            <div>
              <span
                className={`${variable} inline-block rounded-md cursor-pointer h-9 px-4 py-1 m-1 ms-72 text-sm  text-white pt-2 bg-[#0032FF] `}
              
                onClick={() => handleViewProofClick(update.certificates[0])}
              >
                View Proof
              </span>
            </div>
          </div>
        </div>
      ))
    );

  return (
    <div style={{width: "450px" }} className=" bg-[#03229F] text-white">
      <div className=" mt-[-12px] rounded-md flex flex-row gap-14">
        <h2 className="text-lg p-2  font-medium">Education Details</h2>
        <div className="mt-3">
          <RadioButtons
            handleChange={handleChange}
            selectedOption={doctorEducationDetailOption}
          />
        </div>
      </div>
      <div style={{ overflow: "auto", maxHeight: "425px" }}>
        {renderDetails}
      </div>
    </div>
  );
};

export default Educationdetail;
