import React from "react";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";
import {
  footerContact,
  footerSocialLinks,
  images,
  pageLinks,
} from "../../data/constant";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="top-container">
        <div className="logo-container">
          <Link to={"/"} className="logo">
            <img
              src={images.logo}
              alt="final move logo"
              style={{ borderRadius: "50%", width: "40%", maxWidth: "70px" }}
            />
          </Link>
          <p>...The final move of God</p>
        </div>

        <div className="links-container">
          <section className="footer-nav">
            <h4>Quick Links</h4>

            <ul>
              {pageLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.link}>
                    <span>
                      <FaCaretRight />
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <div className="contacts">
              <h4>Contact Us</h4>

              <ul>
                {footerContact.map((contactUs, index) => (
                  <li key={index}>
                    <a href={contactUs.url} rel="noreferrer" target="_blank">
                      {contactUs.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="socials">
              <ul className="social-links">
                {footerSocialLinks.map((socials, index) => (
                  <li key={index}>
                    <a
                      href={socials.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {socials.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>

      <div className="ending-container">
        <p>
          &copy; <span>{date > 2023 ? "2023 - " + date : date}.</span> All
          rights reserved
        </p>
        <p>Developed by Sign Fireman Ministry</p>
      </div>
    </footer>
  );
};

export default Footer;
