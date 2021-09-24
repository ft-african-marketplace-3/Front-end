
import React from 'react';
// import errors from './LoginContainer';

export default function LogInForm(props) {
    const { submit, values, update, disabled, errors } = props
    


  const onChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    update(name, value);
  };

  return (
    <form className="form-container login" onSubmit={submit}>
      <div className="login-form submit">
        <h2>Log-In</h2>
        <div className="errors">
          <div>{errors.username}</div>
          <div>{errors.password}</div>
        </div>
        <div className="info">
          <label className={"username-login"}>
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
          <label className={"password-login"}>
            {" "}
            Password:
            <input
              value={values.password}
              onChange={onChange}
              name="password"
              type="password"
            />
          </label>
        </div>
        <button id="login-button" disabled={disabled}>
          Log In
        </button>
        <div className="new-user">
          <a href="/signup" className="signup-link">
            New To Field Market? Create your Field Market Account
          </a>
        </div>
      </div>
    </form>
  );
}
