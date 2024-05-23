import React from "react";

function RadioButtons({
  handleChange,
  selectedOption,
  val1 = "Yes",
  val2 = "No",
}) {
  return (
    <div className="flex items-center justify-center  bg-[#D9D9D9] text-black">
      <div className=" flex flex-row font-serif md:gap-2 ">
      
      <div className="">
          <span>Correct ?</span>
        </div>
        <div className=" flex md:flex-row">
        <div className="flex items-center mr-4">
          <input
            type="radio"
            value={val1}
            checked={selectedOption === "Yes"}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="yes" className="mr-4">
            Yes
          </label>
        </div>
        <div>
        <div className="flex items-center">
          <input
            type="radio"
            value={val2}
            checked={selectedOption === "No"}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="no">No</label>
        </div>
        </div>
       

        </div>
       
      </div>
     
       
      </div>
    
  );
}

export default RadioButtons;
