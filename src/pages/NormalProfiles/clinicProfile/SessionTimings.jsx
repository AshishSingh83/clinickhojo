import React from "react";

const SessionTimings = ({ SessionTimings }) => {
  return (
    <div className=" bg-[#D9D9D9] w-[420px] h-[310px] mb-4 rounded-sm">
      <div className="flex flex-row ">
        <h1 className="text-lg ms-2 m-1   text-black font-semibold ">
          Session Timings :
        </h1>
      </div>

      <div>
        <div className="text-black font-medium   mb-5">
          {SessionTimings.map((day) => (
            <div key={day._id}>
              <div className="mt-3">
                <span className="font-sm  ">
                  {day.day} :{" "}
                  {day.slots.map((slot, index) => (
                    <span key={slot._id}>
                      {slot.startTime} - {slot.endTime}
                      {index !== day.slots.length - 1 && " /"}
                    </span>
                  ))}
                </span>
                {/* {BasicDetailConstant.Title} */}
                <br />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SessionTimings;
