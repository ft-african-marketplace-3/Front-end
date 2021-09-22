import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import LogInForm from "./Login";
import styled from "styled-components";
import schema from "../validations/loginSchema";
import axios from "axios";
import * as yup from "yup";

const initialFormValues = {
  username: "",
  password: "",
};
const initialFormErrors = {
  username: "",
  password: "",
};

// const initialLogIn = []
const initialDisabled = true;

export default function LogIn() {
  // const [logIn, setLogIn] = useState(initialLogIn)
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const { push } = useHistory();

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://web44scaffolding.herokuapp.com/api/user/login", formValues)
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("role", resp.data.role);
        localStorage.setItem("username", resp.data.username);
        push("/listing");
      })
      .catch((err) => {
        console.log(err);
        alert("invalid username or password");
      });
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <StyledLogin className="log-in-div">
      <LogInForm
        className="form-container"
        values={formValues}
        update={updateForm}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </StyledLogin>
  );
}

const StyledLogin = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  width: 100%;
  height: 93vh;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    155deg,
    rgb(29, 26, 26),
    rgb(29, 26, 26),
    darkgray
  );
  background-size: 400% 400%;
  animation: gradient 12s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  form {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5% 0;
    color: white;
    height: auto;
    width: 30%;
    border-radius: 40px;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 1%;
  }
  .info {
    height: 20vh;
    display: flex;
    flex-direction: column;
  }
  h2 {
    font-family: "Alegreya Sans SC", sans-serif;
    margin-top: 10%;
  }
  .username-login {
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
  }
  .username-login input {
    height: 2rem;
    width: 50%;
    text-align: left;
    margin-left: 1%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ddd;
    padding: 2px 8px;
    border: 2px solid #444;
    border-radius: 1rem;
    font-size: 1rem;
    padding: 0 2rem;
  }
  .password-login {
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10%;
  }
  .password-login input {
    height: 2rem;
    width: 50%;
    margin-left: 1%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ddd;
    padding: 2px 8px;
    border: 2px solid #444;
    border-radius: 1rem;
    font-size: 1rem;
    padding: 0 2rem;
  }
  #login-button {
    width: 60%;
    height: 3rem;
    border-radius: 2.5rem;
    margin-top: 7%;
    font-size: 1rem;
    transition: 0.5s;
    color: #e5e5e5;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    background-color: #008b57;
  }
  #login-button:hover {
    color: #ffffff;
    filter: brightness(120%);
  }
  a {
    text-decoration: none;
    color: #edd97f;
  }
  a:hover {
    text-decoration: underline;
  }
  .new-user {
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
