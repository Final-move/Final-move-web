import React from "react";
import { FaRegFrown } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <FaRegFrown className="icon" />
      <h1>404 Not found</h1>
      <p>Oops! The page you are looking for currently isn't available.</p>
    </div>
  );
};

export default NotFound;
