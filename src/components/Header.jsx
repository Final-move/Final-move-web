import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { headerLinks } from "../data/headerData";
import { toggleContext } from "../App";

const Header = () => {
  const { isExpanded, setIsExpanded, scrollMainContentRef } =
    useContext(toggleContext);
  const [isFixed, setIsFixed] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const navToggle = () => {
    setIsExpanded(() => !isExpanded);
  };

  const closeMobileNav = () => {
    setIsExpanded(() => !isExpanded);
  };

  useEffect(() => {
    const scrollMainCurrent = scrollMainContentRef.current;

    const handleScroll = () => {
      if (scrollMainContentRef.current) {
        const currentScrollPos = scrollMainContentRef.current.scrollTop;
        console.log(currentScrollPos);

        if (currentScrollPos < prevScrollPos && currentScrollPos !== 0) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }

        setPrevScrollPos(currentScrollPos);
      }
    };

    if (scrollMainContentRef.current) {
      scrollMainContentRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollMainCurrent) {
        scrollMainCurrent.removeEventListener("scroll", handleScroll);
      }
    };
  }, [prevScrollPos, scrollMainContentRef]);

  return (
    <header className={`header ${isFixed ? "fixed-nav" : "relative-nav"}`}>
      <button
        onClick={navToggle}
        className={`nav-toggle ${isExpanded ? "styled-toggle" : ""}`}
      >
        {!isExpanded ? <FaBars /> : <FaTimes />}
      </button>

      <div className="logo-container">
        <Link to={"/"}>
          <h1 className="logo">Sign Fireman</h1>
        </Link>
      </div>

      <nav className="primary-nav">
        <ul className={`nav-links`}>
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

      <div className="search-container">
        <Link to={"/search"} className="search">
          <FaSearch />
        </Link>
      </div>
    </header>
  );
};

export default Header;
