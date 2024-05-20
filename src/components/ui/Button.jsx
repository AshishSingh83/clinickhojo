// import Spinner from "./clipPath/Spinner";
// export default function Button({
//   handleSubmit,
//   text,
//   minw,
//   bgColor = "bg-[#229649]",
//   hoverColor = "hover:bg-green-700",
//   textColor = "text-white",
//   disabled='true'
// }) {
//   return (
//     <>
//       <button
//         type="submit"
//         className={`group relative w-full flex justify-center py-1 px-4 border border-transparent
//          text-lg font-medium rounded-lg ${textColor} ${bgColor} ${hoverColor}
//                     focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-100  ${minw} font-serif`}
//         onClick={handleSubmit}
//       >
//         {/* {text} */}
//         <Spinner height="h-[35px]" width="w-[35px]" fontSize='text-[.45rem]' />
//       </button>
//     </>
//   );
// }
import React from 'react';
import Spinner from "./clipPath/Spinner";

export default function Button({
  handleSubmit,
  text,
  minw,
  bgColor = "bg-[#229649]",
  hoverColor = "hover:bg-green-700",
  textColor = "text-white",
  disabled = false,
}) {
  return (
    <button
      type="submit"
      className={`group relative w-full flex justify-center py-1 px-4 border border-transparent
         text-lg font-medium rounded-lg ${textColor} ${bgColor} ${hoverColor}
         focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-100 ${minw} font-serif
         ${disabled ? ' bg-opacity-70 cursor-not-allowed' : ''}`}
      onClick={!disabled ? handleSubmit : null}
      disabled={disabled}
    >
      {disabled ? (
        <Spinner height="h-[32px]" width="w-[32px]" fontSize="text-[.44rem]" />
      ) : (
        text
      )}
    </button>
  );
}
