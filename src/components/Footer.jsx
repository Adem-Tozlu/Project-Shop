import React from "react";

import { RiFacebookFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container_1">
        <h1 className="footer__container_1-headline">PhonePalast</h1>
        <span className="footer__container_1-copyright-text">
          &copy;2024 PhonePalast | <NavLink to="#">Impressum</NavLink>{" "}
        </span>
      </div>
      <div className="footer__container_2">
        <RiFacebookFill className="footer__icon" />

        <IoLogoInstagram className="footer__icon" />

        <CiLinkedin className="footer__icon" />
        <FaXTwitter className="footer__icon" />
      </div>
    </footer>
  );
}

export default Footer;
