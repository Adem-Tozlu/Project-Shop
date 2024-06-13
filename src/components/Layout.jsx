import React from "react";
import { NavLink,Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
    <h1>Wilkommen zu unserem Shop</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/addlist">Warenkorb</NavLink>
        </li>
      </ul>
      <main><Outlet /></main>
    </>
    
  );
}

export default Layout;
