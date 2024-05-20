// import React, { useEffect, useState } from "react";
// import RadioButtons from "../../../components/ui/RadioButtons.jsx";
// import NumberSelect from "./NumberSelect";

// const renderDetails = (BasicDetailConstant) => {
//   return BasicDetailConstant.map((item) => {
//     const [key, value] = Object.entries(item)[0];
//     if (key === "Bio") {
     
//       return (
//         <div className="mt-2 flex flex-row gap-2" key={key}>
//           <label className="font-sm me-2 mt-2">{key} :</label>
//           <textarea
//             value={value}
//             readOnly
//             className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-opacity-100 p-1 h-9  flex justify-center items-center"
//             style={{ width: "85%", resize: "none" }}
//           />
//           <br />
//         </div>
//       );
//     }
//     else if(key === "Address"){
//       return (
//         <div className="mt-2 flex flex-row gap-2" key={key}>
//           <label className="font-sm me-2 mt-2">{key} :</label>
//           <textarea
//             value={value}
//             readOnly
//             className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-opacity-100 p-1 h-8 text-center"
//             style={{ width: "80%", resize: "none" }}
//           />
//           <br />
//         </div>
//       );
//     }
//     else {
      
//       return (
//         <div className="mt-2" key={key}>
//           <label className="font-sm">{key} :</label>
//           <input
//             type="text"
//             value={value}
//             readOnly
//             className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-100"
//           />
//           <br />
//         </div>
//       );
//     }
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
//     { DOB: `${BasicDetail.dateOfBirth}(yy/mm/dd)` },
//     { "year of Experience": `${BasicDetail.yearsOfExperience || "null"}` },
//     { Specialization: `${specializationList || "null"}` },
//     { Address: `${BasicDetail.address.completeAddress || "null"}` },
//     { Bio: `${BasicDetail.bio || "null"}` },
//   ];

//   return (
//     <div className="bg-[#03229F] w-[500px] h-[360px] mb-4 rounded-sm text-white">
//       <div className="flex flex-row gap-20">
//         <h1 className="text-lg font-semibold ms-6">Basic Details :</h1>
//         <div className="mt-1">
//           <RadioButtons
//             handleChange={handleChange}
//             selectedOption={doctorBasicDetailOption}
//           />
//         </div>
//       </div>
//       <div className="opacity-75">
//         <div className="font-medium mb-5">
//           {renderDetails(BasicDetailConstant)}
//           <div className="flex flex-row">
//             <p className="text-lg mt-2">Provide Rating :</p>
//             <div className="ms-10 mt-1">
//               <NumberSelect onSelect={handleRatingSelect} rating={rating} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BasicDetails;
import React, { useEffect, useState } from "react";
import RadioButtons from "../../../components/ui/RadioButtons.jsx";
import NumberSelect from "./NumberSelect";

const renderDetails = (BasicDetailConstant, specializationValue, setSpecializationValue) => {
  return BasicDetailConstant.map((item) => {
    const [key, value] = Object.entries(item)[0];
    if (key === "Bio") {
      return (
        <div className="mt-2 flex flex-row gap-2" key={key}>
          <label className="font-sm me-2 mt-2">{key}:</label>
          <textarea
            value={value}
            readOnly
            className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-opacity-100 p-1 h-9 flex justify-center items-center"
            style={{ width: "85%", resize: "none" }}
          />
          <br />
        </div>
      );
    } else if (key === "Address") {
      return (
        <div className="mt-2 flex flex-row gap-2" key={key}>
          <label className="font-sm me-2 mt-2">{key}:</label>
          <textarea
            value={value}
            readOnly
            className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-opacity-100 p-1 h-8 text-center"
            style={{ width: "80%", resize: "none" }}
          />
          <br />
        </div>
      );
    } else if (key === "Specialization") {
      return (
        <div className="mt-2 flex flex-row gap-2" key={key}>
        <label className="font-sm me-2 mt-2">{key}:</label>
        <select
          value={specializationValue}
          onChange={(e) => setSpecializationValue(e.target.value)}
          className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-opacity-100 p-1 h-8 text-center"
          style={{ width: "80%" }}
        >
          {value.map((spec, index) => (
            <option key={index} value={spec}>
              {spec}
            </option>
          ))}
        </select>
      </div>
      
      );
    } else {
      return (
        <div className="mt-2" key={key}>
          <label className="font-sm">{key}:</label>
          <input
            type="text"
            value={value}
            readOnly
            className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-100"
          />
          <br />
        </div>
      );
    }
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
  const [disabled, setDisabled] = useState(false);
  const [specializationValue, setSpecializationValue] = useState(BasicDetail.specialization[0] || "");

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

  // async function toggleEditC() {
  //   if (isEditingC) {
  //     setDisabled(true);
  //     try {
  //       await axios.post("api/admin/doctors/setRatings", {
  //         doctorEmail: BasicDetail.email,
  //         rating: selectedRating,
  //       });
  //       setDisabled(false);
  //     } catch (e) {
  //       console.log(e.message);
  //     }
  //   }
  //   setIsEditingC(!isEditingC);
  // }
  console.log(BasicDetail);
  const BasicDetailConstant = [
    { Title: `${BasicDetail.title}` },
    { "Full Name": `${BasicDetail.fullName}` },
    { "Contact Number": `${BasicDetail.contactNumber}` },
    { "Email Id": `${BasicDetail.email}` },
    { Gender: `${BasicDetail.gender}` },
    { DOB: `${BasicDetail.dateOfBirth}(yy/mm/dd)` },
    { "Year of Experience": `${BasicDetail.yearsOfExperience || "null"}` },
    { Specialization: BasicDetail.specialization },
    { Address: `${BasicDetail.address.completeAddress || "null"}` },
    { Bio: `${BasicDetail.bio || "null"}` },
  ];

  return (
    <div className="bg-[#03229F] w-[500px] h-[390px] mb-4 rounded-sm text-white">
      <div className="flex flex-row gap-20">
        <h1 className="text-lg font-semibold ms-6">Basic Details:</h1>
        <div className="mt-1">
          <RadioButtons
            handleChange={handleChange}
            selectedOption={doctorBasicDetailOption}
          />
        </div>
      </div>
      <div className="opacity-75">
        <div className="font-medium mb-5">
          {renderDetails(BasicDetailConstant, specializationValue, setSpecializationValue)}
          <div className="flex flex-row">
            <p className="text-lg mt-2">Provide Rating:</p>
            <div className="ms-10 mt-1">
              <NumberSelect onSelect={handleRatingSelect} rating={rating} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center mt-3">
        <button
          onClick={toggleEditC}
          className={`px-4 py-2 rounded ${
            isEditingC ? "bg-blue-500 text-white" : "bg-gray-500 text-black"
          }`}
        >
          {isEditingC ? "Save" : "Edit"}
        </button>
      </div> */}
    </div>
  );
};

export default BasicDetails;
