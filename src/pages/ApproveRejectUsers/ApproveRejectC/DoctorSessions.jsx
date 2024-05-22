import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateDoctorSession } from "../../../data/features/registerSlice";
import { BiSolidUserDetail } from "react-icons/bi";
import SessionTimings from "../../NormalProfiles/clinicProfile/SessionTimings";

const DoctorSessions = ({ showData = [], newBg = "bg-[#229649]" }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const handleMe = (update) => {
    dispatch(updateDoctorSession(update));
    setModalContent(update.timingSlots);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };
  return (
    <div className={` h-[310px] w-[390px] overflow-hidden bg-[#03229F] `}>
      <div className={` text-white flex flex-col `}>
        <div className="text-lg font-semibold ms-6 ">
          <p>Doctor Sessions :</p>
        </div>
      </div>
      <div className={`overflow-auto h-[300px]`}>
        {showData.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <p className="text-[#FFFFFF]  text-2xl font-medium opacity-75">
              No Data Available
            </p>
          </div>
        ) : (
          showData.map((update, index) => (
            <div
              key={index}
              className={`p-4 mb-4 bg-[#8299ed] flex flex-row  justify-between ml-6 w-[340px] h-20 mt-3 cursor-pointer rounded-lg`}
            >
              <div className="text-black font-semibold">
                <span className="font-bold">{index + 1}. </span>
                {update.doctorName} <br />
                <div className="flex flex-row ms-7 gap-2">
                  <p>
                    <BiSolidUserDetail size="25px" color="black" />
                  </p>
                  <p className="font-medium text-[#535252]">
                    {" "}
                    #{update.doctorsClinicKhojoId}
                  </p>
                </div>
              </div>
              <span
                className={`inline-block rounded-md cursor-pointer h-9 px-4 text-sm text-white mt-2 pt-2 bg-blue-700`}
                onClick={() => handleMe(update)}
              >
                View...
              </span>
            </div>
          ))
        )}
      </div>
      {isModalOpen && modalContent && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
          <div className="bg-white p-6 rounded-lg ">
            <div className="flex justify-end">
              <button className="text-gray-500 text-2xl" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className=" flex justify-center items-center">
              <SessionTimings SessionTimings={modalContent} notshow={true} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorSessions;
