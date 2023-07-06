import React from "react";

const PageContainer = ({ children, className }) => {
  return (
    <div className={`page-container ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default PageContainer;
