import React, { useState } from "react";
import NumberSelect from "../../ApproveRejectUsers/ApproveRejectB/NumberSelect";
import { FaEdit, FaSave } from "react-icons/fa";
import Button from "../../../components/ui/Button";
import axios from "axios";
const renderDetails = (BasicDetailConstant) => {
  return BasicDetailConstant.map((item, index) => {
    const [key, value] = Object.entries(item)[0];
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
  });
};
const BasicDetails = ({ BasicDetail, onRatingChange,email}) => {
  const [selectedRating, setSelectedRating] = useState("");
  const [isEditingC, setIsEditingC] = useState(false);
  const [disabled,setDisabled] = useState(false);
  const rating = BasicDetail.rating;

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
    onRatingChange(rating);
  };
   async function toggleEditC () {
    if (isEditingC) {
      setDisabled(true);
      console.log(email,selectedRating);
      try {
        await axios.post("api/admin/doctors/setRatings", {
          doctorEmail: email,
          rating: selectedRating,
        });
       setDisabled(false)
      } catch (e) {
        console.log(e.message);
      }
      setDisabled(false)
    }
    setIsEditingC(!isEditingC);
  };

  const specializationList = BasicDetail.specialization.join(" / ");
  const BasicDetailConstant = [
    { Title: `${BasicDetail.title}` },
    { "Full Name": `${BasicDetail.fullName}` },
    { "Contact Number": `${BasicDetail.contactNumber}` },
    { "Email Id": `${BasicDetail.email}` },
    { Gender: `${BasicDetail.gender}` },
    { DOB: `${BasicDetail.dateOfBirth}` },
    { "Year of Experience": `${BasicDetail.yearsOfExperience || "null"}` },
    { Specialization: `${specializationList || "null"}` },
    { Address: `${BasicDetail.address.city || "null"}` },
    { Bio: `${BasicDetail.bio || "null"}` },
  ];

  return (
    <div className="bg-[#03229F] w-[500px] h-[390px] mb-4 rounded-sm text-white">
      <div className="flex flex-row gap-20">
        <h1 className="text-lg font-semibold ms-6">Basic Details:</h1>
      </div>
      <div className="font-medium ms-2 mb-5 opacity-75">
        {renderDetails(BasicDetailConstant)}
        <div className="flex flex-row mt-3">
          <p className="text-lg">Provided Rating:</p>
          <div className="ms-10 flex flex-row">
            <NumberSelect
              onSelect={handleRatingSelect}
              rating={rating}
              disabled={!isEditingC}
            />
            <div
              className="flex justify-center items-center ms-3"
              onClick={toggleEditC}
            >
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
