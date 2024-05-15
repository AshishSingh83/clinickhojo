// import React, { useEffect, useState } from "react";
// import RadioButtons from "../../../components/ui/RadioButtons.jsx";
// import NumberSelect from "./NumberSelect";
// const renderDetails = (BasicDetailConstant) => {
//   return BasicDetailConstant.map((item, index) => {
//     const [key, value] = Object.entries(item)[0];
//     return (
//       <div className="mt-1" key={key}>
//         <span className="font-sm">{key} : </span>
//         <span>{value}</span>
//         <br />
//       </div>
//     );
//   });
// };

// const BasicDetails = ({
//   BasicDetail,
//   onRadioChange,
//   onRatingChange,
//   radioData,
// }) => {
//   const [doctorBasicDetailOption, setDoctorBasicDetailOption] = useState("");
//   const [selectedRating, setSelectedRating] = useState("");
//   const rating = BasicDetail.rating;
//   const handleChange = (event) => {
//     const selectedOption = event.target.value;
//     setDoctorBasicDetailOption(selectedOption);
//     onRadioChange(selectedOption);
//   };
//   useEffect(() => {
//     setDoctorBasicDetailOption(radioData);
//   }, [radioData]);
//   const handleRatingSelect = (rating) => {
//     setSelectedRating(rating);
//     onRatingChange(rating);
//   };

//   const specializationList = BasicDetail.specialization.join(" / ");

//   const BasicDetailConstant = [
//     { Title: `${BasicDetail.title}` },
//     { "Full Name": `${BasicDetail.fullName}` },
//     { "Contact Number": `${BasicDetail.contactNumber}` },
//     { "Email Id": `${BasicDetail.email}` },
//     { Gender: `${BasicDetail.gender}` },
//     { DOB: `${BasicDetail.dateOfBirth}` },
//     { "year of Experience": `${BasicDetail.yearsOfExperience || "null"}` },
//     { Specialization: `${specializationList || "null"}` },
//     { Address: `${BasicDetail.address.city || "null"}` },
//     { Bio: `${BasicDetail.bio || "null"}` },
//   ];

//   return (
//     <div className="bg-[#03229F] w-[500px] h-[360px] mb-4 rounded-sm text-white ">
//       <div className="flex flex-row gap-20">
//         <h1 className="text-lg   font-semibold ms-6">
//           Basic Details :
//         </h1>
//         <div className="mt-1">
//           <RadioButtons
//             handleChange={handleChange}
//             selectedOption={doctorBasicDetailOption}
//           />
//         </div>
//       </div>
//       <div className="opacity-75 ">
//         <div className=" font-medium  ms-2 mb-5">
//           {renderDetails(BasicDetailConstant)}
//           <span className="flex flex-row ">
//             <p className="text-lg mt-1">Provide Rating :</p>
//             <div className="ms-10">
//               <NumberSelect onSelect={handleRatingSelect} rating={rating} />
//             </div>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BasicDetails;
import React, { useEffect, useState } from "react";
import RadioButtons from "../../../components/ui/RadioButtons.jsx";
import NumberSelect from "./NumberSelect";

const renderDetails = (BasicDetailConstant) => {
  return BasicDetailConstant.map((item) => {
    const [key, value] = Object.entries(item)[0];
    return (
      <div className="mt-2" key={key}>
        <label className="font-sm">{key} :</label>
        <input
          type="text"
          value={value}
          readOnly
          className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-100"
        />
        <br />
      </div>
    );
  });
};

const BasicDetails = ({
  BasicDetail,
  onRadioChange,
  onRatingChange,
  radioData,
}) => {
  const [doctorBasicDetailOption, setDoctorBasicDetailOption] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const rating = BasicDetail.rating;
  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setDoctorBasicDetailOption(selectedOption);
    onRadioChange(selectedOption);
  };
  useEffect(() => {
    setDoctorBasicDetailOption(radioData);
  }, [radioData]);
  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
    onRatingChange(rating);
  };

  const specializationList = BasicDetail.specialization.join(" / ");

  const BasicDetailConstant = [
    { Title: `${BasicDetail.title}` },
    { "Full Name": `${BasicDetail.fullName}` },
    { "Contact Number": `${BasicDetail.contactNumber}` },
    { "Email Id": `${BasicDetail.email}` },
    { Gender: `${BasicDetail.gender}` },
    { DOB: `${BasicDetail.dateOfBirth}` },
    { "year of Experience": `${BasicDetail.yearsOfExperience || "null"}` },
    { Specialization: `${specializationList || "null"}` },
    { Address: `${BasicDetail.address.city || "null"}` },
    { Bio: `${BasicDetail.bio || "null"}` },
  ];

  return (
    <div className="bg-[#03229F] w-[500px] h-[360px] mb-4 rounded-sm text-white ">
      <div className="flex flex-row gap-20">
        <h1 className="text-lg font-semibold ms-6">Basic Details :</h1>
        <div className="mt-1">
          <RadioButtons
            handleChange={handleChange}
            selectedOption={doctorBasicDetailOption}
          />
        </div>
      </div>
      <div className="opacity-75">
        <div className="font-medium  mb-5">
          {renderDetails(BasicDetailConstant)}
          <div className="flex flex-row">
            <p className="text-lg mt-2">Provide Rating :</p>
            <div className="ms-10 mt-1">
              <NumberSelect onSelect={handleRatingSelect} rating={rating} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
