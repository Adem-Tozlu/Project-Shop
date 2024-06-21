import React from "react";

import { RiFacebookFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { RiMailSendLine } from "react-icons/ri";

import "../styles/Footer.css";

function Footer() {
  return (
    <>
      
      <footer className="footer">
        
        <div className="footer__container_1">
       
          <p>Relax in a Serene and Tranquil Paradise</p>
          
            <i className="footer__facebook-icon">
              <RiFacebookFill />
            </i>
          
         
            <i className="footer__instagram-icon">
              <IoLogoInstagram />
            </i>
         
        </div>
        <div className="footer__container_2">
  <h4 className="footer__contact--text">CONTACT US</h4>
  <p>
    <i className="footer__contact--icons">
      <BsTelephone />
    </i>
    (+505) 733 6053
  </p>
  <p>
    <i className="footer__contact--icons">
      <MdOutlineMail />
    </i>
    hayadmu@gmail.com
  </p>
  <p>
    <i className="footer__contact--icons">
      <CiLocationOn />
    </i>
    1645 Cooks Mine Road, 87325 Tohatchi <span className="footer__city--text">New Mexico</span>
  </p>
</div>
        <div className="footer__container_3">
          <h4 className="footer__new_latest--text">NEW LATEST</h4>
          <p>Get the latest updates and offers.</p>
          <form className="footer__form">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email..."
            />
            <button className="footer__form_email--button">
              <i className="footer__form--email--button-icon">
                <RiMailSendLine />
              </i>
            </button>
          </form>
        </div>
      </footer>
    </>
  );
}

export default Footer;
