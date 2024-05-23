import React from "react";
import Button from "../../../components/ui/Button";

const Buttons = ({
  bg = "bg-[#a9a9ab]",
  texta = "Approve",
  textb = "Reject",
  handleSubmita,
  handleSubmitb,
}) => {
  return (
    <div className={`${bg}   h-[40px] flex content-center gap-1 md:gap-7  `}>
      <div>
        <Button
          handleSubmit={handleSubmita}
          text={texta}
          minw="min-w-[95px]"
          bgColor="bg-[#24C70A]"
          hoverColor="hover:bg-green-700"
        />
      </div>

      <div>
        <Button
          handleSubmit={handleSubmitb}
          text={textb}
          minw="min-w-[95px]"
          bgColor="bg-red-600"
          hoverColor="hover:bg-red-700"
        />
      </div>
    </div>
  );
};

export default Buttons;
