import React, { useState } from "react";
import PageContainer from "./PageContainer";
import Img from "./optimization/Img";
import Logo from "../assets/media/images/logo/final move logo.jpg";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <PageContainer className={"login-section"}>
      <div className="container">
        <div className="head">
          <Img
            src={Logo}
            alt={`sign fireman ministry logo`}
            className={`logo`}
          />
        </div>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <input
              type="text"
              name="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="label" htmlFor="email">
              Email or mobile number
            </label>
          </div>
          <div>
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="label" htmlFor="password">
              Your password
            </label>
          </div>
          <div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </PageContainer>
  );
};

export default Login;
