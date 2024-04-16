import React from "react";
import "./ImageGrid.css";

const ImageGrid = () => {
  var imageUrls = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ];

  const calculateGridClass = (count) => {
    switch (count) {
      case 1:
        return "md:grid-cols-1";
      case 2:
        return "md:grid-cols-2";
      case 3:
        return "md:grid-cols-3";
      case 4:
        return "md:grid-cols-4";
      default:
        return "md:grid-cols-4";
    }
  };

  return (
    <div className="custom-scrollbar overflow-y-auto max-h-[350px] w-[790px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 m-3">
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className={`aspect-w-1 aspect-h-1 ${calculateGridClass(
              imageUrls.length
            )} h-[150px] w-[150px]`}
          >
            <img
              src={url}
              alt={`Image ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
