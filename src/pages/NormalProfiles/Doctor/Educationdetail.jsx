import React from "react";

const Educationdetail = ({ BasicDetail }) => {
  const handleViewProofClick = (proof) => {
    if (proof) {
      window.open(proof, "_blank");
    }
  };
  const renderDetails =
    BasicDetail.length === 0 ? (
      <div className="flex justify-center items-center h-[200px] bg-[#03229F] text-white">
        <p className=" text-xl  ">No education details available</p>
      </div>
    ) : BasicDetail.length === 1 ? (
      <div className=" h-[240px] items-center bg-[#03229F] opacity-75   ">
        <div
          key={BasicDetail[0].degreeName}
          className="bg-[#03229F] w-[420px] h-[185px] mb-4 rounded-sm ms-3 mt-14  "
        >
          <div className=" font-medium  ms-2 mb-5 bg-[#03229F] ">
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
                className="inline-block rounded-md cursor-pointer h-9 px-4 py-1 m-1 ms-72 text-sm  text-white pt-2 bg-[#0032FF]"
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
          className="bg-[#03229F] w-[420px] h-[185px] mb-4 rounded-sm ms-3 opacity-75"
        >
          <div className=" font-medium  ms-2 mb-5 bg-[#03229F]">
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
                className="inline-block rounded-md cursor-pointer h-9 px-4 py-1 m-1 ms-72 text-sm  text-white pt-2 bg-[#0032FF]"
                style={{ backgroundColor: "#03229F" }}
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
    <div style={{ backgroundColor: "03229F", width: "450px" }}>
      <div className="bg-[#03229F] mt-[-12px] rounded-md flex flex-row gap-14">
        <h2 className="text-lg p-2 font-semibold">Education Details :</h2>
      </div>
      <div style={{ overflow: "auto", maxHeight: "425px" }} className=" bg-[#03229F]">
        {renderDetails}
      </div>
    </div>
  );
};

export default Educationdetail;
