import React, { useEffect, useState } from "react";
import Input from "../../../components/ui/Input";
import NumberSelect from "../../ApproveRejectUsers/ApproveRejectB/NumberSelect";
import { FaEdit } from "react-icons/fa";
import Button from "../../../components/ui/Button";
import instance from "../../../axios";


const AppointmentFee = ({
  normalFee,
  setNormalFee,
  emergencyFee,
  setEmergencyFee,
  onRatingChange,
  rating,
  hospitalClinicKhojoId,
  managementEmail,
}) => {
  const [isEditingA, setIsEditingA] = useState(false);
  const [isEditingB, setIsEditingB] = useState(false);
  const [isEditingC, setIsEditingC] = useState(false);
  const [disabledA, setDisabledA] = useState(false);
  const [disabledB, setDisabledB] = useState(false);
  const [disabledC, setDisabledC] = useState(false);
  const [newRating, setNewRating] = useState(rating);
  const [normal, setNormal] = useState(normalFee);
  const [emergency, setEmergency] = useState(emergencyFee);
  const handleChangeA = (e) => {
    setNormalFee(e.target.value);
    setNormal(e.target.value);
  };
  const handleChangeB = (e) => {
    setEmergencyFee(e.target.value);
    setEmergency(e.target.value);
  };

  const handleRatingSelect = (rating) => {
    onRatingChange(rating);
    setNewRating(rating);
  };

  async function toggleEditA() {
    setIsEditingA(!isEditingA);
    if (isEditingA) {
      setDisabledA(true);
      try {
        await instance.post("api/admin/hospitals/setAppointmentFee", {
          hospitalClinicKhojoId: hospitalClinicKhojoId,
          managementEmail: managementEmail,
          clinicKhojoAppointmentFeeNormal: normal,
          clinicKhojoAppointmentFeeEmergency: emergencyFee,
        });
        setDisabledA(false);
      } catch (e) {
        console.log(e.message);
      }
      setDisabledA(false);
    }
  }

  async function toggleEditB() {
    if (isEditingB) {
      setDisabledB(true);
      try {
        await instance.post("api/admin/hospitals/setAppointmentFee", {
          hospitalClinicKhojoId: hospitalClinicKhojoId,
          managementEmail: managementEmail,
          clinicKhojoAppointmentFeeNormal: normalFee,
          clinicKhojoAppointmentFeeEmergency: emergency,
        });
        setDisabledB(false);
      } catch (e) {
        console.log(e.message);
      }
      setDisabledB(false);
    }
    setIsEditingB(!isEditingB);
  }

  async function toggleEditC() {
    if (isEditingC) {
      setDisabledC(true);
      try {
        await instance.post("api/admin/hospitals/setRatings", {
          hospitalClinicKhojoId: hospitalClinicKhojoId,
          rating: newRating,
        });
        setDisabledC(false);
      } catch (e) {
        console.log(e.message);
      }
      setDisabledC(false);
    }
    setIsEditingC(!isEditingC);
  }

  useEffect(() => {
    setNormalFee(normalFee);
    setEmergencyFee(emergencyFee);
  }, []);

  return (
    <div className="bg-[#03229F] md:w-[435px] md:h-[185px] mb-4 rounded-sm">
      <div>
        <h1 className="text-lg ms-5 m-2 font-semibold">
          Appointment Fee Detail:
        </h1>
      </div>
      <div>
        <div className="font-medium ms-2 mb-5 opacity-75">
          <div className="mt-3 flex flex-row">
            <span className="font-sm">Normal Appointment Booking Fee: Rs.</span>
            <div className="w-40  ms-2 flex  justify-center items-center ">
              <Input
                bg1="bg-[#F2EFEF]"
                handleChange={handleChangeA}
                value={normalFee}
                disabled={!isEditingA}
              />
              <div
                className="flex justify-center items-center ms-3"
                onClick={toggleEditA}
              >
                {isEditingA ? (
                  <Button
                    handleSubmit={toggleEditA}
                    text="save"
                    bgColor="bg-[#FFFFFF]"
                    textColor="text-[#FA0808]"
                    hoverColor="hover:bg-blue-200"
                    disabled={disabledA}
                  />
                ) : (
                  <FaEdit />
                )}
              </div>
            </div>
            <br />
          </div>
          <div className="mt-4 flex flex-row">
            <span className="font-sm">
              Emergency Appointment Booking Fee: Rs.
            </span>
            <div className=" w-40  ms-2 flex  justify-center items-center ">
              <Input
                bg1="bg-[#F2EFEF]"
                handleChange={handleChangeB}
                value={emergencyFee}
                disabled={!isEditingB}
              />
              <div
                className="flex justify-center items-center ms-2 cursor-pointer  "
                onClick={toggleEditB}
              >
                {isEditingB ? (
                  <Button
                    handleSubmit={toggleEditB}
                    text="save"
                    bgColor="bg-[#FFFFFF]"
                    textColor="text-[#FA0808]"
                    hoverColor="hover:bg-blue-200"
                    disabled={disabledB}
                  />
                ) : (
                  <FaEdit />
                )}
              </div>
            </div>
            <br />
          </div>
          <div className="mt-1">
            <span className="flex flex-row">
              <p className="text-lg">Provide Rating:</p>
              <div className="md:ms-10 flex ">
                <NumberSelect
                  onSelect={handleRatingSelect}
                  rating={rating}
                  disabled={!isEditingC}
                />
                <div
                  className="flex justify-center items-center ms-3"
                  onClick={toggleEditC}
                >
                  {isEditingC ? (
                    <Button
                      handleSubmit={toggleEditC}
                      text="save"
                      bgColor="bg-[#FFFFFF]"
                      textColor="text-[#FA0808]"
                      hoverColor="hover:bg-blue-200"
                      disabled={disabledC}
                    />
                  ) : (
                    <FaEdit />
                  )}
                </div>
              </div>
            </span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentFee;
