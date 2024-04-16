import React, { useEffect, useState } from "react";

const IdentityProof = ({ BasicDetail }) => {
  const [variable, setVariaable] = useState("");
  const proof = BasicDetail.identityProof[0];
  useEffect(() => {
    if (!proof) {
      setVariaable("pointer-events-none");
    }
  }, []);
  const handleViewProofClick = () => {
    const pdfUrl = `${BasicDetail.identityProof[0]}`;
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="bg-[#D9D9D9] w-[500px] h-[158px] mb-4 rounded-sm">
      <div className="flex flex-row">
        <h1 className="text-lg ms-5  text-black font-semibold mt-1">
          Identity Proof :
        </h1>
      </div>
      <div>
        <div className="text-black font-medium  ms-2 mb-5">
          <div className="mt-3">
            <span className="font-sm p">Type of Id : </span>
            {BasicDetail.identityType || "null"}
            <br />
          </div>
          <div className="mt-1">
            <span className="font-sm">Unique Id number : </span>
            {BasicDetail.uniqueIdNumber || "null"}
            <br />
          </div>

          <div className="justify-end">
            <span
              className={`${variable} inline-block rounded-md cursor-pointer h-9 px-4 py-1 m-1 ms-72 text-sm  text-white pt-2 bg-[#4575f7] `}
              style={{ backgroundColor: "#4575f7" }}
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
