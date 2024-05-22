import React from "react";

function RadioButtonsC({ handleChange, selectedOption }) {
  const options = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  return (
    <div className="flex items-center justify-center bg-[#D9D9D9] text-black opacity-75">
      <div className="flex  font-serif gap-">
        {options.map((option) => (
          <div
            className="flex items-center mx-2 bg-[#D9D9D9]"
            key={option.value}
          >
            <input
              type="radio"
              id={option.value}
              value={option.value}
              checked={selectedOption === option.value}
              onChange={handleChange}
              className="mr-2 "
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RadioButtonsC;
