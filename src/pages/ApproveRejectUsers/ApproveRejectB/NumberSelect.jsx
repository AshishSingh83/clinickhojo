import React, { useEffect, useState } from "react";
function NumberSelect({ onSelect,rating }) {
  const [selectedNumber, setSelectedNumber] = useState("");
  const handleChange = (event) => {
    const number = event.target.value;
    setSelectedNumber(number);
    onSelect(number);
  };
  useEffect(()=>{
    if(rating){
      setSelectedNumber(rating)
    }
  },[rating])
  return (
    <div className="flex items-center justify-center  bg-white text-center">
      <select
        className="px-4 py-2 border border-white rounded-md shadow-sm focus:outline-none focus:border-blue-500 bg-white text-black text-center"
        value={selectedNumber}
        onChange={handleChange}
      >
        <option value="">Choose Rating</option>
        {[...Array(10).keys()].map((num) => (
          <option key={num + 1} value={num + 1} >
            {num + 1}
          </option>
        ))}
      </select>
    </div>
  );
}

export default NumberSelect;
