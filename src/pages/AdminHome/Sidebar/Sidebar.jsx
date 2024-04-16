import React, { useState, useMemo } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { IconContext } from "react-icons";
import { SidebarData } from "./SidebarData.jsx";
import Button from "../../../components/ui/Button.jsx";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const memoizedSidebarData = useMemo(() => SidebarData, []); 
  const showSidebar = () => setSidebar(!sidebar);
  const handleSubmit = () => {
    console.log('ok');
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#061ba1", size: "40px" }}>
        <div className="navbar ml-auto ps-0">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul
            className="nav-menu-items flex flex-col justify-between gap-4"
            onClick={showSidebar}
          >
            <div>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {memoizedSidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path} className="flex items-center gap-2">
                      {React.cloneElement(item.icon, { size: 24 })}
                      <span className="whitespace-nowrap">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </div>
            <Button
              handleSubmit={handleSubmit}
              text="Logout"
              bgColor="bg-red-800"
              hoverColor="hover:bg-red-400"
            />
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;

