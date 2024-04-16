import React from "react";

const Educationdetail = ({ BasicDetail }) => {
  const handleViewProofClick = (proof) => {
    if (proof) {
      window.open(proof, "_blank");
    }
  };
  const renderDetails =
    BasicDetail.length === 0 ? (
      <div className="flex justify-center items-center h-[200px]">
        <p className=" text-xl  text-black">No education details available</p>
      </div>
    ) : BasicDetail.length === 1 ? (
      <div className=" h-[240px] items-center    ">
        <div
          key={BasicDetail[0].degreeName}
          className="bg-[#FDFAFA] w-[420px] h-[185px] mb-4 rounded-sm ms-3 mt-14  "
        >
          <div className="text-black font-medium  ms-2 mb-5 bg-[#FDFAFA] ">
            <div className="mt-1">
              <span className="font-sm">College:</span>{" "}
              {BasicDetail[0].collegeName}
              <br />
            </div>
            <div className="mt-1">
              <span className="font-sm">Degree:</span>{" "}
              {BasicDetail[0].degreeName}
              <br />
            </div>
            <div className="mt-1">
              <span className="font-sm">Field Of Study:</span>{" "}
              {BasicDetail[0].fieldOfStudy}
              <br />
            </div>
            <div className="mt-1">
              <span className="font-sm">Start Date:</span>{" "}
              {BasicDetail[0].startDate}
              <br />
            </div>
            <div className="mt-1">
              <span className="font-sm">End Date:</span>{" "}
              {BasicDetail[0].passingYear}
              <br />
            </div>
            <div>
              <span
                className="inline-block rounded-md cursor-pointer h-9 px-4 py-1 m-1 ms-72 text-sm  text-white pt-2"
                style={{ backgroundColor: "#4575f7" }}
                onClick={() =>
                  handleViewProofClick(BasicDetail[0].certificates[0])
                }
              >
                View Proof
              </span>
            </div>
          </div>
        </div>
      </div>
    ) : (
      BasicDetail.map((update) => (
        <div
          key={update.degreeName}
          className="bg-[#FDFAFA] w-[420px] h-[185px] mb-4 rounded-sm ms-3"
        >
          <div className="text-black font-medium  ms-2 mb-5 bg-[#FDFAFA]">
            <div className="mt-1">
              <span className="font-sm">College:</span> {update.collegeName}
              <br />
            </div>
            <div className="mt-1">
              <span className="font-sm">Degree:</span> {update.degreeName}
              <br />
            </div>
            <div className="mt-1">
              <span className="font-sm">Field Of Study:</span>{" "}
              {update.fieldOfStudy}
              <br />
            </div>
            <div className="mt-1">
              <span className="font-sm">Start Date:</span> {update.startDate}
              <br />
            </div>
            <div className="mt-1">
              <span className="font-sm">End Date:</span> {update.passingYear}
              <br />
            </div>
            <div>
              <span
                className="inline-block rounded-md cursor-pointer h-9 px-4 py-1 m-1 ms-72 text-sm  text-white pt-2"
                style={{ backgroundColor: "#4575f7" }}
                onClick={() => handleViewProofClick(update.certificates[0])}
              >
                View Proof
              </span>
            </div>
          </div>
        </div>
      ))
    );

  return (
    <div style={{ backgroundColor: "#D9D9D9", width: "450px" }}>
      <div className="bg-[#b187e0] mt-[-12px] rounded-md flex flex-row gap-14">
        <h2 className="text-lg p-2  font-medium">Education Details</h2>
      </div>
      <div style={{ overflow: "auto", maxHeight: "425px" }}>
        {renderDetails}
      </div>
    </div>
  );
};

export default Educationdetail;
