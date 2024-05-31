import React from "react";

const Educationdetail = ({ BasicDetail }) => {
  const handleViewProofClick = (proof) => {
    if (proof) {
      window.open(proof, "_blank");
    }
  };

  const renderDetails = () => {
    return BasicDetail.map((update) => (
      <div
        key={update.degreeName}
        className="bg-[#03229F] w-full md:w-[420px] md:h-[185px] mb-4 rounded-sm ms-3 opacity-75 "
      >
        <div className="font-medium ms-2 mb-5 bg-[#03229F]">
          <div className="mt-1 flex flex-col md:flex-row">
            <label className="font-sm">College:</label>{" "}
            <input
              type="text"
              value={update.collegeName}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-100 "
            />
            <br />
          </div>
          <div className="mt-2  flex flex-col md:flex-row">
            <label className="font-sm">Degree:</label>{" "}
            <input
              type="text"
              value={update.degreeName}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-100"
            />
            <br />
          </div>
          <div className="mt-2  flex flex-col md:flex-row">
            <label className="font-sm">Passing Year::</label>{" "}
            <input
              type="text"
              value={update.passingYear}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-100"
            />
            <br />
          </div>
          <div className="mt-2  flex flex-col md:flex-row">
            <label className="font-sm">Start Date:</label>{" "}
            <input
              type="text"
              value={update.startDate}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-100"
            />
            <br />
          </div>
          <div className="mt-2  flex flex-col md:flex-row">
            <label className="font-sm">End Date:</label>{" "}
            <input
              type="text"
              value={update.endDate}
              readOnly
              className="bg-[#FFFFFF] bg-opacity-80 border-none text-black rounded-sm text-center ms-3 text-opacity-100"
            />
            <br />
          </div>
          <div>
            <span
              className="inline-block rounded-md cursor-pointer h-9 px-4 py-1 m-1 mt-2 md:mt-0 md:ms-72 text-sm text-white pt-2 bg-[#0032FF] `}"
              onClick={() => handleViewProofClick(update.certificates[0])}
            >
              View Proof
            </span>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className=" bg-[#03229F] md:w-[450px] mb-4">
      <div className="bg-[#03229F] mt-[-12px] rounded-md flex flex-row gap-14">
        <h2 className="text-lg p-2 font-semibold">Education Details:</h2>
      </div>
      <div
        style={{ overflow: "auto", maxHeight: "425px" }}
        className="bg-[#03229F]"
      >
        {BasicDetail.length === 0 ? (
          <div className="flex justify-center items-center h-[200px] bg-[#03229F] text-white">
            <p className="text-xl">No education details available</p>
          </div>
        ) : (
          renderDetails()
        )}
      </div>
    </div>
  );
};

export default Educationdetail;
