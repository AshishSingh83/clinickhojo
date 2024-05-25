import React, { useEffect, useState } from "react";
import RadioButtons from "../../../components/ui/RadioButtons.jsx";

const Address = ({ addData, onRadioChange, radioData }) => {
  const [hAddressOption, setHAddressOption] = useState("");

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    onRadioChange(selectedOption);
    setHAddressOption(selectedOption);
  };

  useEffect(() => {
    setHAddressOption(radioData);
  }, [radioData]);

  return (
    <div className="bg-[#03229F] md:w-[380px] md:h-[360px] md:mb-4 rounded-sm text-white">
      <div className="flex flex-row">
        <h1 className="text-lg ms-5 m-2 font-semibold">Address:</h1>
        <div className="mt-1 md:ms-auto me-5">
          <RadioButtons
            handleChange={handleChange}
            selectedOption={hAddressOption}
          />
        </div>
      </div>
      <div>
        <div className="font-medium ms-2 mb-5 opacity-75">
          <div className=" flex flex-col md:flex-row mt-3">
            <label className="font-sm p">Street:</label>
            <input
              type="text"
              value={addData.streetAddress}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center md:ms-3 text-opacity-100"
            />
            <br />
          </div>
          <div className="mt-2 flex flex-col md:flex-row">
            <label className="font-sm">City:</label>
            <input
              type="text"
              value={addData.city}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center md:ms-3 text-opacity-100"
            />
            <br />
          </div>
          <div className="mt-2 flex flex-col md:flex-row">
            <label className="font-sm">Locality:</label>
            <input
              type="text"
              value={addData.locality}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center md:ms-3 text-opacity-100"
            />
            <br />
          </div>
          <div className="mt-2 flex flex-col md:flex-row gap-1">
            <label className="font-sm">Clinic Address:</label>
            <textarea
              value={addData.clinicAddress}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center md:ms-3 text-opacity-100 w-full h-10"
            />
            <br />
          </div>
          <div className="mt-2 flex flex-row">
            <label className="font-sm">Location in MAP:</label>
            <br />
          </div>
          <div className="mt-2 ms-1">
            <div className="w-[340px] h-[120px] bg-[#F2EFEF] rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
