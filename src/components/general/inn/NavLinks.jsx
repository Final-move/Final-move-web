import React from "react";
import { pageLinks } from "../../../data/constant";
import { Link } from "react-router-dom";

const NavLinks = ({ className, Links, path, closeMobileNav }) => {
  return (
    <ul className={className}>
      {pageLinks.map((link, index) => (
        <li key={index} onClick={closeMobileNav}>
          <Link to={link.link}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
