import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagramSquare,
  FaWhatsappSquare,
  FaFacebookSquare,
  FaCaretRight,
} from "react-icons/fa";
import Logo from "../assets/media/images/logo/final move logo.jpg";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="top-container">
        <div className="logo-container">
          <Link to={"/"} className="logo">
            <img
              src={Logo}
              alt="final move logo"
              style={{ borderRadius: "50%", width: "40%", maxWidth: "70px" }}
            />
          </Link>
          <p>...The final move of God</p>
        </div>

        <div className="links-container">
          <section className="footer-nav">
            <h4>Nav Links</h4>

            <ul>
              <li>
                <Link to={"/"}>
                  <span>
                    <FaCaretRight />
                  </span>{" "}
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/about"}>
                  <span>
                    <FaCaretRight />
                  </span>
                  About
                </Link>
              </li>
              <li>
                <Link to={"/blog"}>
                  <span>
                    <FaCaretRight />
                  </span>
                  Blog
                </Link>
              </li>
              <li>
                <Link to={"/resources"}>
                  <span>
                    <FaCaretRight />
                  </span>
                  Resources
                </Link>
              </li>
              <li>
                <Link to={"/Contact"}>
                  <span>
                    <FaCaretRight />
                  </span>
                  Contact
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <div className="contacts">
              <h4>Contact Us</h4>

              <ul>
                <li>
                  <a
                    href="mailto: chukwukadibia029@gmail.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    sitename@name.com
                  </a>
                </li>
                <li>
                  <a href="tel:+2348069254788" rel="noreferrer" target="_blank">
                    +(234) 8069254788
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=lagos+nigeria"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Lagos, Nigeria
                  </a>
                </li>
              </ul>
            </div>

            <div className="socials">
              <ul className="social-links">
                <li>
                  <a
                    href="http://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="http://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagramSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="http://wa.me/2348069254788?text=hello"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsappSquare />
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      <div className="ending-container">
        <p>
          &copy; <span>{date > 2023 ? "2021 - " + date : date}.</span> All
          rights reserved <br /> Developed by Sign Fireman Ministry
        </p>
      </div>
    </footer>
  );
};

export default Footer;
