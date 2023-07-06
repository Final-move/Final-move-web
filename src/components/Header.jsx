import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/media/images/logo/final move logo.jpg";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const headerRef = useRef();

  const navToggle = () => {
    setIsExpanded(() => !isExpanded);
  };

  const closeMobileNav = () => {
    setIsExpanded(() => !isExpanded);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const headerHeight = headerRef.current.getBoundingClientRect().height;

      if (window.scrollY > headerHeight) {
        headerRef.current.classList.add("fixed-nav");
      } else {
        headerRef.current.classList.remove("fixed-nav");
      }
    });
  });

  return (
    <header className="header" ref={headerRef}>
      <div className="logo-container">
        <Link to={"/"}>
          <img src={Logo} alt="final move of God logo" className="logo" />
        </Link>
      </div>

      <button
        onClick={navToggle}
        className={`nav-toggle ${isExpanded ? "styled-toggle" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className="primary-nav">
        <ul className={`nav-links ${isExpanded ? "show-links" : ""}`}>
          <li>
            <Link to={"/"} onClick={closeMobileNav}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} onClick={closeMobileNav}>
              About
            </Link>
          </li>
          <li>
            <Link to={"/blog"} onClick={closeMobileNav}>
              Blog
            </Link>
          </li>
          <li>
            <Link to={"/resources"} onClick={closeMobileNav}>
              Resources
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={closeMobileNav}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
