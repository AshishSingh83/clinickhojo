import React from "react";
import { FiLogOut } from "react-icons/fi";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Lists from "./Lists/Lists.jsx";
import NewUpdates from "./NewUpdates/NewUpdates.jsx";
import "./AdminHome.css";
import ClipBgB from "../../components/ui/clipPath/ClipBgB.jsx";
function AdminHome() {
  const mydata = {
    index: 0,
  };
  return (
    <div className="flex flex-row justify-between h-screen w-screen bg-[#0529BB] ">
      <div className=" bg-[#D9D9D9] flex flex-col justify-between">
        <div className="me-7">
          <Sidebar someData={mydata} />
        </div>
        <div>
          <FiLogOut
            className="ms-8"
            style={{ color: "#061ba1", fontSize: "40px" }}
          />
        </div>
      </div>

      <div className="flex flex-row ">
        <div className=" flex flex-col me-60 ">
          <ClipBgB
            width="w-[200px]"
            height="h-[65px]"
            bardervar="24px"
            text="Home"
          />
          <div className=" mt-[-40px]  ">
            <Lists />
          </div>
        </div>

        <NewUpdates />
      </div>
    </div>
  );
}

export default AdminHome;
// import React from "react";
// import { FiLogOut } from "react-icons/fi";
// import Sidebar from "./Sidebar/Sidebar.jsx";
// import Lists from "./Lists/Lists.jsx";
// import NewUpdates from "./NewUpdates/NewUpdates.jsx";
// import "./AdminHome.css";
// import ClipBgB from "../../components/ui/clipPath/ClipBgB.jsx";

// function AdminHome() {
//   const mydata = {
//     index: 0,
//   };
//   return (
//     <div className="flex flex-col md:flex-row justify-between h-screen w-screen bg-[#0529BB] ">
//       <div className="bg-[#D9D9D9] flex flex-col justify-between p-4 md:p-0 md:w-1/4">
//         <Sidebar someData={mydata} />
//         <FiLogOut
//           className="mt-4 md:mt-0"
//           style={{ color: "#061ba1", fontSize: "40px" }}
//         />
//       </div>

//       <div className="flex flex-col md:flex-row flex-1 p-4 md:p-0">
//         <div className="flex flex-col w-full md:w-3/4">
//           <ClipBgB
//             width="w-full md:w-[200px]"
//             height="h-[65px]"
//             bardervar="24px"
//             text="Home"
//           />
//           <div className="mt-4 md:mt-[-40px]">
//             <Lists />
//           </div>
//         </div>
//         <NewUpdates className="mt-4 md:mt-0 md:ml-4" />
//       </div>
//     </div>
//   );
// }

// export default AdminHome;
