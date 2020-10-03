import React, { useState, useEffect } from "react";
import "./Footer.css";
import Button from "../../General/Button";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";

function Footer() {
  const [fdata, fsetData] = useState([]);
  useEffect(() => {}, []);
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, :
        </p>
        <p className="footer-subscription-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/">
              <h2>About Us</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s'.
              </p>
            </Link>
          </div>
          <div className="footer-link-items">
            <Link to="/">
              <h2>Contact Us</h2>
              <p>
                <font className="ft">Address : </font>
                some Address
              </p>
              <p>
                <font className="ft">Phone : </font> 1234567890
              </p>
              <p>
                <font className="ft">Mail : </font>
                example-yehlosoft@gmail.com
              </p>
            </Link>
          </div>
        </div>
        <div className="footer-link-wrapper"></div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Yehlosoft
            </Link>
          </div>
          <small className="website-rights">Yehlosoft</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to=""
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to=""
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-icon-link"
              to=""
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social-icon-link"
              to=""
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to=""
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
