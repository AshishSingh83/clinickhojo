import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { IconContext } from "react-icons";
import { SidebarData } from "./SidebarData.jsx";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ClipBgC from "../../../components/ui/clipPath/ClipBgC.jsx";
function Sidebar({ someData }) {
  const [sidebar, setSidebar] = useState(true);
  const [activeItem, setActiveItem] = useState(2);
  const navigate = useNavigate();
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
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#000000", size: "35px" }}>
        <div className="navbar ml-auto ps-0"></div>
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
              <div
                className="flex flex-row text-black gap-7 mb-10 ms-8  "
                onClick={handleLogout}
              >
                <p className=" h-4 w-4">
                  <FiLogOut color="#FF0B0B" />
                </p>
                <p className=" font-medium mt-1 text-lg text-[#FF0B0B]">
                  Log Out
                </p>
              </div>
              <ClipBgC />
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
