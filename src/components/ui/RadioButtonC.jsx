// import React, { useState } from 'react';

// function RadioButtonsC({handleChange,selectedOption}) {
//   const [selectedOption, setSelectedOption] = useState('');
//   const options = [
//     { value: 'Male', label: 'Male' },
//     { value: 'Female', label: 'Female' },
//   ];
//   return (
//     <div className="flex items-center justify-center bg-[#D9D9D9] text-black">
//       <div className='flex flex-row font-serif gap-'>
        
//         {options.map(option => (
//           <div className="flex items-center mx-2" key={option.value}>
//             <input
//               type="radio"
//               id={option.value}
//               value={option.value}
//               checked={selectedOption === option.value}
//               onChange={handleChange}
//               className="mr-2"
//             />
//             <label htmlFor={option.value}>{option.label}</label>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default RadioButtonsC;
import React from 'react';

function RadioButtonsC({ handleChange, selectedOption }) {
  const options = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ];

  return (
    <div className="flex items-center justify-center bg-[#D9D9D9] text-black opacity-75">
      <div className='flex flex-row font-serif gap-'>
        
        {options.map(option => (
          <div className="flex items-center mx-2 bg-[#D9D9D9]" key={option.value}>
            <input
              type="radio"
              id={option.value}
              value={option.value}
              checked={selectedOption === option.value}
              onChange={handleChange} // Pass the handleChange function
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
