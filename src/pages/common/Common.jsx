import React from "react";

function Common() {
  var index = 2;
  return (
    <>
      <div className="flex flex-col">
        <div>
          <h2>pending users</h2>
        </div>
        <div>
          <div
            key={index}
            className={`p-4 mb-4 ${
              index % 2 === 0 ? "bg-blue-300" : "bg-blue-200"
            }`}
            style={{ maxWidth: "300px" }}
          >
            <p className="text-black font-semibold font-sans">
              <span className="font-bold mr-2">{index + 1}.</span>
              "Ashish Singh New"
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Common;
