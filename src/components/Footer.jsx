import React from "react";

import { RiFacebookFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";



function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container_1">
        <h1 className="head">PhonePalast</h1>
      </div>
      <div className="footer__container_2">
        <RiFacebookFill className="footer__icon" />

        <IoLogoInstagram className="footer__icon" />

        <CiLinkedin className="footer__icon" />
        <FaXTwitter className="footer__icon"/>

       


      </div>
    </footer>
  );
}

export default Footer;
