import React from "react";
import "./ImageGrid.css";

const ImageGrid = ({ photosUrl }) => {
  console.log("Photos URL:", photosUrl);

  return (
    <div className="custom-scrollbar overflow-y-auto max-h-[400px] w-[790px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  m-3 gap-y-5  ">
        {photosUrl.map((url, index) => (
          <div key={index} className="h-[362px] w-[240px]">
            <img
              src={url}
              alt={`Image ${index + 1}`}
              className=" w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
