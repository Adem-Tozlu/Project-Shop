import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome,FaChevronRight,FaChevronUp } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FetchAPIContext } from '../context/FetchAPI'
import { useContext, useState } from 'react'



function Layout() {
  const { numItem } = useContext(FetchAPIContext)
  const [show, setShow] = useState(true)

  return (
    <>
      


      <ul className="navigation">
        <li>
          <NavLink to="/"><FaHome className="navigation__icon" /></NavLink>
        </li>
        <li className="navigation__products">

          <NavLink to="#" onClick={() => setShow(!show)}>Products{show?<FaChevronRight />:<FaChevronUp />}</NavLink > <ul style={{ display: show ? "none" : "" }}><li>

            <NavLink to="/samsung">Samsung</NavLink></li>
            <li>
              <NavLink to="/apple">Apple</NavLink></li>
            <li>
              <NavLink to="/vivo">Vivo</NavLink></li>
            <li>

              <NavLink to="/realme">Realme</NavLink></li>
            <li>

              <NavLink to="/oppo">Oppo</NavLink></li></ul>




        </li>
        <NavLink to="/addlist" className="navigation__addList">
          <span className={numItem && "navigation__addList--numItem"}>{numItem ? numItem : ""}</span>
          <MdOutlineShoppingCart className="navigation__icon" />
        </NavLink>
      </ul>

      <main><Outlet /></main>
    </>

  );
}

export default Layout;
