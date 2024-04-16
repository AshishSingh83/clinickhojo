import React, { useState } from "react";
import NumberSelect from "../../ApproveRejectUsers/ApproveRejectB/NumberSelect";

const renderDetails = (BasicDetailConstant) => {
  return BasicDetailConstant.map((item, index) => {
    const [key, value] = Object.entries(item)[0];
    return (
      <div className="mt-1" key={key}>
        <span className="font-sm">{key} : </span>
        <span>{value}</span>
        <br />
      </div>
    );
  });
};

const BasicDetails = ({ BasicDetail, onRatingChange }) => {
  const [selectedRating, setSelectedRating] = useState("");
  const rating = BasicDetail.rating;
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
    <div className="bg-[#D9D9D9] w-[500px] h-[390px] mb-4 rounded-sm">
      <div className="flex flex-row gap-20">
        <h1 className="text-lg  text-black font-semibold ms-6">
          Basic Details :
        </h1>
      </div>
      <div className=" ">
        <div className="text-black font-medium  ms-2 mb-5">
          {renderDetails(BasicDetailConstant)}
          <span className="flex flex-row ">
            <p className="text-lg">Provided Rating :</p>
            <div className="ms-10">
              <NumberSelect onSelect={handleRatingSelect} rating={rating} />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
