import React from "react";

const SessionTimings = ({ SessionTimings }) => {
  console.log(SessionTimings);
  return (
    <div className="bg-[#03229F] w-[390px] h-[310px] mb-4 rounded-sm p-4 overflow-auto">
      <div className="flex flex-row mb-2">
        <h1 className="text-lg font-semibold text-white">Session Timings:</h1>
      </div>
      <table className="w-full text-left text-white">
        <thead>
          <tr>
            <th className="px-2 py-1 border-b">Day</th>
            <th className="px-2 py-1 border-b">From</th>
            <th className="px-2 py-1 border-b">To</th>
          </tr>
        </thead>
        <tbody>
          {SessionTimings.map((day) =>
            day.slots.map((slot, index) => (
              <tr key={day._id + slot._id}>
                {index === 0 && (
                  <td className="px-2 py-1 border-b" rowSpan={day.slots.length}>
                    {day.day}
                  </td>
                )}
                <td className="px-2 py-1 border-b">{slot.startTime}</td>
                <td className="px-2 py-1 border-b">{slot.endTime}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SessionTimings;
