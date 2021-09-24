import React from "react";
// import errors from "./SignUpContainer";

export default function SignUpForm(props) {
  const { submit, values, update, disabled, errors } = props;

  const onChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    update(name, value);
}

  return (
    <form className="form-container SignUp" onSubmit={submit}>
      <div className="SignUp-form submit">
        <h2>Sign-Up</h2>
        <div style={{ color: "#d2691e" }} className="errors">
          {/* <div>{errors.name}</div> */}
          {/* <div>{errors.email}</div> */}
          <div>{errors.username}</div>
          <div>{errors.password}</div>
          {/* <div>{errors.confirmPassword}</div> */}
        </div>
        <div className="info">
          <label htmlFor="username" className={"username-login"}>
            {" "}
            Username:
            <input
              value={values.username}
              onChange={onChange}
              name="username"
              placeholder="Enter Username"
              type="text"
            />
          </label>
          <br />

          <label htmlFor="password" className={"password-login"}>
            {" "}
            Password:
            <input
              value={values.password}
              onChange={onChange}
              name="password"
              placeholder="Enter Password"
              type="password"
            //   isValid={!errors.confirmPassword && values.password}
            />
          </label>
            {/* <br/>
            <label htmlFor = 'confirmPassword' className={"confirmPassword-label"}> Confirm Password:
                <input
                    value= {values.confirmPassword}
                    onChange={onChange}
                    name='confirmPassword'
                    type='password'
                    isValid={
                        !errors.confirmPassword &&
                        values.confirmPassword
                    }
                />
            </label> */}
            {/* <br/>
            <div className="termsOfService">
                <label htmlFor = 'termsOfService' > 
                    <input
                        name='termsOfService'
                        onChange={onChange}
                        checked={values.termsOfService}
                        type='checkbox'
                    />
                </label>I Agree to the Terms and Conditions of Service
            </div> */}

        </div>
        <button id="signup-button" disabled={disabled}>
          Sign Up
        </button>
        <div className="current-user">
          <a href="/login" className="login-link">
            Have an Account?
          </a>
        </div>
      </div>
    </form>
  );
}
