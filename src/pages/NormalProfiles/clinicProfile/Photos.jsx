import React from "react";
import ButtonRow from "../../ApproveRejectUsers/ButtonRow/ButtonRow";
import ImageGrid from "../../ApproveRejectUsers/ButtonRow/ImageGrid";

const Photos = () => {
  
  return (
    <div className=" bg-[#D9D9D9] w-[865px] h-[510px] mb-4 rounded-sm">
      <div className=" flex flex-row ">
        <h1 className=" text-lg ms-5 m-2   text-black font-medium ">
          View Photos :
        </h1>
      </div>
      <div>
        <div className="text-black font-medium  ms-2 mb-5">
          <div className="mt-3 ms-3 ">
            <ButtonRow />
          </div>
          <div className="mt-7">
            <ImageGrid />
          </div>
          <div className="mt-2 ms-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
