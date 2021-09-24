import React from "react";
import errors from "./SignUpContainer";

export default function SignUpForm(props) {
  const { submit, values, change, disabled } = props;

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form className="form-container SignUp" onSubmit={submit}>
      <div className="SignUp-form submit">
        <h2>Sign Up Now!</h2>
        <div style={{ color: "#d2691e" }} className="errors">
          {/* <div>{errors.name}</div> */}
          {/* <div>{errors.email}</div> */}
          <div>{errors.username}</div>
          <div>{errors.password}</div>
          <div>{errors.confirmPassword}</div>
        </div>
        <div className="info">
          <label htmlFor="username" className={"label"}>
            {" "}
            Username:
            <input
              value={values.username}
              onChange={onChange}
              name="username"
              type="text"
            />
          </label>
          <br />

          <label htmlFor="password" className={"password"}>
            {" "}
            Password:
            <input
              value={values.password}
              onChange={onChange}
              name="password"
              type="password"
              isValid={!errors.confirmPassword && values.password}
            />
          </label>
        </div>
        <button id="signup-button" disabled={disabled}>
          sign up
        </button>
        <div className="current-user">
          <a href="/login" className="login-link">
            Already Have an Account?
          </a>
        </div>
      </div>
    </form>
  );
}
