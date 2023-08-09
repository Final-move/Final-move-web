import React, { useState } from "react";
import PageContainer from "./PageContainer";
import Img from "./optimization/Img";
import Logo from "../assets/media/images/logo/final move logo.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);

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
          <div className="remember-container">
            <div className="remember">
              <label htmlFor="remember">
                <input
                  type="checkbox"
                  name="remember"
                  value={isRemember}
                  onClick={() => setIsRemember(!isRemember)}
                  className="remember-btn"
                />
                Remember me
              </label>
            </div>
            <div className="forgot">
              <p>
                <Link to={`/fogotpassword`}>Forgot Password</Link>
              </p>
            </div>
          </div>
          <div>
            <button type="submit" className="submit-btn">
              Login
            </button>
          </div>
        </form>
        <div className="foot">
          <h5>
            Are you a first timer? <Link to={`/signup`}>Signup today</Link>
          </h5>
        </div>
      </div>
    </PageContainer>
  );
};

export default Login;
