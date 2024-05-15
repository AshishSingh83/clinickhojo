// import React, { useEffect, useState } from "react";
// import RadioButtons from "../../../components/ui/RadioButtons";
// const IdentityProof = ({ BasicDetail, onRadioChange, radioData }) => {
//   const [doctorIdentityProofOption, setDoctorIdentityProofOption] =
//     useState("");
//   const [variable, setVariaable] = useState("");
//   const proof = BasicDetail.identityProof[0];
//   useEffect(() => {
//     setDoctorIdentityProofOption(radioData);
//     if (!proof) {
//       setVariaable("pointer-events-none");
//     }
//   }, [radioData]);
//   const handleChange = (event) => {
//     const selectedOption = event.target.value;
//     setDoctorIdentityProofOption(selectedOption);
//     onRadioChange(selectedOption);
//   };

//   const handleViewProofClick = () => {
//     const pdfUrl = `${BasicDetail.identityProof[0]}`;
//     window.open(pdfUrl, "_blank");
//   };

//   return (
//     <div className="bg-[#03229F] w-[500px] h-[158px] mb-4 rounded-sm text-white ">
//       <div className="flex flex-row">
//         <h1 className="text-lg ms-5  font-semibold mt-1  text-white">
//           Identity Proof :
//         </h1>
//         <div className="mt-1 ms-20">
//           <RadioButtons
//             handleChange={handleChange}
//             selectedOption={doctorIdentityProofOption}
//           />
//         </div>
//       </div>
//       <div className="opacity-75">
//         <div className="font-medium  ms-2 mb-5">
//           <div className="mt-3">
//             <span className="font-sm p">Type of Id : </span>
//             {BasicDetail.identityType || "null"}
//             <br />
//           </div>
//           <div className="mt-1">
//             <span className="font-sm">Unique Id number : </span>
//             {BasicDetail.uniqueIdNumber || "null"}
//             <br />
//           </div>

//           <div className="justify-end ">
//             <span
//               className={`${variable} inline-block rounded-md cursor-pointer h-9 px-4 py-1 m-1 ms-72 text-sm  text-white pt-2  `}
//               style={{ backgroundColor: "#0032FF" }}
//               onClick={handleViewProofClick}
//             >
//               View Proof
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IdentityProof;
import React, { useEffect, useState } from "react";
import RadioButtons from "../../../components/ui/RadioButtons";

const IdentityProof = ({ BasicDetail, onRadioChange, radioData }) => {
  const [doctorIdentityProofOption, setDoctorIdentityProofOption] = useState("");
  const [variable, setVariable] = useState("");
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
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="bg-[#03229F] w-[500px] h-[158px] mb-4 rounded-sm text-white">
      <div className="flex flex-row">
        <h1 className="text-lg ms-5 font-semibold mt-1 text-white">
          Identity Proof:
        </h1>
        <div className="mt-1 ms-20">
          <RadioButtons
            handleChange={handleChange}
            selectedOption={doctorIdentityProofOption}
          />
        </div>
      </div>
      <div className="opacity-75">
        <div className="font-medium ms-2 mb-5">
          <div className="mt-3 flex flex-row">
            <label className="font-sm p">Type of Id:</label>
            <input
              type="text"
              value={BasicDetail.identityType || "null"}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-100"
            />
          </div>
          <div className="mt-2 flex flow-row">
            <label className="font-sm">Unique Id number:</label>
            <input
              type="text"
              value={BasicDetail.uniqueIdNumber || "null"}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-100"
            />
          </div>
          <div className="justify-end mt-2">
            <span
              className={`${variable} inline-block rounded-md cursor-pointer h-9 px-4 py-1 m-1 ms-72 text-sm text-white pt-2`}
              style={{ backgroundColor: "#0032FF" }}
              onClick={handleViewProofClick}
            >
              View Proof
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityProof;
