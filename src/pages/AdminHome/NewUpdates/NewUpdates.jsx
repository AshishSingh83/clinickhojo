// import React from "react";
// import { updateConstant } from "./updateConstant";

// const NewUpdates = () => {
//   return (
//     <div style={{  overflow: "scroll" }} className="bg-[#03229F]">
//       <div className="bg-[#E2FCF6] mt-[-12px] rounded-md mb-14 ">
//         <h2 className="text-xl text-black font-medium p-3 m-3 font-sans ms-12">Recent Updates :</h2>
//       </div>
//       {updateConstant.map((update, index) => (
//         <div
//           key={index}
//           className=" p-4 m-6 rounded-lg bg-[#FFFFFF]"
//           style={{ maxWidth: "300px" }}
//         >
//           <p className="text-black font-medium text-lg ">
//             <span className=" mr-2">{index + 1}.</span>
//             {update.content}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NewUpdates;
import React, { useEffect, useState } from "react";
import { updateConstant } from "./updateConstant";
const NewUpdates =()=>{
  const [loading, setLoading] = useState(true);
  const [updates,setUpdates] = useState([]) ;

  // useEffect(() => {
  //   async function getRecentUpdates() {
  //     try {
  //       const response = await axios.get("api/admin/getAllSubAdmins");
  //       setUpdates(response.data);
  //       setLoading(false)
  //     } catch (error){
  //       setLoading(false)
  //     }
  //   }
  //   getRecentUpdates();
  // }, []);



  return (
    <div style={{ overflow: "scroll", position: "relative" }} className="bg-[#03229F]">
      <div style={{ position: "sticky", top: 0, zIndex: 1 }}>
        <div className="bg-[#FFFFFF] mt-[-12px] rounded-md mb-14 ">
          <h2 className="text-xl text-[#FA0808]  font-semibold p-3 m-3 font-sans ms-12">Recent Updates :</h2>
        </div>
      </div>
      {updateConstant.map((update, index) => (
        <div
          key={index}
          className=" p-4 m-6 rounded-lg bg-[#E7ECFF]"
          style={{ maxWidth: "300px" }}
        >
          <p className="text-black font-medium text-lg ">
            <span className=" mr-2">{index + 1}.</span>
            {update.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NewUpdates;
