import React, { useContext } from "react";
import { headerLinks } from "../data/headerData";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { userData } from "../data/userData";
import { toggleContext } from "../App";

const MobileNav = () => {
  const { isExpanded, setIsExpanded } = useContext(toggleContext);
  const { img, userName, firstName, lastName, isUser } = userData;

  const closeMobileNav = () => {
    setIsExpanded(() => false);
  };

  return (
    <aside className={`mobile-nav ${isExpanded ? "show-nav" : ""}`}>
      <div className="container">
        <div className="head">
          {isUser ? (
            <div className="user-profile">
              <div className="user-details">
                <h5>{userName}</h5>
                <p>
                  {firstName} {lastName}
                </p>
              </div>
              <div className="img-container">
                <img src={img} alt={userName} className="img" />
              </div>
            </div>
          ) : (
            <div className="login-container">
              <Link to={"/login"} onClick={closeMobileNav}>
                Login / Join now
              </Link>
            </div>
          )}
        </div>
        <div className="body">
          <nav>
            <ul className={`mobile-nav-links`}>
              {headerLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <Link to={link.path} onClick={closeMobileNav}>
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="foot">
          <ul className="socials">
            <li>
              <a
                href="http://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="http://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="http://wa.me/2348069254788?text=hello"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a
                href="http://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default MobileNav;
