import React, { useState } from "react";
import PageContainer from "./PageContainer";
import PhoneNumberInput from "./inn/PhoneNumberInput";
import Img from "./optimization/Img";
import Logo from "../assets/media/images/logo/final move logo.jpg";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PasswordInput from "./inn/PasswordInput";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isAccept, setIsAccept] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
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
          <div className="phonenumber">
            <PhoneNumberInput
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              label="Phone Number"
              inputClass={"input"}
            />
          </div>
          <div>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <label className="label">Home address</label>
          </div>
          <PasswordInput />
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
