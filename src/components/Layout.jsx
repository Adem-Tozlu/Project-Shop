import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaChevronRight, FaChevronUp } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FetchAPIContext } from "../context/FetchAPI";
import { useContext, useState } from "react";

function Layout() {
  const { numItem } = useContext(FetchAPIContext);
  const [show, setShow] = useState(true);

  const navtoggle = () => setShow(!show);
  const closeNav = () => setShow(true);
  return (
    <>
      <header className="header">
        <ul className="navigation">
          <li>
            <NavLink to="/">
              <FaHome onClick={closeNav} className="navigation__icon" />
            </NavLink>
          </li>
          <li className="navigation__products">
            <NavLink to="#" onClick={navtoggle}>
              Products{show ? <FaChevronRight /> : <FaChevronUp />}
            </NavLink>{" "}
            <ul
              className="navigation__product__text"
              style={{ display: show ? "none" : "" }}
            >
              <li>
                <NavLink to="/samsung" className="navigation__product">
                  Samsung
                </NavLink>
              </li>
              <li>
                <NavLink to="/apple" className="navigation__product">
                  Apple
                </NavLink>
              </li>
              <li>
                <NavLink to="/vivo" className="navigation__product">
                  Vivo
                </NavLink>
              </li>
              <li>
                <NavLink to="/realme" className="navigation__product">
                  Realme
                </NavLink>
              </li>
              <li>
                <NavLink to="/oppo" className="navigation__product">
                  Oppo
                </NavLink>
              </li>
              <li>
                <NavLink to="/accessories" className="navigation__product">
                  Accessories
                </NavLink>
              </li>

            </ul>
          </li>
          <NavLink to="/addlist" className="navigation__addList">
            <span className={numItem && "navigation__addList--numItem"}>
              {numItem ? numItem : ""}
            </span>
            <MdOutlineShoppingCart
              onClick={closeNav}
              className="navigation__icon"
            />
          </NavLink>
        </ul>
      </header>

      <main onClick={closeNav}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
