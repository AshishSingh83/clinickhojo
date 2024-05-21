import React from "react";
import Input from "../../../components/ui/Input";
import NumberSelect from "../ApproveRejectB/NumberSelect";
const AppoitmentFee = ({
  normalFee,
  setNormalFee,
  emergencyFee,
  setEmergencyFee,
  onRatingChange,
}) => {
  const handleChangeA = (e) => {
    setNormalFee(e.target.value);
  };
  const handleChangeB = (e) => {
    setEmergencyFee(e.target.value);
  };
  const handleRatingSelect = (rating) => {
    onRatingChange(rating);
  };
  return (
    <div className=" bg-[#03229F] w-[435px] h-[185] mb-4 rounded-sm text-white">
      <div>
        <h1 className=" text-lg ms-5 m-2    font-semibold ">
          Set Appoitment Fee :
        </h1>
      </div>
      <div>
        <div className=" font-medium  ms-2 mb-5 opacity-75">
          <div className="mt-3 flex flex-row">
            <span className=" font-sm   ">
              Normal Appointment Booking Fee : Rs.
            </span>
            <div className=" w-28 mt-[-7px] ms-2 ">
              <Input
                bg1="bg-[#F2EFEF]"
                handleChange={handleChangeA}
                value={normalFee}
              />
            </div>
            <br />
          </div>
          <div className="mt-4 flex flex-row">
            <span className=" font-sm p  ">
              Emergency Appointment Booking Fee :
            </span>
            <div className=" w-28 mt-[-7px] ms-2 ">
              <Input
                bg1="bg-[#F2EFEF]"
                handleChange={handleChangeB}
                value={emergencyFee}
              />
            </div>
            <br />
          </div>
          <div className="mt-1">
            <span className="flex flex-row ">
              <p className="text-lg">Provide Rating :</p>
              <div className="ms-10">
                <NumberSelect onSelect={handleRatingSelect} />
              </div>
            </span>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AppoitmentFee;
