// src/PhoneNumberInput.js
import React from "react";
import PhoneInput from "react-phone-number-input";

const PhoneNumberInput = ({ value, onChange, label, inputClass }) => {
  return (
    <>
      <PhoneInput
        international
        placeholder=""
        value={value}
        onChange={onChange}
        className={`${inputClass ? inputClass : ""}`}
      />
      <label className={`label ${value ? "animatedlabel" : ""}`}>{label}</label>
    </>
  );
};

export default PhoneNumberInput;
