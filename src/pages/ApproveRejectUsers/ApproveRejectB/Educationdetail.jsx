import React, { useEffect, useState } from "react";
import RadioButtons from "../../../components/ui/RadioButtons.jsx";

const Educationdetail = ({ BasicDetail, onRadioChange, radioData }) => {
  console.log(BasicDetail);
  const [doctorEducationDetailOption, setDoctorEducationDetailOption] =
    useState("");
  const [variable, setVariable] = useState("");
  let proof;
  if (BasicDetail[0]) {
    proof = BasicDetail[0].certificates[0];
  }

  useEffect(() => {
    setDoctorEducationDetailOption(radioData);
    if (!proof) {
      setVariable("pointer-events-none");
    }
  }, [radioData, proof]);

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
      <div className="flex justify-center items-center h-[200px] ">
        <p className="text-xl text-white font-medium">
          No education details available
        </p>
      </div>
    ) : BasicDetail.length === 1 ? (
      <div className="h-[240px] items-center">
        <div
          key={BasicDetail[0].degreeName}
          className="w-[420px] h-[185px] mb-4 rounded-sm ms-3 mt-5 text-white opacity-90"
        >
          <div className="font-medium ms-2 mb-5 ">
            <div className="mt-1 flex flex-row gap-3">
              <label className="font-sm">College:</label>
              <input
                type="text"
                value={BasicDetail[0].collegeName}
                readOnly
                className="bg-[#FFFFFF] bg-opacity-90 border-none text-black rounded-sm text-center ms-3 text-opacity-100 h-7"
              />
            </div>
            <div className="mt-2 flex flex-row gap-3">
              <label className="font-sm">Degree:</label>
              <input
                type="text"
                value={BasicDetail[0].degreeName}
                readOnly
                className="bg-[#FFFFFF] bg-opacity-90 border-none text-black rounded-sm text-center ms-3 text-opacity-100 h-7"
              />
            </div>
            <div className="mt-2 flex flex-row gap-3">
              <label className="font-sm">Passing Year:</label>
              <input
                type="text"
                value={BasicDetail[0].passingYear}
                readOnly
                className="bg-[#FFFFFF] bg-opacity-90 border-none text-black rounded-sm text-center ms-3 text-opacity-100 h-7"
              />
            </div>
            <div className="mt-2 flex flex-row gap-3">
              <label className="font-sm">Start Date:</label>
              <input
                type="text"
                value={BasicDetail[0].startDate}
                readOnly
                className="bg-[#FFFFFF] bg-opacity-90 border-none text-black rounded-sm text-center ms-3 text-opacity-100 h-7"
              />
            </div>
            <div className="mt-2 flex flex-row gap-3">
              <label className="font-sm">End Date:</label>
              <input
                type="text"
                value={BasicDetail[0].endDate}
                readOnly
                className="bg-[#FFFFFF] bg-opacity-90 border-none text-black rounded-sm text-center ms-3 text-opacity-100 h-7"
              />
            </div>
            <div>
              <span
                className={`${variable} inline-block rounded-md cursor-pointer h-9 px-4 py-1 m-1 ms-72 text-sm text-white pt-2 bg-[green]`}
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
          className="md:w-[420px] md:h-[185px] mb-4 rounded-sm ms-3 text-white opacity-90"
        >
          <div className="font-medium md:ms-2 mb-5">
            <div className="mt-2 flex flex-row gap-3">
              <label className="font-sm">College:</label>
              <input
                type="text"
                value={update.collegeName}
                readOnly
                className="bg-[#FFFFFF] bg-opacity-90 border-none text-black rounded-sm text-center md:ms-3 text-opacity-100 h-7"
              />
            </div>
            <div className="mt-2 flex flex-row gap-3">
              <label className="font-sm">Degree:</label>
              <input
                type="text"
                value={update.degreeName}
                readOnly
                className="bg-[#FFFFFF] bg-opacity-90 border-none text-black rounded-sm text-center md:ms-3 text-opacity-100 h-7"
              />
            </div>
            <div className="mt-2 flex flex-row gap-3">
              <label className="font-sm">Passing Year:</label>
              <input
                type="text"
                value={update.passingYear}
                readOnly
                className="bg-[#FFFFFF] bg-opacity-90 border-none text-black rounded-sm text-center md:ms-3 text-opacity-100 h-7"
              />
            </div>
            <div className="mt-2 flex flex-row gap-3">
              <label className="font-sm">Start Date:</label>
              <input
                type="text"
                value={update.startDate}
                readOnly
                className="bg-[#FFFFFF] bg-opacity-90 border-none text-black rounded-sm text-center md:ms-3 text-opacity-100 h-7"
              />
            </div>
            <div className="mt-2 flex flex-row gap-3">
              <label className="font-sm">End Date:</label>
              <input
                type="text"
                value={update.endDate}
                readOnly
                className="bg-[#FFFFFF] bg-opacity-90 border-none text-black rounded-sm text-center md:ms-3 text-opacity-100 h-7"
              />
            </div>
            <div>
              <div
                className={`${variable} inline-block rounded-md cursor-pointer h-9 px-4 py-1 m-2 md:ms-72 text-sm text-white pt-2 bg-[green] `}
                onClick={() => handleViewProofClick(update.certificates[0])}
              >
                View Proof
              </div>
            </div>
          </div>
        </div>
      ))
    );

  return (
    <div className="bg-[#03229F] text-white md:w-[450px]">
      <div className="mt-[-12px] rounded-md flex flex-row md:gap-14">
        <h2 className="text-lg p-2 font-medium">Education Details</h2>
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

