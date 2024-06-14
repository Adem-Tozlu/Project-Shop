import React from "react";
import { NavLink,Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FetchAPIContext } from '../context/FetchAPI'
import { useContext} from 'react'



function Layout() {
  const { numItem } = useContext(FetchAPIContext)

  return (
    <>
    <h1>Welcome to our shop</h1>
    
      <ul>
        <li>
          <NavLink to="/"><FaHome className="icon"/></NavLink>
        </li>
        <li>
        <NavLink to="/addlist" className="addlist">
  <span className={numItem&&"numItemWrapper"}>{numItem ? numItem : ""}</span>
  <MdOutlineShoppingCart className="icon" />
</NavLink>
        </li>
      </ul>
      
      <main><Outlet /></main>
    </>
    
  );
}

export default Layout;
