// src/PasswordInput.js
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setIsPasswordValid(validatePassword(newPassword));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  return (
    <div className="password-input">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
        value={password}
        onChange={handlePasswordChange}
        className={!isPasswordValid ? "invalid" : ""}
      />
      <button type="button" onClick={toggleShowPassword}>
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
      {!isPasswordValid && (
        <div className="error-message">
          Password must be at least 8 characters long.
        </div>
      )}
    </div>
  );
};

export default PasswordInput;
