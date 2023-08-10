import React, { useState } from "react";
import PageContainer from "./PageContainer";
import Img from "./optimization/Img";
import Logo from "../assets/media/images/logo/final move logo.jpg";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isRemember, setIsRemember] = useState(false);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
            <label
              className={`label ${name ? "animatedlabel" : ""}`}
              htmlFor="email"
            >
              Email or mobile number
            </label>
          </div>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <label
              className={`label ${password ? "animatedlabel" : ""}`}
              htmlFor="password"
            >
              Your password
            </label>
            <button
              type="button"
              onClick={toggleShowPassword}
              className="togglepassword"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
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
          <div className="submit-btn-container">
            <button type="submit" className="submit-btn">
              Login
            </button>
          </div>
        </form>
        <div className="foot">
          <h5>
            Don*t have an account? <Link to={`/signup`}>Signup today</Link>
          </h5>
        </div>
      </div>
    </PageContainer>
  );
};

export default Login;
