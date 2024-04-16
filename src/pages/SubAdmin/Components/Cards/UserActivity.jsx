import React from "react";

const UserActivity = ({ UserActivities }) => {
  return (
    <div className="bg-[#D9D9D9] w-[500px] min-h-[380px] mb-4 rounded-sm">
      <div className="p-1">
        <h1 className="text-lg ms-5 m-1  text-black font-semibold">
          User Activity :
        </h1>
      </div>
      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
        <div className="text-black font-medium  ms-2 mb-5 gap-5 ">
          {UserActivities ? (
            UserActivities.map((data, index) => (
              <div className="mt-1" key={index}>
                <span
                  className="font-sm big-dot"
                  style={{ marginRight: "8px" }}
                >
                  &#x2022;
                </span>
                {data}
                <br />
              </div>
            ))
          ) : (
            <div className=" mt-7">
              <div className=" h-44">No data available</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserActivity;
