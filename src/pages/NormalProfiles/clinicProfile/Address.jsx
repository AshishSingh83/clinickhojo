import React, { useEffect, useState } from "react";

const Address = ({ addData }) => {
  const [hAddressOption, setHAddressOption] = useState("");

  return (
    <div className="bg-[#03229F] w-[380px] h-[310px] mb-4 rounded-sm text-white">
      <div className="flex flex-row">
        <h1 className="text-lg ms-5 m-2 font-semibold">Address :</h1>
      </div>
      <div>
        <div className="font-medium ms-2 mb-5 opacity-75">
          <div className="mt-3 flex flex-row">
            <span className="font-sm p">Street : </span>
            <input
              type="text"
              value={addData.streetAddress}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-100"
            />
            <br />
          </div>
          <div className="mt-2 flex flex-row">
            <span className="font-sm">City : </span>
            <input
              type="text"
              value={addData.city}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-100"
            />
            <br />
          </div>
          <div className="mt-2 flex flex-row">
            <span className="font-sm">Locality : </span>
            <input
              type="text"
              value={addData.locality}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-100"
            />
            <br />
          </div>
          <div className="mt-2 flex flex-row">
            <span className="font-sm">Location in MAP : </span>
            <br />
          </div>
          <div className="mt-2 ms-4">
            <div className="w-[350px] h-[120px] bg-[#F2EFEF] rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
