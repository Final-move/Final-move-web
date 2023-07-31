import React from "react";
import PageContainer from "./PageContainer";
import NotFound from "./NotFound";

const Login = () => {
  return (
    <PageContainer className={"login-section"}>
      <NotFound />

      {/* <div className="container">
        <div className="head"></div>
        <div className="body"></div>
        <div className="fo"></div>
      </div> */}
    </PageContainer>
  );
};

export default Login;
