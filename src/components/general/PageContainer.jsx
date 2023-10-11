import React from "react";

const PageContainer = ({ children, className }) => {
  return (
    <div className={`px-[7%] max-md:px-4 ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default PageContainer;
