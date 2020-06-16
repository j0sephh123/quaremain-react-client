import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStateI } from "../../interfaces/RootStateI";
import { MenuItemI } from "../../interfaces/SidebarI";

const Sidebar = () => {
  const menuItems = useSelector((rootState: RootStateI) => (
    rootState.sidebar
  ));

  return (
    <aside className="menu">
      <ul className="menu-list">
        {menuItems.map((item: MenuItemI) => (
          <li key={item.path}>
            <NavLink 
              to={item.path} 
              activeClassName="is-active" 
              exact={item.path === "/"}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;