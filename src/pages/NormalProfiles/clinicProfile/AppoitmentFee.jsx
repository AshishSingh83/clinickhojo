import React, { useEffect } from "react";
import Input from "../../../components/ui/Input";
import NumberSelect from "../../ApproveRejectUsers/ApproveRejectB/NumberSelect";

const AppoitmentFee = ({
  normalFee,
  setNormalFee,
  emergencyFee,
  setEmergencyFee,
  onRatingChange,
  rating,
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
  useEffect(() => {
    setNormalFee(normalFee);
    setEmergencyFee(emergencyFee);
  }, []);
  return (
    <div className=" bg-[#D9D9D9] w-[435px] h-[185] mb-4 rounded-sm">
      <div>
        <h1 className=" text-lg ms-5 m-2   text-black font-semibold ">
          Appoitment Fee Detail :
        </h1>
      </div>
      <div>
        <div className="text-black font-medium  ms-2 mb-5">
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
                <NumberSelect onSelect={handleRatingSelect} rating={rating} />
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
