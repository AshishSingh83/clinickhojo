import { useEffect, useState } from "react";
const WrongInfo = ({ data, newData }) =>{
  const [newDataa, setNewDataa] = useState("");
  const mergeData = { ...newData, ...newDataa };
  useEffect(() => {
    setNewDataa(data);
  }, [data]);
  return (
    <div className="bg-[#03229F] md:w-[438px] mb-4 rounded-sm">
      <div>
        <span className="ms-5 m-2  text-black font-medium bg-red-700">
          WRONG INFO
        </span>
      </div>
      <div className="font-medium  ms-1 mb-5 text-red-700">
        {Object.entries(mergeData).map(
          ([key, value], index) =>
            value === "No" && (
              <div key={index} className="mt-2">
                <span className="font-sm">*</span>
                {key}
                <br />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default WrongInfo;
