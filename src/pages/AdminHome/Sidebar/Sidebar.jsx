// import React, { useState, useMemo } from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import { Link } from "react-router-dom";
// import "./Sidebar.css";
// import { IconContext } from "react-icons";
// import { SidebarData } from "./SidebarData.jsx";
// import Button from "../../../components/ui/Button.jsx";

// function Sidebar() {
//   const [sidebar, setSidebar] = useState(true);
//   const memoizedSidebarData = useMemo(() => SidebarData, []);
//   const showSidebar = () => setSidebar(sidebar);
//   const handleSubmit = () => {
//     console.log('ok');
//   };
//   return (
//     <>
//       <IconContext.Provider value={{ color: "#061ba1", size: "40px" }}>
//         <div className="navbar ml-auto ps-0">
//           <Link to="#" className="menu-bars">
//             <FaIcons.FaBars onClick={showSidebar} />
//           </Link>
//         </div>
//         <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
//           <ul
//             className="nav-menu-items flex flex-col justify-between gap-4"
//             onClick={showSidebar}
//           >
//             <div>
//               <li className="navbar-toggle">
//                 <Link to="#" className="menu-bars">
//                   <AiIcons.AiOutlineClose />
//                 </Link>
//               </li>
//               {memoizedSidebarData.map((item, index) => {
//                 return (
//                   <li key={index} className={item.cName}>
//                     <Link to={item.path} className="flex items-center gap-2">
//                       {React.cloneElement(item.icon, { size: 24 })}
//                       <span className="whitespace-nowrap">{item.title}</span>
//                     </Link>
//                   </li>
//                 );
//               })}
//             </div>
//             <Button
//               handleSubmit={handleSubmit}
//               text="Logout"
//               bgColor="bg-red-800"
//               hoverColor="hover:bg-red-400"
//             />
//           </ul>
//         </nav>
//       </IconContext.Provider>
//     </>
//   );
// }
// export default Sidebar;

import React, { useState, useMemo, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { IconContext } from "react-icons";
import { SidebarData } from "./SidebarData.jsx";
import { FiLogOut } from "react-icons/fi";
import Button from "../../../components/ui/Button.jsx";
import { useNavigate } from "react-router-dom";
import ClipBgA from "../../../components/ui/clipPath/ClipBgA.jsx";
import ClipBgC from "../../../components/ui/clipPath/ClipBgC.jsx";
function Sidebar({ someData }) {
  const [sidebar, setSidebar] = useState(true);
  const [activeItem, setActiveItem] = useState(2);
  const navigate = useNavigate() ;
  const memoizedSidebarData = useMemo(() => SidebarData, []);
  console.log(someData);
  const showSidebar = () => setSidebar(sidebar);
  useEffect(() => {
    setActiveItem(someData.index);
  }, [someData]);
  const handleClick = (index) => {
    setActiveItem(index);
  };

  const handleSubmit = () => {};
  const handleLogout = () => {
    if (localStorage.getItem("AdminToken") !== null) {
      localStorage.removeItem("AdminToken");
    }
    if (localStorage.getItem("SubAdminToken") !== null) {
      localStorage.removeItem("SubAdminToken");
    }
    navigate("../");
  }
  return (
    <>
      <IconContext.Provider value={{ color: "#000000", size: "35px" }}>
        <div className="navbar ml-auto ps-0">
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul
            className="nav-menu-items flex flex-col justify-between gap-1"
            onClick={showSidebar}
          >
            <div>
              <div className="flex items-center justify-center rounded-none bg-white h-32 ">
                <div className="  w-[180px]">
                  <img alt="" className="" src="whitecliniclogo.png" />
                </div>
              </div>
              {memoizedSidebarData.map((item, index) => {
                return (
                  <li
                    key={index}
                    className=" nav-text"
                    onClick={() => handleClick(index)}
                    style={{
                      background:
                        activeItem === index ? "#0529BB" : "transparent",
                    }}
                  >
                    <Link to={item.path} className="flex items-center gap-">
                      {React.cloneElement(item.icon, { size: 24 })}
                      <span className="whitespace-nowrap">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </div>
            <div className=" flex flex-col">
            <div className="flex flex-row text-black gap-7 mb-10 ms-8  " onClick={handleLogout}>
              <p className=" h-4 w-4">
                <FiLogOut color="#FF0B0B"/>
              </p>
              <p className=" font-medium mt-1 text-lg text-[#FF0B0B]">Log Out</p>
            </div>
            {/* <div className="  h-[62px] bg-[#0529BB] text-sm bg-opacity-90 text-opacity-80  flex justify-center items-center flex-col ">
            <p>Shamyani health services Pvt Ltd</p>
            <p>An ISO 9001:2015 certified company</p>
            </div> */}
            <ClipBgC/>
            </div>
           
            
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
