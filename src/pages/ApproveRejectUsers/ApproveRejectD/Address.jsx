import React, { useEffect, useState } from "react";
import RadioButtons from "../../../components/ui/RadioButtons.jsx";

const Address = ({ addData, onRadioChange, radioData }) => {
  console.log(addData);
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
    <div className="bg-[#03229F] w-[380px] h-[360px] mb-4 rounded-sm text-white">
      <div className="flex flex-row">
        <h1 className="text-lg ms-5 m-2 font-semibold">Address:</h1>
        <div className="mt-1 ms-auto me-5">
          <RadioButtons
            handleChange={handleChange}
            selectedOption={hAddressOption}
          />
        </div>
      </div>
      <div>
        <div className="font-medium ms-2 mb-5 opacity-75">
          <div className="mt-3">
            <label className="font-sm p">Street:</label>
            <input
              type="text"
              value={addData.streetAddress}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-100"
            />
            <br />
          </div>
          <div className="mt-2 flex flex-row">
            <label className="font-sm">City:</label>
            <input
              type="text"
              value={addData.city}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-100"
            />
            <br />
          </div>
          <div className="mt-2 flex flex-row">
            <label className="font-sm">Locality:</label>
            <input
              type="text"
              value={addData.locality}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-100"
            />
            <br />
          </div>
          <div className="mt-2 flex flex-row gap-1">
            <label className="font-sm">Clinic Address:</label>
            <input
              type="text"
              value={addData.clinicAddress}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-opacity-100 w-64 p-1 h-8 flex justify-center items-center"
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
