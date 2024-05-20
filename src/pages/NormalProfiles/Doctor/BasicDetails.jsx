
// import React, { useState } from "react";
// import NumberSelect from "../../ApproveRejectUsers/ApproveRejectB/NumberSelect";
// import { FaEdit, FaSave } from "react-icons/fa";
// import Button from "../../../components/ui/Button";
// import axios from "axios";

// const renderDetails = (BasicDetailConstant, isEditingC, bioValue, setBioValue, addressValue, setAddressValue) => {
//   return BasicDetailConstant.map((item) => {
//     const [key, value] = Object.entries(item)[0];
//     if (key === "Bio") {
//       return (
//         <div className="mt-2" key={key}>
//           <label className="font-sm">{key}:</label>
         
//             <input
//               type="text"
//               value={value}
//               readOnly
//               className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-100"
//               style={{ width: "80%", resize: "none" }}
//             />
          
//           <br />
//         </div>
//       );
//     } else if (key === "Address") {
//       return (
//         <div className="mt-2" key={key}>
//           <label className="font-sm">{key}:</label>
//                    <input
//               type="text"
//               value={value}
//               readOnly
//               className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-100"
//               style={{ width: "80%", resize: "none" }}
//             />
         
//           <br />
//         </div>
//       );
//     }
   
//      else {
//       return (
//         <div className="mt-2" key={key}>
//           <label className="font-sm">{key}:</label>
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

// const BasicDetails = ({ BasicDetail, onRatingChange, email }) => {
//   const [selectedRating, setSelectedRating] = useState("");
//   const [isEditingC, setIsEditingC] = useState(false);
//   const [disabled, setDisabled] = useState(false);
//   const [bioValue, setBioValue] = useState(BasicDetail.bio || "");
//   const [addressValue, setAddressValue] = useState(BasicDetail.address.completeAddress || "");

//   const rating = BasicDetail.rating;

//   const handleRatingSelect = (rating) => {
//     setSelectedRating(rating);
//     onRatingChange(rating);
//   };

//   async function toggleEditC() {
//     if (isEditingC) {
//       setDisabled(true);
//       try {
//         await axios.post("api/admin/doctors/setRatings", {
//           doctorEmail: email,
//           rating: selectedRating,
//         });
//         setDisabled(false);
//       } catch (e) {
//         console.log(e.message);
//       }
//     }
//     setIsEditingC(!isEditingC);
//   }

//    console.log(BasicDetail);

//   const BasicDetailConstant = [
//     { Title: `${BasicDetail.title}` },
//     { "Full Name": `${BasicDetail.fullName}` },
//     { "Contact Number": `${BasicDetail.contactNumber}` },
//     { "Email Id": `${BasicDetail.email}` },
//     { Gender: `${BasicDetail.gender}` },
//     { DOB: `${BasicDetail.dateOfBirth}(yy/mm/dd)` },
//     { "Year of Experience": `${BasicDetail.yearsOfExperience || "null"}` },
//     { Specialization: `${BasicDetail.specialization}` },
//     { Address: `${BasicDetail.address.completeAddress || "null"}` },
//     { Bio: `${BasicDetail.bio || "null"}` },
//   ];

//   return (
//     <div className="bg-[#03229F] w-[500px] h-[390px] mb-4 rounded-sm text-white">
//       <div className="flex flex-row gap-20">
//         <h1 className="text-lg font-semibold ms-6">Basic Details:</h1>
//       </div>
//       <div className="font-medium ms-2 mb-5 opacity-75">
//         {renderDetails(BasicDetailConstant, isEditingC, bioValue, setBioValue, addressValue, setAddressValue)}
//         <div className="flex flex-row mt-3">
//           <p className="text-lg">Provided Rating:</p>
//           <div className="ms-10 flex flex-row">
//             <NumberSelect
//               onSelect={handleRatingSelect}
//               rating={rating}
//               disabled={!isEditingC}
//             />
//             <div className="flex justify-center items-center ms-3" onClick={toggleEditC}>
//               {isEditingC ? (
//                 <Button
//                   handleSubmit={toggleEditC}
//                   text="save"
//                   bgColor="bg-[#FFFFFF]"
//                   textColor="text-[#FA0808]"
//                   hoverColor="hover:bg-blue-200"
//                   disabled={disabled}
//                 />
//               ) : (
//                 <FaEdit />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BasicDetails;

import React, { useState } from "react";
import NumberSelect from "../../ApproveRejectUsers/ApproveRejectB/NumberSelect";
import { FaEdit, FaSave } from "react-icons/fa";
import Button from "../../../components/ui/Button";
import axios from "axios";

const renderDetails = (BasicDetailConstant, isEditingC, specializationValue, setSpecializationValue, bioValue, setBioValue, addressValue, setAddressValue) => {
  return BasicDetailConstant.map((item) => {
    const [key, value] = Object.entries(item)[0];
    if (key === "Bio") {
      return (
        <div className="mt-2" key={key}>
          <label className="font-sm">{key}:</label>
          <input
            type="text"
            value={bioValue}
            readOnly
            className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 h-8 text-opacity-100"
            style={{ width: "80%", resize: "none" }}
          />
          <br />
        </div>
      );
    } else if (key === "Address") {
      return (
        <div className="mt-2" key={key}>
          <label className="font-sm">{key}:</label>
          <input
            type="text"
            value={addressValue}
            readOnly
            className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-100"
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
          <br />
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

const BasicDetails = ({ BasicDetail, onRatingChange, email }) => {
  const [selectedRating, setSelectedRating] = useState("");
  const [isEditingC, setIsEditingC] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [bioValue, setBioValue] = useState(BasicDetail.bio || "");
  const [addressValue, setAddressValue] = useState(BasicDetail.address.completeAddress || "");
  const [specializationValue, setSpecializationValue] = useState(BasicDetail.specialization[0] || "");

  const rating = BasicDetail.rating;

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
    onRatingChange(rating);
  };

  async function toggleEditC() {
    if (isEditingC) {
      setDisabled(true);
      try {
        await axios.post("api/admin/doctors/setRatings", {
          doctorEmail: email,
          rating: selectedRating,
        });
        setDisabled(false);
      } catch (e) {
        console.log(e.message);
      }
    }
    setIsEditingC(!isEditingC);
  }

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
      </div>
      <div className="font-medium ms-2 mb-5 opacity-75">
        {renderDetails(BasicDetailConstant, isEditingC, specializationValue, setSpecializationValue, bioValue, setBioValue, addressValue, setAddressValue)}
        <div className="flex flex-row mt-3">
          <p className="text-lg">Provided Rating:</p>
          <div className="ms-10 flex flex-row">
            <NumberSelect
              onSelect={handleRatingSelect}
              rating={rating}
              disabled={!isEditingC}
            />
            <div className="flex justify-center items-center ms-3" onClick={toggleEditC}>
              {isEditingC ? (
                <Button
                  handleSubmit={toggleEditC}
                  text="save"
                  bgColor="bg-[#FFFFFF]"
                  textColor="text-[#FA0808]"
                  hoverColor="hover:bg-blue-200"
                  disabled={disabled}
                />
              ) : (
                <FaEdit />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
