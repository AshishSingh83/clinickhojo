// import React from "react";
// import { DemoConstant } from "./DemoConstant.js";

// const Demo2 = () => {
//   return (
//     <div
//       style={{ backgroundColor: "#494D5F", width: "450px", height: "500px" }}
//     >
//       <div className="bg-[#845BB3] mt-[-12px] rounded-md">
//         <h2 className="text-xl  p-3 m-3  font-medium">
//           Already Existing Profiles which are updated
//         </h2>
//       </div>
//       <div style={{ overflow: "auto", maxHeight: "400px" }}>
//         {" "}
//         {DemoConstant.map((update, index) => (
//           <div
//             key={index}
//             className={`p-4 mb-4 ${
//               index % 2 === 0 ? "bg-blue-300" : "bg-[#f089a4]"
//             } flex flex-row justify-between ml-9`}
//             style={{ maxWidth: "350px" }}
//           >
//             <p className="text-black font-semibold ">
//               <span className="font-bold ">{index + 1}. </span>
//               {update.name} <br />
//               <span className=" font-medium ">UniqueId : </span>
//               {update.UniqueId} <br />
//               <span className="font-medium ">City : </span>
//               {update.City}
//             </p>
//             <span
//               className="inline-block rounded-md cursor-pointer h-9 px-4 py-1  text-sm   text-white mt-5 pt-2"
//               style={{ backgroundColor: "#4575f7" }}
//             >
//               View...
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Demo2;
