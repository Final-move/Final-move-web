import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PageContainer } from "../../components";
import Img from "../../components/optimization/Img";
import { images } from "../../data/constant";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <PageContainer className={"login-section"}>
      <div className="container">
        <div className="head">
          <Img
            src={images.logo}
            alt={`sign fireman ministry logo`}
            className={`logo`}
          />
        </div>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <h4 className="text-lg font-semibold text-yellow-500 text-center">
              Enter your Email you will recieve a Recovery Link
            </h4>
          </div>
          <div>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label
              className={`label ${email ? "animatedlabel" : ""}`}
              htmlFor="email"
            >
              Email Address
            </label>
          </div>
          <div className="submit-btn-container">
            <button type="submit" className="submit-btn">
              Reset Password
            </button>
          </div>
        </form>
        <div className="foot">
          <h5>
            Don't have an account? <Link to={`/signup`}>Signup today</Link>
          </h5>
        </div>
      </div>
    </PageContainer>
  );
};

export default ForgetPassword;
