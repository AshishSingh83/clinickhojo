import React, { useState } from 'react';

function RadioButtonsB() {
  const [selectedOption, setSelectedOption] = useState('');
  const options = [
    { value: 'Doctors', label: 'Doctors' },
    { value: 'Users', label: 'Users' },
    { value: 'All', label: 'All' }
  ];

  const handleChange = (event) => {
    console.log(event.target);
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex items-center justify-center bg-white text-black">
      <div className='flex flex-row font-serif gap-'>
        <div>
          <span>Correct ?</span>
        </div>
        {options.map(option => (
          <div className="flex items-center" key={option.value}>
            <input
              type="radio"
              id={option.value}
              value={option.value}
              checked={selectedOption === option.value}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RadioButtonsB;
