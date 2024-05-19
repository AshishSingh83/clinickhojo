const fixedInputClass =
  "rounded-md appearance-none relative block w-full px-3 py-2 border border-blue-600 placeholder-black text-black focus:outline-none focus:ring-blue-700 focus:border-blue-700 focus:z-10 sm:text-sm";

export default function Input({
  handleChange,
  value,
  type,
  isRequired = true,
  placeholder,
  customClass,
  my1,
  bg1,
  disabled=false
}) {
  const inputClass = `${fixedInputClass} ${customClass || ""}`.trim();

  return (
    <div className={`${my1} rounded-md`}>  
      <input
        onChange={handleChange}
        value={value}
        type={type}
        required={isRequired}
        className={`${inputClass} ${bg1}`}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
}
