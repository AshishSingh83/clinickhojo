import React, { useEffect, useState } from "react";

const IdentityProof = ({ BasicDetail }) => {
  const [variable, setVariable] = useState("");
  const proof = BasicDetail.identityProof[0];

  useEffect(() => {
    if (!proof) {
      setVariable("pointer-events-none");
    }
  }, [proof]);

  const handleViewProofClick = () => {
    const pdfUrl = `${BasicDetail.identityProof[0]}`;
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="bg-[#03229F] md:w-[500px] md:h-[158px] mb-4 rounded-sm text-white">
      <div className="flex flex-row">
        <h1 className="text-lg ms-5 font-semibold mt-1">Identity Proof :</h1>
      </div>
      <div>
        <div className="font-medium ms-2 mb-5 opacity-75">
          <div className="mt-3 flex flex-col md:flex-row">
            <label className="font-sm p">Type of Id :</label>{" "}
            <input
              type="text"
              value={BasicDetail.identityType || "null"}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-100"
            />
            <br />
          </div>
          {/* <div className="mt-2 flex   md:flow-row">
            <label className="font-sm">Unique Id number :</label>{" "}
            <input
              type="text"
              value={BasicDetail.uniqueIdNumber || "null"}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-100"
            />
            <br />
          </div> */}
          <div className="mt-3 flex flex-col md:flex-row">
            <label className="font-sm p">Unique Id number : :</label>{" "}
            <input
              type="text"
              value={BasicDetail.uniqueIdNumber || "null"}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-100"
            />
            <br />
          </div>
          <div className="justify-end mt-2">
            <span
              className={`${variable} inline-block rounded-md cursor-pointer h-9 px-4 py-1 m-1 mt-2 md:mt-0  md:ms-72 text-sm text-white pt-2 bg-[#0032FF]`}
              onClick={handleViewProofClick}
            >
              View Proof
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityProof;
