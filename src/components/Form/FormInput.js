import React, { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { errorMessage, label, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <div className="singleInput">
        <div className="label-container">
          <label>{label}</label>
        </div>
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
        />
        <span className="errorMsg">{errorMessage}</span>
      </div>
    </div>
  );
};

export default FormInput;
