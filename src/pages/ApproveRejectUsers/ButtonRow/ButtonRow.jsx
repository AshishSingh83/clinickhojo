
// import React, { useState } from "react";

// const ButtonRow = ({ onButtonClick }) => {
//   const [hoveredButton, setHoveredButton] = useState(null);
//   const [activeButton, setActiveButton] = useState(null); // State to track the active button

//   const buttons = [
//     { id: 1, label: "All Photos" },
//     { id: 2, label: "Infrastructure" },
//     { id: 3, label: "Equipment" },
//     { id: 4, label: "Team" },
//     { id: 5, label: "Other" },
//   ];

//   const handleClick = (buttonId) => {
//     setActiveButton(buttonId);
//     onButtonClick(buttonId); 
//   };

//   return (
//     <div className="flex flex-wrap items-center space-x-2 h-12 md:h-auto w-72 md:w-auto">
//       {buttons.map((button) => (
//         <button
//           key={button.id}
//           className={`py-1 px-4 border border-gray-300 ${
//             activeButton === button.id
//               ? "bg-blue-700 text-white"
//               : hoveredButton === button.id
//               ? "bg-blue-500 text-white"
//               : "bg-gray-200 text-gray-700"
//           } hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out mb-2`}
//           onMouseEnter={() => setHoveredButton(button.id)}
//           onMouseLeave={() => setHoveredButton(null)}
//           onClick={() => handleClick(button.id)} 
//         >
//           {button.label}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default ButtonRow;
import React, { useState } from "react";

const ButtonRow = ({ onButtonClick }) => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [activeButton, setActiveButton] = useState(null); // State to track the active button

  const buttons = [
    { id: 1, label: "All Photos" },
    { id: 2, label: "Infrastructure" },
    { id: 3, label: "Equipment" },
    { id: 4, label: "Team" },
    { id: 5, label: "Other" },
  ];

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
    onButtonClick(buttonId); // Pass buttonId to the parent component
  };

  return (
    <div className="flex flex-wrap items-center space-x-2 h-12 md:h-auto w-72 md:w-auto">
      {buttons.map((button) => (
        <button
          key={button.id}
          className={`py-1 px-4 border border-gray-300 ${
            activeButton === button.id
              ? "bg-blue-700 text-white"
              : hoveredButton === button.id
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out mb-2`}
          onMouseEnter={() => setHoveredButton(button.id)}
          onMouseLeave={() => setHoveredButton(null)}
          onClick={() => handleClick(button.id)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonRow;
