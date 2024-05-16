// import React, { useEffect, useState } from "react";
// import { FiLogOut } from "react-icons/fi";
// import axios from 'axios';
// import Sidebar from "../AdminHome/Sidebar/Sidebar";
// import Demo from "../ApproveRejectUsers/ApproveRejectA/Demo";
// import Skeletonn from "../../components/ui/SkeletonPage.jsx/Skeletonn";
// import DemoHospital from "../ApproveRejectUsers/ApproveRejectA/DemoHospital";
// import { useSelector } from "react-redux";
// import DemoUser from './Components/DemoUser'
// function ViewProfileMain() {
//   const [allUsers, setAllUsers] = useState([]);
//   const [approveDoctors, setApproveDoctors] = useState([]);
//   const [deleteRequest, setDeleteRequest] = useState([]);
//   const [approvedHospital, setApprovedHospital] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const ApprovedHospitals = useSelector((state) => state.register.approvedHospitals);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const [pendingResponse, changedResponse, doctorDeleteRequest] = await Promise.all([
//           axios.get('api/admin/getAllUser'),
//           axios.get('api/admin/getApprovedDoctors'),
//           axios.get('api/admin/delete/getAllDoctors'),
//         ]);
//         setAllUsers(pendingResponse.data.user || []);
//         setApproveDoctors(changedResponse.data.doctors || []);
//         setDeleteRequest(doctorDeleteRequest.data.doctors || []);
//         async function getHospitals(){
//           console.log('hi here');
//           try{
//            const dataa =  await axios.get('api/admin/getAll/hospitals') ;
//            const hospitals = dataa.data || [];
//            console.log('hospitals',hospitals);
//            const approved = [];
//            await hospitals.forEach(update => {
//              if (update.requestForApproval) {
//                if (update.isApproved) {
//                  approved.push(update);
//                }
//              }
//            });
//            setApprovedHospital(approved)
//           }catch(e){
//             setApprovedHospital([])
//           }
//         }
//         if(ApprovedHospitals==''){
//           getHospitals() ;
//         }else{
//           setApprovedHospital(ApprovedHospitals);
//         }
//         console.log('hahahahahahahhahahahahaaaaaaaaaaaaaaaaaa');
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }
//     fetchData();
//   }, []);

 
//   if (loading) {
//     return (
//       <div className="text-black font-medium text-3xl flex flex-row gap-28 h-screen w-screen bg-blue-600">
//         <div className="flex flex-col justify-between">
//           <div className="me-7">
//             <Sidebar someData={{ index: 5 }} />
//           </div>
//           <div>
//             <FiLogOut className="ms-8" style={{ color: "#061ba1", fontSize: "40px" }} />
//           </div>
//         </div>
//         <div className="flex flex-row justify-center items-center ms-36 mt-16 gap-28">
//           <Skeletonn count="9" width={400} />
//           <Skeletonn count="9" width={400} />
//         </div>
//       </div>
//     );
//   }

//   function deleteUser() {
//     console.log('okay');
//   }

//   return (
//     <div className="flex flex-row justify-between w-screen bg-[#0529BB]">
//       <div className="flex flex-col justify-between bg-[#c2c0bc]">
//         <div className="me-7">
//           <Sidebar someData={{ index: 5 }} />
//         </div>
//         <div>
//           <FiLogOut className="ms-8" style={{ color: "#061ba1", fontSize: "40px" }} />
//         </div>
//       </div>
//       <div>
//         <div className="mt-14 flex flex-row justify-between">
//           <div className="bg-[#FF0B0B] h-14 w-44">
//             <p className="text-white mt-4 ms-10">View Profile</p>
//           </div>
//         </div>
//         <div>
//           <div className="flex flex-row gap-28 mt-16">
//             <div>
//               <Demo
//                 bg1="bg-[#845BB3]"
//                 bg2="bg-blue-300"
//                 bg3="bg-[#f089a4]"
//                 text="All verified Doctors Profiles ..."
//                 showData={approveDoctors}
//                 normalVerified={true}
//               />
//             </div>
//             <div className="me-32">
//               <DemoHospital
//                 bg1="bg-[#845BB3]"
//                 bg2="bg-blue-300"
//                 bg3="bg-[#f089a4]"
//                 text="All Approved Profiles Of Hospital ..."
//                 showData={approvedHospital}
//                 newBg="bg-[#229649]"
//                 newBga="#229649"
//               />
//             </div>
//           </div>

//           <div className="flex flex-row gap-28 mt-16">
//             <div>
//               <Demo
//                 bg1="bg-[#845BB3]"
//                 bg2="bg-blue-300"
//                 bg3="bg-[#f089a4]"
//                 text="Doctors Requested for delete profiles"
//                 showData={deleteRequest}
//                 normalVerified={true}
//               />
//             </div>
//             <div className="me-32">
//               <DemoUser
//                 bg1="bg-[#845BB3]"
//                 bg2="bg-blue-300"
//                 bg3="bg-[#f089a4]"
//                 text="Profiles of All Users ..."
//                 showData={allUsers}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ViewProfileMain;
import React, { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import axios from 'axios';
import Sidebar from "../AdminHome/Sidebar/Sidebar";
import Demo from "../ApproveRejectUsers/ApproveRejectA/Demo";
import Skeletonn from "../../components/ui/SkeletonPage.jsx/Skeletonn";
import DemoHospital from "../ApproveRejectUsers/ApproveRejectA/DemoHospital";
import { useSelector } from "react-redux";
import DemoUser from './Components/DemoUser';

function ViewProfileMain() {
  const [allUsers, setAllUsers] = useState([]);
  const [approveDoctors, setApproveDoctors] = useState([]);
  const [deleteRequest, setDeleteRequest] = useState([]);
  const [approvedHospital, setApprovedHospital] = useState([]);
  const [loading, setLoading] = useState(true);
  const ApprovedHospitals = useSelector((state) => state.register.approvedHospitals);

  useEffect(() => {
    async function fetchData() {
      try {
        const [pendingResponse, changedResponse, doctorDeleteRequest] = await Promise.all([
          axios.get('api/admin/getAllUser'),
          axios.get('api/admin/getApprovedDoctors'),
          axios.get('api/admin/delete/getAllDoctors'),
        ]);

        setAllUsers(pendingResponse.data.user || []);
        setApproveDoctors(changedResponse.data.doctors || []);
        setDeleteRequest(doctorDeleteRequest.data.doctors || []);

        if (ApprovedHospitals === '') {
          const dataa = await axios.get('api/admin/getAll/hospitals');
          const hospitals = dataa.data || [];
          const approved = hospitals.filter(update => update.requestForApproval && update.isApproved);
          setApprovedHospital(approved);
        } else {
          setApprovedHospital(ApprovedHospitals);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [ApprovedHospitals]);

  if (loading) {
    return (
      <div className="text-black font-medium text-3xl flex flex-row gap-28 h-screen w-screen bg-blue-600">
        <div className="flex flex-col justify-between">
          <div className="me-7">
            <Sidebar someData={{ index: 5 }} />
          </div>
          <div>
            <FiLogOut className="ms-8" style={{ color: "#061ba1", fontSize: "40px" }} />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center ms-36 mt-16 gap-28">
          <Skeletonn count="9" width={400} />
          <Skeletonn count="9" width={400} />
        </div>
      </div>
    );
  }

  function deleteUser() {
    console.log('okay');
  }

  return (
    <div className="flex flex-row justify-between w-screen bg-[#0529BB]">
      <div className="flex flex-col justify-between bg-[#c2c0bc]">
        <div className="me-7">
          <Sidebar someData={{ index: 5 }} />
        </div>
        <div>
          <FiLogOut className="ms-8" style={{ color: "#061ba1", fontSize: "40px" }} />
        </div>
      </div>
      <div>
        <div className="mt-14 flex flex-row justify-between">
          <div className="bg-[#FF0B0B] h-14 w-44">
            <p className="text-white mt-4 ms-10">View Profile</p>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-28 mt-16">
            <div>
              <Demo
                bg1="bg-[#845BB3]"
                bg2="bg-blue-300"
                bg3="bg-[#f089a4]"
                text="All verified Doctors Profiles ..."
                showData={approveDoctors}
                normalVerified={true}
              />
            </div>
            <div className="me-32">
              <DemoHospital
                bg1="bg-[#845BB3]"
                bg2="bg-blue-300"
                bg3="bg-[#f089a4]"
                text="All Approved Profiles Of Hospital ..."
                showData={approvedHospital}
                newBg="bg-[#229649]"
                newBga="#229649"
                normalVerified="true"
              />
            </div>
          </div>

          <div className="flex flex-row gap-28 mt-16">
            <div>
              <Demo
                bg1="bg-[#845BB3]"
                bg2="bg-blue-300"
                bg3="bg-[#f089a4]"
                text="Doctors Requested for delete profiles"
                showData={deleteRequest}
                normalVerified={true}
              />
            </div>
            <div className="me-32">
              <DemoUser
                bg1="bg-[#845BB3]"
                bg2="bg-blue-300"
                bg3="bg-[#f089a4]"
                text="Profiles of All Users ..."
                showData={allUsers}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProfileMain;
