import React from "react";

const AddRemark = () => {
  return (
    <div className=" bg-[#D9D9D9]  mb-4 rounded-sm">
      <div>
        <textarea
          id="inputTextArea"
          className=" placeholder-black  h-full p-2 resize-none bg-[#D9D9D9] w-4"
          placeholder="Add Remark..."
          style={{ width: '100px', height: '150px' }}
        />
      </div>
    </div>
  );
};

export default AddRemark;
