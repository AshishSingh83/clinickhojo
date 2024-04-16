import React from "react";

const AddRemark = () => {
  return (
    <div className=" bg-[#D9D9D9] w-[400px] h-[130px] mb-4 rounded-sm">
      <div className="h-[130px] w-[400px] ">
        <textarea
          id="inputTextArea"
          className=" placeholder-black  h-full p-2 resize-none bg-[#D9D9D9]"
          placeholder="Add Remark..."
          style={{ color: "black" }}
        />
      </div>
    </div>
  );
};

export default AddRemark;
