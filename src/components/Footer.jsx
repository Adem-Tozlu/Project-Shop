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
        
        <div className="footer-container_1">
       
          <p>Relax in a Serene and Tranquil Paradise</p>
          
            <i className="facebook-icon">
              <RiFacebookFill />
            </i>
          
         
            <i className="instagram-icon">
              <IoLogoInstagram />
            </i>
         
        </div>
        <div className="footer-container_2">
          <h4 className="contacttext">CONTACT US</h4>
          <p>
            <i className="contact-icons">
              <BsTelephone />
             </i>
             (+505) 733 6053
          </p>
          <p>
            <i className="contact-icons">
              <MdOutlineMail />
            </i>
            hayadmu@gmail.com
          </p>
          <p>
            <i className="contact-icons">
              <CiLocationOn />
            </i>
            1645 Cooks Mine Road, 87325 Tohatchi <p className="land">New Mexico</p>{" "}
          </p>
        </div>
        <div className="footer-container_3">
          <h4 className="newlatesttext">NEW LATEST</h4>
          <p>Get the latest updates and offers.</p>
          <form className="form-email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email..."
            />
            <button className="email">
              <i className="email-icon">
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
