import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userData } from "../../data/userData";
import { toggleContext } from "../../App";
import NavLinks from "./inn/NavLinks";
import { mobileNavSocialLinks } from "../../utils/constant";

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
            <NavLinks
              className={`mobile-nav-links`}
              closeMobileNav={closeMobileNav}
            />
          </nav>
        </div>
        <div className="foot">
          <ul className="socials">
            {mobileNavSocialLinks.map((social, index) => (
              <li key={index}>
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default MobileNav;
