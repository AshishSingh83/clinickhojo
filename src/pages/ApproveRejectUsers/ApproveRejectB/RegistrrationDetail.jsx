// import React, { useEffect, useState } from "react";
// import RadioButtons from "../../../components/ui/RadioButtons";
// const RegistrationDetail = React.memo(({ BasicDetail, onRadioChange,radioData }) => {
//   const [doctorRegistrationDetail, setDoctorRegistrationDetail] = useState("");
//   const [variable,setVariaable] = useState('') ;
//   const proof = BasicDetail.registrationProof[0];
//   useEffect(()=>{
//     setDoctorRegistrationDetail(radioData)
//     if(!proof){
//       setVariaable('pointer-events-none')
//     }
//   },[radioData])
//   const handleChange = (event) => {
//     const selectedOption = event.target.value;
//     setDoctorRegistrationDetail(selectedOption);
//     onRadioChange(selectedOption);
//   };
//   const handleViewProofClick = ()=>{
//     const pdfUrl = `${BasicDetail.registrationProof[0]}`;
//     if(pdfUrl){
//      window.open(pdfUrl, "_blank");
//     }
//   };
//   return (
//     <div
//       className="bg-[#03229F] w-[450px] h-[180px] mb-4 rounded-sm text-white"
//       style={{ width: `${BasicDetail.boxWidth}` }}
//     >
//       <div className="flex flex-row">
//         <h1 className="text-lg ms-4   font-semibold">
//           Registration Detail :
//         </h1>
//         <div className="mt-1 ms-10">
//           <RadioButtons
//             handleChange={handleChange}
//             selectedOption={doctorRegistrationDetail}
//           />
//         </div>
//       </div>
//       <div>
//         <div className=" font-medium  ms-2 mb-5 opacity-75">
//           <div className="mt-3">
//             <span className="font-sm p">Registration Number: </span>
//             {BasicDetail.registrationNumber}
//             <br />
//           </div>
//           <div className="mt-1">
//             <span className="font-sm">Year of Registration : </span>
//             {BasicDetail.yearOfRegistration}
//             <br />
//           </div>
//           <div className="mt-1">
//             <span className="font-sm">Registring Authority : </span>
//             {BasicDetail.registrationAuthority}
//             <br />
//           </div>
//           <div className="justify-end">
//             <span className={`${variable} inline-block rounded-md cursor-pointer h-9 px-4 py-1 m-1 ms-72 text-sm  text-white pt-2 bg-[#0032FF] `}
//             onClick={(BasicDetail)=>handleViewProofClick(BasicDetail)}
//             >
//               View Proof
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

// export default RegistrationDetail;
import React, { useEffect, useState } from "react";
import RadioButtons from "../../../components/ui/RadioButtons";
import PdfPopup from "../../../components/ui/PopUpFile";
const RegistrationDetail = React.memo(({ BasicDetail, onRadioChange, radioData }) => {
  const [doctorRegistrationDetail, setDoctorRegistrationDetail] = useState("");
  const [variable, setVariable] = useState('');
  const proof = BasicDetail.registrationProof[0];

  useEffect(() => {
    setDoctorRegistrationDetail(radioData);
    if (!proof) {
      setVariable('pointer-events-none');
    }
  }, [radioData, proof]);

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setDoctorRegistrationDetail(selectedOption);
    onRadioChange(selectedOption);
  };

  const handleViewProofClick = () => {
    const pdfUrl = `${BasicDetail.registrationProof[0]}`;
    // if (pdfUrl) {
    //   window.open(pdfUrl, "_blank");
    // }
    console.log(pdfUrl);
  };

  return (
    <div
      className="bg-[#03229F] w-[450px] h-[180px] mb-4 rounded-sm text-white"
      style={{ width: `${BasicDetail.boxWidth}` }}
    >
      <div className="flex flex-row">
        <h1 className="text-lg ms-4 font-semibold">
          Registration Detail:
        </h1>
        <div className="mt-1 ms-10">
          <RadioButtons
            handleChange={handleChange}
            selectedOption={doctorRegistrationDetail}
          />
        </div>
      </div>
      <div>
        <div className="font-medium ms-2 mb-5 opacity-75">
          <div className="mt-3 flex flex-row">
            <label className="font-sm p">Registration Number:</label>
            <input
              type="text"
              value={BasicDetail.registrationNumber}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-100"
            />
          </div>
          <div className="mt-2 flex flex-row">
            <label className="font-sm">Year of Registration:</label>
            <input
              type="text"
              value={BasicDetail.yearOfRegistration}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-200"
            />
          </div>
          <div className="mt-2 flex flex-row">
            <label className="font-sm">Registering Authority:</label>
            <input
              type="text"
              value={BasicDetail.registrationAuthority}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-100"
            />
          </div>
          <div className="justify-end mt-3">
            <span
              className={`${variable} inline-block rounded-md cursor-pointer h-9 px-4 py-1 m-1 ms-72 text-sm text-white pt-2 bg-[#0032FF]`}
              onClick={handleViewProofClick}
            >
              View Proof
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default RegistrationDetail;
