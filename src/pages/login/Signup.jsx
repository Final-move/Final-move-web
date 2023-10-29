import React, { useState } from "react";
import { PageContainer } from "../../components";
import PhoneNumberInput from "./inn/PhoneNumberInput";
import Img from "../../components/optimization/Img";
import { images } from "../../data/constant";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PasswordInput from "./inn/PasswordInput";

const Signup = () => {
  const [userName, setUserName] = useState("");
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
            src={images.logo}
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
              <label className={`label ${firstName ? "animatedlabel" : ""}`}>
                FirstName
              </label>
            </div>
            <div>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <label className={`label ${lastName ? "animatedlabel" : ""}`}>
                LastName
              </label>
            </div>
          </div>
          <div>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <label className={`label ${userName ? "animatedlabel" : ""}`}>
              Username
            </label>
          </div>
          <div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className={`label ${email ? "animatedlabel" : ""}`}>
              Email
            </label>
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
            <label className={`label ${address ? "animatedlabel" : ""}`}>
              Home address
            </label>
          </div>
          <div className="password-container">
            <PasswordInput />
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
          <div className="submit-btn-container">
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
