import React, { useState } from "react";
import PageContainer from "./PageContainer";

const Signup = () => {
  const [name, setName] = useState("");
  const [myNationality, setMyNationality] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <PageContainer>
      <div className="container">
        <form onSubmit={handleSubmit} className="chart-form">
          <div>
            <label>שמי:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>עיר, מדינה, מדינה:</label>
            <input
              type="text"
              value={myNationality}
              onChange={(e) => setMyNationality(e.target.value)}
              required
            />
          </div>
          <div>
            <label>המיקום הנוכחי שלי הוא:</label>
            <input
              type="text"
              value={currentLocation}
              onChange={(e) => setCurrentLocation(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            צור תרשים
          </button>
        </form>
      </div>{" "}
    </PageContainer>
  );
};

export default Signup;
