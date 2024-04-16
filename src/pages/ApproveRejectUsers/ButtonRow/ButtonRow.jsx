import React from "react";

const ButtonRow = () => {
  const [hoveredButton, setHoveredButton] = React.useState(null);

  const buttons = [
    { id: 1, label: "All Photos" },
    { id: 2, label: "Infrastructure" },
    { id: 3, label: "Equipment" },
    { id: 4, label: "Team" },
    { id: 5, label: "Other" },
  ];
  return (
    <div className="flex items-center ">
      {buttons.map((button) => (
        <button
          key={button.id}
          className={`py-1 px-4 border border-gray-300 ${
            hoveredButton === button.id
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out `}
          onMouseEnter={() => setHoveredButton(button.id)}
          onMouseLeave={() => setHoveredButton(null)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonRow;
