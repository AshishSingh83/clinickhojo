import React from "react";

const UserActivity = ({ UserActivities }) => {
  return (
    <div className="bg-[#03229F] w-[400px] md:w-[500px] h-[430px] mb-4 rounded-sm text-white">
      <div className="p-1">
        <h1 className="text-lg ms-5 m-1   font-semibold">User Activity :</h1>
      </div>
      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
        <div className=" font-medium  ms-2 mb-5 gap-5 opacity-75  ">
          {UserActivities[0] ? (
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
            <div className=" flex justify-center items-center mt-40 text-2xl">
              <div className=" h-44 text-white">No data available</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserActivity;
