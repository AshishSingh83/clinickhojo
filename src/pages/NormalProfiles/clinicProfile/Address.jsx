import React, { useEffect, useState } from "react";
const Address = ({ addData }) => {
  const [hAddressOption, setHAddressOption] = useState("");
  return (
    <div className=" bg-[#03229F] w-[380px] h-[310px] mb-4 rounded-sm">
      <div className=" flex flex-row ">
        <h1 className=" text-lg ms-5 m-2    font-semibold ">
          Address :
        </h1>
      </div>
      <div>
        <div className=" font-medium  ms-2 mb-5 opacity-75">
          <div className="mt-3">
            <span className=" font-sm p  ">Street : </span>
            {addData.streetAddress}
            <br />
          </div>
          <div className="mt-1">
            <span className="font-sm ">City : </span>
            {addData.city}
            <br />
          </div>
          <div className="mt-1">
            <span className=" font-sm ">Locality : </span>
            {addData.locality}
            <br />
          </div>
          <div className="mt-1">
            <span className="font-sm ">Location in MAP : </span>
            <br />
          </div>

          <div className="mt-2 ms-4">
            <div className="w-[380px] h-[120px] bg-[#F2EFEF] rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
