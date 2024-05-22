// import React, { useEffect, useMemo, useState } from "react";
// import Sidebar from "../../AdminHome/Sidebar/Sidebar";
// import Demo from "./Demo";
// import instance from "../../../axios";
// import DemoHospital from "./DemoHospital";
// import { updateApprovedHospitals } from "../../../data/features/registerSlice";
// import { useDispatch } from "react-redux";
// import ClipBgB from "../../../components/ui/clipPath/ClipBgB";

// function ApproveReject() {
//   const [pending, setPending] = useState([]);
//   const [notApprovedHospitals, setNotApprovedHospitals] = useState([]);
//   const [changed, setChanged] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();
//   const mydata = {
//     index: 2,
//   };

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const [pendingResponse, pendingHospitalResponse, changedResponse] =
//           await Promise.all([
//             instance.get("api/admin/getToBeApprovedDoctors"),
//             instance.get("api/admin/getAll/hospitals"),
//             instance.get("api/admin/doctors/approved/updated"),
//           ]);

//         setPending(pendingResponse.data.doctors || []);
//         setChanged(changedResponse.data || []);

//         const hospitals = pendingHospitalResponse.data || [];
//         const approved = [];
//         const notApproved = [];

//         hospitals.forEach((update) => {
//           console.log(update);
//           if (
//             update.requestForApproval &&
//             !update.isApproved &&
//             !update.isSuspended
//           ) {
//             notApproved.push(update);
//           }
//           if (update.isApproved && !update.isSuspended) {
//             approved.push(update);
//           }
//         });
//         setNotApprovedHospitals(notApproved);
//         dispatch(updateApprovedHospitals(approved));
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }

//     fetchData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="text-black font-medium text-3xl flex flex-row justify-between gap-28 h-screen w-screen bg-blue-600">
//         <div className=" ">
//           <div className="me-8 ">
//             <Sidebar someData={mydata} />
//           </div>
//         </div>

//         <div>
//           <div className="flex flex-row gap-28 mt-32 ms-28">
//             <div className="bg-[#D9D9D9] ">
//               <Demo
//                 bg1="bg-[#F75990]"
//                 bg2="bg-[#bf9ee6]"
//                 bg3="bg-blue-200"
//                 showData={[]}
//                 newBg="bg-[#0032FF]"
//                 newBga="#0032FF"
//                 spinner={true}
//               />
//             </div>
//             <div className="me-32">
//               <DemoHospital
//                 bg1="bg-[#845BB3]"
//                 bg2="bg-blue-300"
//                 bg3="bg-[#f089a4]"
//                 text="Pending Profiles Of Hospital ..."
//                 showData={[]}
//                 newBg="bg-[#229649]"
//                 newBga="#229649"
//                 spinner={true}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="flex flex-row  h-screen  bg-[#0529BB]">
//       <div className="flex flex-col justify-between w-[300px] ">
//         <div className="me-7">
//           <Sidebar someData={mydata} />
//         </div>
//       </div>
//       <div className=" w-full ms-0 md:ms-16">
//         <div className=" flex justify-center md:justify-normal mb-5 md:mb-0 ms-0 md:ms-6">
//           <ClipBgB width="w-[340px]" height="h-[65px]" bardervar="37px" />
//         </div>
//         <div className="flex flex-row md:gap-28 mt-16 w-full justify-center">
//           <div>
//             <Demo
//               bg1="bg-[#F75990]"
//               bg2="bg-[#bf9ee6]"
//               bg3="bg-blue-200"
//               showData={pending}
//               newBg="bg-[#0032FF]"
//               newBga="#0032FF"
//               spinner={false}
//             />
//           </div>
//           <div className="md:me-32">
//             <DemoHospital
//               bg1="bg-[#845BB3]"
//               bg2="bg-blue-300"
//               bg3="bg-[#f089a4]"
//               text="Pending Profiles Of Hospital ..."
//               showData={notApprovedHospitals}
//               newBg="bg-[#229649]"
//               newBga="#229649"
//               spinner={false}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ApproveReject;
import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "../../AdminHome/Sidebar/Sidebar";
import Demo from "./Demo";
import instance from "../../../axios";
import DemoHospital from "./DemoHospital";
import { updateApprovedHospitals } from "../../../data/features/registerSlice";
import { useDispatch } from "react-redux";
import ClipBgB from "../../../components/ui/clipPath/ClipBgB";

function ApproveReject() {
  const [data, setData] = useState({
    pending: [],
    notApprovedHospitals: [],
    changed: [],
    loading: true,
  });

  const dispatch = useDispatch();
  const mydata = {
    index: 2,
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const [pendingResponse, pendingHospitalResponse, changedResponse] =
          await Promise.all([
            instance.get("api/admin/getToBeApprovedDoctors"),
            instance.get("api/admin/getAll/hospitals"),
            instance.get("api/admin/doctors/approved/updated"),
          ]);

        const pending = pendingResponse.data.doctors || [];
        const changed = changedResponse.data || [];
        const hospitals = pendingHospitalResponse.data || [];

        const approved = [];
        const notApproved = [];

        hospitals.forEach((update) => {
          if (update.requestForApproval && !update.isApproved && !update.isSuspended) {
            notApproved.push(update);
          }
          if (update.isApproved && !update.isSuspended) {
            approved.push(update);
          }
        });

        setData({
          pending,
          notApprovedHospitals: notApproved,
          changed,
          loading: false,
        });

        dispatch(updateApprovedHospitals(approved));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [dispatch]);

  if (data.loading) {
    return (
      <div className="text-black font-medium text-3xl flex flex-row justify-between gap-28 h-screen w-screen bg-blue-600">
        <div className="">
          <div className="me-8">
            <Sidebar someData={mydata} />
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-28 mt-32 ms-28">
            <div className="bg-[#D9D9D9]">
              <Demo
                bg1="bg-[#F75990]"
                bg2="bg-[#bf9ee6]"
                bg3="bg-blue-200"
                showData={[]}
                newBg="bg-[#0032FF]"
                newBga="#0032FF"
                spinner={true}
              />
            </div>
            <div className="me-32">
              <DemoHospital
                bg1="bg-[#845BB3]"
                bg2="bg-blue-300"
                bg3="bg-[#f089a4]"
                text="Pending Profiles Of Hospital ..."
                showData={[]}
                newBg="bg-[#229649]"
                newBga="#229649"
                spinner={true}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row h-screen bg-[#0529BB]">
      <div className="flex flex-col justify-between w-[300px]">
        <div className="me-7">
          <Sidebar someData={mydata} />
        </div>
      </div>
      <div className="w-full ms-0 md:ms-16">
        <div className="flex justify-center md:justify-normal mb-5 md:mb-0 ms-0 md:ms-6">
          <ClipBgB width="w-[340px]" height="h-[65px]" bardervar="37px" />
        </div>
        <div className="flex flex-row md:gap-28 mt-16 w-full justify-center">
          <div>
            <Demo
              bg1="bg-[#F75990]"
              bg2="bg-[#bf9ee6]"
              bg3="bg-blue-200"
              showData={data.pending}
              newBg="bg-[#0032FF]"
              newBga="#0032FF"
              spinner={false}
            />
          </div>
          <div className="md:me-32">
            <DemoHospital
              bg1="bg-[#845BB3]"
              bg2="bg-blue-300"
              bg3="bg-[#f089a4]"
              text="Pending Profiles Of Hospital ..."
              showData={data.notApprovedHospitals}
              newBg="bg-[#229649]"
              newBga="#229649"
              spinner={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApproveReject;
