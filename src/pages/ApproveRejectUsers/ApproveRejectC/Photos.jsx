
import React, { useEffect, useState } from "react";
import ButtonRow from "../ButtonRow/ButtonRow";
import ImageGrid from "../ButtonRow/ImageGrid";
import RadioButtons from "../../../components/ui/RadioButtons";

const Photos = ({ onRadioChange, radioData, photosUrl }) => {
  const [hPhotosOption, setHPhotosOption] = useState("");
  useEffect(() => {
    setHPhotosOption(radioData);
  }, [radioData]);

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    onRadioChange(selectedOption);
    setHPhotosOption(selectedOption);
  };
  const handleButtonClick = (buttonId) => {
    console.log(`Button with ID ${buttonId} is clicked`);
  };
  return (
    <div className="bg-[#03229F] md:w-[777px] md:h-[510px] mb-4 rounded-sm text-white">
      <div className="flex flex-row">
        <h1 className="text-lg ms-5 m-2 font-medium">View Photos :</h1>
        <div className="mt-2 md:ms-auto md:me-5">
          <RadioButtons
            handleChange={handleChange}
            selectedOption={hPhotosOption}
          />
        </div>
      </div>
      <div className="font-medium ms-2 mb-5">
        <div className="mt-3 ms-3">
          <ButtonRow onButtonClick={handleButtonClick}/>
        </div>
        <div className="mt-7">
          <ImageGrid photosUrl={photosUrl}/>
        </div>
        <div className="mt-2 ms-4"></div>
      </div>
    </div>
  );
};

export default Photos;
