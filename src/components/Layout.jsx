import { NavLink, Outlet } from "react-router-dom";
import { FaChevronRight, FaChevronUp } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FetchAPIContext } from "../context/FetchAPI";
import { useContext, useState } from "react";
import Footer from "../components/Footer";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect } from "react";

function Layout() {
  const { numItem } = useContext(FetchAPIContext);
  const [show, setShow] = useState(true);
  const [menu, setMenu] = useState(true);
  const [nav, setNav] = useState(true);

  const navmenu = () => setMenu(!menu);
  const navtoggle = () => setShow(!show);

  const closeNav = () => [setShow(true), setMenu(nav)];

  useEffect(() => {
    const menuOut = () => {
      if (window.innerWidth > 1023) {
        setMenu(false);
        setNav(false);
      } else {
        setMenu(true);
        setNav(true);
      }
    };
    menuOut();

    window.addEventListener("resize", menuOut);

    return () => window.removeEventListener("resize", menuOut);
  }, []);

  return (
    <>
      <header className="header">
        <ul className="navigation">
          <li>
            <NavLink to="/">
              <h1 className="navigation__headtext">PhonePalast</h1>
              {/* <FaHome onClick={closeNav} className="navigation__icon" /> */}
            </NavLink>
          </li>

          <RxHamburgerMenu onClick={navmenu} className="navigation__menu" />
          <ul
            className="navigation__product__contact-product"
            style={{ display: menu ? "none" : "" }}
          >
            <NavLink to="/contact" className=" navigation__contact">
              Contact
            </NavLink>
            <li className="navigation__products">
              <NavLink
                to="#"
                onClick={navtoggle}
                className={"navigation__product-text"}
              >
                Products
                {show ? (
                  <FaChevronRight className="navigation__icon--arrow" />
                ) : (
                  <FaChevronUp className="navigation__icon--arrow" />
                )}
              </NavLink>{" "}
              <ul
                className="navigation__product__text"
                style={{ display: show ? "none" : "" }}
              >
                <li className="navigation__product--undertext">
                  <NavLink to="/samsung" className="navigation__product">
                    Samsung
                  </NavLink>
                </li>
                <li className="navigation__product--undertext">
                  <NavLink to="/apple" className="navigation__product">
                    Apple
                  </NavLink>
                </li>
                <li className="navigation__product--undertext">
                  <NavLink to="/vivo" className="navigation__product">
                    Vivo
                  </NavLink>
                </li>
                <li className="navigation__product--undertext">
                  <NavLink to="/realme" className="navigation__product">
                    Realme
                  </NavLink>
                </li>
                <li className="navigation__product--undertext">
                  <NavLink to="/oppo" className="navigation__product">
                    Oppo
                  </NavLink>
                </li>
                <li className="navigation__product--undertext">
                  <NavLink to="/accessories" className="navigation__product">
                    Accessories
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
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
      <Footer />
    </>
  );
}

export default Layout;
