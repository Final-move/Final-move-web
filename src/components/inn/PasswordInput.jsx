import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [doPasswordsMatch, setDoPasswordsMatch] = useState(true);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  useEffect(() => {
    setIsPasswordValid(validatePassword(password));
    isPasswordValid && setDoPasswordsMatch(password === confirmPassword);
  }, [password, confirmPassword, isPasswordValid]);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div>
        <div>
          <button
            type="button"
            onClick={toggleShowPassword}
            className="togglepassword"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            className={!isPasswordValid || !doPasswordsMatch ? "invalid" : ""}
          />
          <label className={`label ${password ? "animatedlabel" : ""}`}>
            Password
          </label>
        </div>
        <div className="error-container">
          {password && !isPasswordValid ? (
            <p className="form-error-message">
              Password must be at least 8 characters long.
            </p>
          ) : (
            <p className="form-error-message"></p>
          )}
        </div>
      </div>
      <div>
        <div>
          <button
            type="button"
            onClick={toggleShowPassword}
            className="togglepassword"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
          <input
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className={!doPasswordsMatch ? "invalid" : ""}
          />
          <label className={`label ${confirmPassword ? "animatedlabel" : ""}`}>
            Confirm password
          </label>
        </div>
        <div className="error-container">
          {confirmPassword.length > 8 && !doPasswordsMatch ? (
            <p className="form-error-message">Passwords do not match.</p>
          ) : (
            <p className="form-error-message"></p>
          )}
        </div>
      </div>
    </>
  );
};

export default PasswordInput;
