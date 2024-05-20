import React from 'react';
const InputWithIcon = ({
    handleChange,
    value,
    type,
    isRequired = true,
    placeholder,
    my1,
    bg1,
    iconData,
  }) => {
    const inputClass = "w-full py-2 pl-10 pr-3 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none text-black"
    const IconComponent = iconData ;
  return (
    <div className="relative p-2">
      <input
        onChange={handleChange}
        value={value}
        type={type}
        required={isRequired}
        className={`${inputClass} ${bg1} ${my1}`}
        placeholder={placeholder}
      />
      <IconComponent 
      className="h-6 w-6 absolute left-3 top-1/2
       transform -translate-y-1/2 text-gray-400 ps-2 " />
    </div>
  );
};

export default InputWithIcon;
