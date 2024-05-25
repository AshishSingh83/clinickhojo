
// import React, { useState, useMemo, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Sidebar.css";
// import { IconContext } from "react-icons";
// import { SidebarData } from "./SidebarData.jsx";
// import { FiLogOut, FiMenu } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import ClipBgC from "../../../components/ui/clipPath/ClipBgC.jsx";

// function Sidebar({ someData }) {
//   const [sidebar, setSidebar] = useState(window.innerWidth > 1068); 
//   const [activeItem, setActiveItem] = useState(2);
//   const navigate = useNavigate();
//   const memoizedSidebarData = useMemo(() => SidebarData, []);

//   const toggleSidebar = () =>{
//     setSidebar(!sidebar);
//     console.log('clicked');
//   } 

//   useEffect(() => {
//     const handleResize = () => setSidebar(window.innerWidth > 1400);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     setActiveItem(someData.index);
//   }, [someData]);

//   const handleClick = (index) => {
//     setActiveItem(index);
//     if (window.innerWidth <= 768) closeSidebar(); 
//   };

//   const closeSidebar = () => setSidebar(false);

//   const handleLogout = () => {
//     localStorage.removeItem("AdminToken");
//     localStorage.removeItem("SubAdminToken");
//     navigate("../");
//   };

//   return (
//     <>
//       <IconContext.Provider value={{ color: "#000000", size: "35px" }}>
//         <div className=" h-12 w-12">
//           <FiMenu onClick={toggleSidebar}  size={40}  />
//         </div>
//         <div className={`nav-menu  z-50  ${sidebar ? "active" : ""}`}>
//           <ul
//             className="  flex flex-col justify-between gap-1  "
//             onClick={window.innerWidth <= 768 ? closeSidebar : null}
//             style={{width:'300px'}}
//           >
//             <div>
//               <div className="flex items-center justify-center rounded-none bg-white h-32">
//                 <div className="w-[180px]">
//                   <img alt="logo" src="whitecliniclogo.png" />
//                 </div>
//               </div>
//               {memoizedSidebarData.map((item, index) => (
//                 <li
//                   key={index}
//                   className="nav-text"
//                   onClick={() => handleClick(index)}
//                   style={{
//                     background:
//                       activeItem === index ? "#0529BB" : "transparent",
//                   }}
//                 >
//                   <Link to={item.path} className="flex items-center gap-2">
//                     {React.cloneElement(item.icon, { size: 24 })}
//                     <span className="whitespace-nowrap">{item.title}</span>
//                   </Link>
//                 </li>
//               ))}
//             </div>
//             <div className="flex flex-col">
//               <div
//                 className="flex  text-black gap-7 mb-10 ms-8"
//                 onClick={handleLogout}
//               >
//                 <p className="h-4 w-4">
//                   <FiLogOut color="#FF0B0B"  />
//                 </p>
//                 <p className="font-medium mt-1 text-lg text-[#FF0B0B]">
//                   Log Out
//                 </p>
//               </div>
//               <ClipBgC />
//             </div>
//           </ul>
//         </div>
//       </IconContext.Provider>
//     </>
//   );
// }

// export default Sidebar;
import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { IconContext } from "react-icons";
import { SidebarData } from "./SidebarData.jsx";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ClipBgC from "../../../components/ui/clipPath/ClipBgC.jsx";

function Sidebar({ someData }) {
  const [sidebar, setSidebar] = useState(window.innerWidth > 1068); 
  const [activeItem, setActiveItem] = useState(2);
  const navigate = useNavigate();
  const memoizedSidebarData = useMemo(() => SidebarData, []);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
    console.log('clicked');
  };

  useEffect(() => {
    const handleResize = () => setSidebar(window.innerWidth > 1400);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setActiveItem(someData.index);
  }, [someData]);

  const handleClick = (index) => {
    setActiveItem(index);
    if (window.innerWidth <= 768) closeSidebar();
  };

  const closeSidebar = () => setSidebar(false);

  const handleLogout = () => {
    localStorage.removeItem("AdminToken");
    localStorage.removeItem("SubAdminToken");
    navigate("../");
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#000000", size: "35px" }}>
        <div className={`menu-icon ${sidebar ? 'hidden' : ''}`}>
          <FiMenu onClick={toggleSidebar} size={40} />
        </div>
        <div className={`nav-menu z-50 ${sidebar ? "active" : ""}`}>
          <ul
            className="flex flex-col justify-between gap-1"
            onClick={window.innerWidth <= 768 ? closeSidebar : null}
            style={{ width: '300px' }}
          >
            <div>
              <div className="flex items-center justify-center rounded-none bg-white h-32">
                <div className="w-[180px]">
                  <img alt="logo" src="whitecliniclogo.png" />
                </div>
              </div>
              {memoizedSidebarData.map((item, index) => (
                <li
                  key={index}
                  className="nav-text"
                  onClick={() => handleClick(index)}
                  style={{
                    background: activeItem === index ? "#0529BB" : "transparent",
                  }}
                >
                  <Link to={item.path} className="flex items-center gap-2">
                    {React.cloneElement(item.icon, { size: 24 })}
                    <span className="whitespace-nowrap">{item.title}</span>
                  </Link>
                </li>
              ))}
            </div>
            <div className="flex flex-col">
              <div
                className="flex text-black gap-7 mb-10 ms-8"
                onClick={handleLogout}
              >
                <p className="h-4 w-4">
                  <FiLogOut color="#FF0B0B" />
                </p>
                <p className="font-medium mt-1 text-lg text-[#FF0B0B]">
                  Log Out
                </p>
              </div>
              <ClipBgC />
            </div>
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
