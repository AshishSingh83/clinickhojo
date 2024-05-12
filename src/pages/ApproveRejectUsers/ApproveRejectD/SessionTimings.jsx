import React, { useEffect, useState } from "react";
import RadioButtons from "../../../components/ui/RadioButtons.jsx";


const SessionTimings = ({ onRadioChange, SessionTimings, radioData }) => {
  const [hSessionTimingsOption, setHSessionTimingsOption] = useState("");
  useEffect(() => {
    setHSessionTimingsOption(radioData);
  }, [radioData]);
  const handleChange = (event) => {
    const selectedOption = event.target.value;
    onRadioChange(selectedOption);
    setHSessionTimingsOption(selectedOption);
  };
  return (
    <div className=" bg-[#03229F] w-[390px] h-[310px] mb-4 rounded-sm text-white">
      <div className="flex flex-row ">
        <h1 className="text-lg ms-2 m-1    font-semibold ">
          Session Timings :
        </h1>
        <div className="mt-2 ms-auto me- ">
          <RadioButtons
            handleChange={handleChange}
            selectedOption={hSessionTimingsOption}
          />
        </div>
      </div>

      <div>
        <div className=" font-medium   mb-5 opacity-75">
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
