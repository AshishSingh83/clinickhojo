
import React, { useState } from "react";
import ButtonRow from "../../ApproveRejectUsers/ButtonRow/ButtonRow";
import ImageGrid from "../../ApproveRejectUsers/ButtonRow/ImageGrid";
const Photos = ({ photosUrl })=>{
  const [clickedButton, setClickedButton] = useState(null);
  const [images,setImages] = useState([]);
  const handleButtonClick = (id) =>{
    setClickedButton(id);
  };
  return (
    <div className="bg-[#03229F] w-[777px] h-[510px] mb-4 rounded-sm text-white">
      <div className="flex flex-row">
        <h1 className="text-lg ms-5 m-2 font-medium">View Photos :</h1>
      </div>
      <div className="font-medium ms-2 mb-5">
        <div className="mt-3 ms-3">
          <ButtonRow onButtonClick={handleButtonClick} />
        </div>
        <div className="mt-7">
          <ImageGrid photosUrl={photosUrl} clickedButton={clickedButton} />
        </div>
        <div className="mt-2 ms-4"></div>
      </div>
    </div>
  );
};
export default Photos;
