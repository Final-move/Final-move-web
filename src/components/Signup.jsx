import React, { useState } from "react";
import PageContainer from "./PageContainer";
import Img from "./optimization/Img";
import Logo from "../assets/media/images/logo/final move logo.jpg";
import { Link } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isAccept, setIsAccept] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <PageContainer className={`signup-section`}>
      <div className="container">
        <div className="head">
          <Img
            src={Logo}
            alt={`sign fireman ministry logo`}
            className={`logo`}
          />
        </div>
        <form onSubmit={handleSubmit} className="form">
          <div className="name">
            <div>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <label className="label">FirstName</label>
            </div>
            <div>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <label className="label">LastName</label>
            </div>
          </div>
          <div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="label">Email</label>
          </div>
          <div>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <label className="label">Address</label>
          </div>
          <div className="remember-container">
            <div className="remember">
              <label htmlFor="remember">
                <input
                  type="checkbox"
                  name="remember"
                  value={isAccept}
                  onClick={() => setIsAccept(!isAccept)}
                  className="remember-btn"
                />
                By creating an account you agree to our{" "}
                <Link to={`/policy`}>Terms & Policy</Link>.
              </label>
            </div>
          </div>
          <div>
            <button type="submit" className="submit-btn">
              Signup
            </button>
          </div>
        </form>
        <div className="foot">
          <h5>
            Already have an account? <Link to={`/login`}>Login</Link>
          </h5>
        </div>
      </div>
    </PageContainer>
  );
};

export default Signup;
