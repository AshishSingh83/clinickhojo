import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FiKey } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const InputWithPassword = ({
  handleChange,
  value,
  type,
  isRequired = true,
  placeholder,
  my1,
  bg1,
  iconData,
}) => {
  const inputClass =
    'w-full py-2 pl-10 pr-12 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none text-black';

  const iconClass = "h-6 w-6 absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 ps-2 "
  const IconComponent = eval(iconData);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative p-2">
      <input
        onChange={handleChange}
        value={value}
        type={showPassword ? 'text' : type} // Toggle between 'text' and the original type
        required={isRequired}
        className={`${inputClass} ${bg1} ${my1}`}
        placeholder={placeholder}
      />
      <IconComponent
        className="h-5 w-6 absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400"
      />
      {type === 'password' && (
        <div
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
        >
          {showPassword ? 
          <AiOutlineEye  className={`${iconClass} `}/>
           : <AiOutlineEyeInvisible className={`${iconClass} `}/>}
        </div>
      )}
    </div>
  );
};

export default InputWithPassword;
