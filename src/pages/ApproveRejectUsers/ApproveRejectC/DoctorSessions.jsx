// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Input from "../../../components/ui/Input";
// import { useDispatch } from "react-redux";
// import { updateDoctorData, updateDoctorSession } from "../../../data/features/registerSlice";
// import InputWithIcon from "../../../components/ui/InputWithIcon";
// import { BiSolidUserDetail } from "react-icons/bi";
// import { FaMapMarkerAlt } from "react-icons/fa";


// const DoctorSessions = ({
//   text = "Pending Profiles Of Doctors ...",
//   Width = "h-[500px]",
//   Height = "w-[500px]",
//   p1 = "p-3",
//   m1 = "m-3",
//   text1 = "text-2xl",
//   mh2 = "max-h-[400px]",
//   mw3 = "max-w-[450px]",
//   showData,
//   normalVerified,
//   newBg = "bg-[#229649]",
//   newBga,
//   hwidth= 'w-[380px]',
//   hrad='35px',
//   spinner=false
// }) => {
//   console.log(spinner);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
  
  

//   const handleMe = (update) => {
//     dispatch(updateDoctorSession(update));
//     console.log('hi');
//   };


//   return (
//     <div className={` ${Width} ${Height} bg-[#03229F] overflow-hidden  `}>
//       <div className={` mt-[-12px] text-black flex flex-col   `}>
//         <div className=" h-14 flex items-center justify-center ">
//         <p>Doctor Sessions</p>
//         </div>
//       </div>
//       <div className={`overflow-auto ${mh2}`}>
//         {filteredData.length === 0 ? (

//           <div className="flex justify-center items-center h-full">
//             <p className="text-[#FFFFFF]  mt-44 text-2xl font-medium">
            
//               'No Data Available'
            
//             </p>
//           </div>
//         ) : (
//           filteredData.map((update, index) => (
//             <div
//               key={index}
//               className={`p-4 mb-4  bg-[#E7ECFF] flex flex-row justify-between ml-6 ${mw3} mt-3 cursor-pointer`}
//             >
//               <p className="text-black font-semibold ">
//                 <span className="font-bold ">{index + 1}. </span>
//                 {update.name} <br />
//                 <div className=" flex flex-row ms-7 gap-2">
//                   <p>
//                     <BiSolidUserDetail size="25px" color={`${newBga}`} />
//                   </p>
//                   <p className=" font-medium text-[#535252] ">
//                     {" "}
//                     #{update.uniqueDoctorId}
//                   </p>
//                 </div>
//                 <div className=" flex flex-row ms-7 gap-2 mt-">
//                   <p className=" mt-[7px]">
//                     <FaMapMarkerAlt size="15px" color="red" />
//                   </p>
//                   <p className=" font-medium text-[#535252]  ">
//                     {" "}
//                     {update.address.locality}
//                   </p>
//                 </div>
//                 {/* <span className="font-medium ">City : </span>
//                 {update.address.city} */}
//               </p>
//               <span
//                 className={`inline-block rounded-md cursor-pointer h-9 px-4 py-1  text-sm   text-white mt-5 pt-2 ${newBg}`}
//                 onClick={() => handleMe(update)}
//               >
//                 View...
//               </span>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default DoctorSessions;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { updateDoctorData, updateDoctorSession } from "../../../data/features/registerSlice";
// import { BiSolidUserDetail } from "react-icons/bi";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import SessionTimings from "../ApproveRejectD/SessionTimings";

// const DoctorSessions = ({
//   showData = [],
//   newBg = "bg-[#229649]",
// }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalContent, setModalContent] = useState(null);

//   const handleMe = (update) => {
//     dispatch(updateDoctorSession(update));
//     setModalContent(update);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalContent(null);
//   };

//   return (
//     <div className={` h-[310px] w-[390px]  overflow-hidden bg-[#03229F]  `}>
//       <div className={`  text-white flex flex-col   `}>
//         <div className="text-lg font-semibold ms-6   ">
//           <p>Doctor Sessions :</p>
//         </div>
//       </div>
//       <div className={`overflow-auto h-[300px]`}>
//         {showData.length === 0 ? (
//           <div className="flex justify-center items-center h-full">
//             <p className="text-[#FFFFFF]  mt-44 text-2xl font-medium">
//               'No Data Available'
//             </p>
//           </div>
//         ) : (
//           showData.map((update, index) => (
//             <div
//               key={index}
//               className={`p-4 mb-4  bg-[#8299ed] flex flex-row justify-between ml-6 w-[340px] h-20 mt-3 cursor-pointer rounded-lg`}
//             >
//               <p className="text-black font-semibold ">
//                 <span className="font-bold ">{index + 1}. </span>
//                 {update.doctorName} <br />
//                 <div className=" flex flex-row ms-7 gap-2">
//                   <p>
//                     <BiSolidUserDetail size="25px" color="black" />
//                   </p>
//                   <p className=" font-medium text-[#535252] ">
//                     {" "}
//                     #{update.doctorsClinicKhojoId}
//                   </p>
//                 </div>
                
//               </p>
//               <span
//                 className={`inline-block rounded-md cursor-pointer h-9 px-4   text-sm   text-white mt-2 pt-2 bg-blue-700 `}
//                 onClick={() => handleMe(update)}
//               >
//                 View...
//               </span>
//             </div>
//           ))
//         )}
//       </div>
//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <SessionTimings SessionTimings={update.timingSlots}/>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DoctorSessions;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateDoctorData, updateDoctorSession } from "../../../data/features/registerSlice";
import { BiSolidUserDetail } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import SessionTimings from "../../NormalProfiles/clinicProfile/SessionTimings";
// import SessionTimings from "../ApproveRejectD/SessionTimings";


const DoctorSessions = ({
  showData = [],
  newBg = "bg-[#229649]",
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
              <p className="text-black font-semibold">
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
              </p>
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
      {/* Modal */}
      {isModalOpen && modalContent && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
          <div className="bg-white p-6 rounded-lg ">
            <div className="flex justify-end">
              <button className="text-gray-500 text-2xl" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className=" flex justify-center items-center">
              <SessionTimings SessionTimings={modalContent} notshow={true}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorSessions;
