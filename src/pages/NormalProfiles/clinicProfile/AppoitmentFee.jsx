// import React, { useEffect } from "react";
// import Input from "../../../components/ui/Input";
// import NumberSelect from "../../ApproveRejectUsers/ApproveRejectB/NumberSelect";
// import { FaEdit } from 'react-icons/fa';
// const AppointmentFee = ({
//   normalFee,
//   setNormalFee,
//   emergencyFee,
//   setEmergencyFee,
//   onRatingChange,
//   rating,
//   disabledA = true,
//   disabledB = true,
//   disabledC = true,
// }) => {
//   const handleChangeA = (e) => {
//     setNormalFee(e.target.value);
//   };

//   const handleChangeB = (e) => {
//     setEmergencyFee(e.target.value);
//   };

//   const handleRatingSelect = (rating) => {
//     onRatingChange(rating);
//   };

//   useEffect(() => {
//     setNormalFee(normalFee);
//     setEmergencyFee(emergencyFee);
//   }, []);

//   return (
//     <div className="bg-[#03229F] w-[435px] h-[185] mb-4 rounded-sm">
//       <div>
//         <h1 className="text-lg ms-5 m-2 font-semibold">
//           Appointment Fee Detail:
//         </h1>
//       </div>
//       <div>
//         <div className="font-medium ms-2 mb-5 opacity-75">
//           <div className="mt-3 flex flex-row">
//             <span className="font-sm">
//               Normal Appointment Booking Fee: Rs.
//             </span>
//             <div className=" w-24 mt-[-7px] ms-2 flex flex-row">
//               <Input
//                 bg1="bg-[#F2EFEF]"
//                 handleChange={handleChangeA}
//                 value={normalFee}
//                 disabled={disabledA}
//               />
//               <div className=" flex justify-center items-center ms-3">
//                 <FaEdit />
//               </div>
//             </div>
//             <br />
//           </div>
//           <div className="mt-4 flex flex-row">
//             <span className="font-sm">
//               Emergency Appointment Booking Fee:
//             </span>
//             <div className="w-24 mt-[-7px] ms-2 flex flex-row">
//               <Input
//                 bg1="bg-[#F2EFEF]"
//                 handleChange={handleChangeB}
//                 value={emergencyFee}
//                 disabled={disabledB}
//               />
//                <div className=" flex justify-center items-center ms-3">
//                 <FaEdit />
//               </div>
//             </div>
//             <br />
//           </div>
//           <div className="mt-1">
//             <span className="flex flex-row">
//               <p className="text-lg">Provide Rating:</p>
//               <div className="ms-10">
//                 <NumberSelect
//                   onSelect={handleRatingSelect}
//                   rating={rating}
//                   disabled={disabledC}
//                 />
//               </div>
//             </span>
//           </div>
//           <div></div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default AppointmentFee;
import React, { useEffect, useState } from "react";
import Input from "../../../components/ui/Input";
import NumberSelect from "../../ApproveRejectUsers/ApproveRejectB/NumberSelect";
import { FaEdit, FaSave } from 'react-icons/fa';

const AppointmentFee = ({
  normalFee,
  setNormalFee,
  emergencyFee,
  setEmergencyFee,
  onRatingChange,
  rating,
}) => {
  const [isEditingA, setIsEditingA] = useState(false);
  const [isEditingB, setIsEditingB] = useState(false);
  const [isEditingC, setIsEditingC] = useState(false);

  const handleChangeA = (e) => {
    setNormalFee(e.target.value);
  };

  const handleChangeB = (e) => {
    setEmergencyFee(e.target.value);
  };

  const handleRatingSelect = (rating) => {
    onRatingChange(rating);
  };

  const toggleEditA = () => {
    setIsEditingA(!isEditingA);
    if(isEditingA){
      console.log('hiiiii');
     }
  };

  const toggleEditB = () => {
   if(isEditingB){
    console.log('hiiiii');
   }
    setIsEditingB(!isEditingB);
  };

  const toggleEditC = () => {
    if(isEditingC){
      console.log('hiiiii');
     }
    setIsEditingC(!isEditingC);
  };

  useEffect(() => {
    setNormalFee(normalFee);
    setEmergencyFee(emergencyFee);
  }, []);

  return (
    <div className="bg-[#03229F] w-[435px] h-[185px] mb-4 rounded-sm">
      <div>
        <h1 className="text-lg ms-5 m-2 font-semibold">
          Appointment Fee Detail:
        </h1>
      </div>
      <div>
        <div className="font-medium ms-2 mb-5 opacity-75">
          <div className="mt-3 flex flex-row">
            <span className="font-sm">
              Normal Appointment Booking Fee: Rs.
            </span>
            <div className="w-24 mt-[-7px] ms-2 flex flex-row">
              <Input
                bg1="bg-[#F2EFEF]"
                handleChange={handleChangeA}
                value={normalFee}
                disabled={!isEditingA}
              />
              <div className="flex justify-center items-center ms-3" onClick={toggleEditA}>
                {isEditingA ? <FaSave /> : <FaEdit />}
              </div>
            </div>
            <br />
          </div>
          <div className="mt-4 flex flex-row">
            <span className="font-sm">
              Emergency Appointment Booking Fee:
            </span>
            <div className="w-24 mt-[-7px] ms-2 flex flex-row">
              <Input
                bg1="bg-[#F2EFEF]"
                handleChange={handleChangeB}
                value={emergencyFee}
                disabled={!isEditingB}
              />
              <div className="flex justify-center items-center ms-3 hover: " onClick={toggleEditB}>
                {isEditingB ? <FaSave /> : <FaEdit />}
              </div>
            </div>
            <br />
          </div>
          <div className="mt-1">
            <span className="flex flex-row">
              <p className="text-lg">Provide Rating:</p>
              <div className="ms-10 flex flex-row">
                <NumberSelect
                  onSelect={handleRatingSelect}
                  rating={rating}
                  disabled={!isEditingC}
                />
                <div className="flex justify-center items-center ms-3" onClick={toggleEditC}>
                  {isEditingC ? <FaSave /> : <FaEdit />}
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
