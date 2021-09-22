import React, {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom';
import SignUpForm from './SignUp.js';
import styled from 'styled-components'
import schema from '../validations/loginSchema';
import axios from 'axios';
import * as yup from 'yup';

const initialFormValues = {
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    termsOfService: false,
}
const initialFormErrors = {
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    termsOfService: '',
}

// const initialSignUp = []
const initialDisabled = true

export default function SignUp() {
//   const [signUp, setSignUp] = useState(initialSignUp)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const { push } = useHistory();

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue});
  }


  const postNewUser = e => {
    e.preventDefault();
    axios
      .post('https://web44scaffolding.herokuapp.com/api/user/login', formValues)
      .then(resp => {
        console.log(resp);
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("role", resp.data.role);
        localStorage.setItem("username", resp.data.username);
        push('/listing');
      })
      .catch(err => {
        debugger
        console.log(err);
      })
  }

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors(
          {...formErrors,[name]: '',}
        );
      })
      .catch((err) => {
        setFormErrors(
          { ...formErrors,[name]: err.errors[0]}
        );
      });
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = () => {
      const newUserSigningUp = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        username: formValues.username.trim(),
        password: formValues.password.trim(),
        confirmPassword: formValues.confirmPassword.trim(),
      }
      postNewUser(newUserSigningUp);
  }
  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid)
     });
  }, [formValues])

  return(
      <StyledSignUp className='sign-in-div'>
          <SignUpForm className='form-container'
            values={formValues}
            update={updateForm}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
      </StyledSignUp>
  )
}

const StyledSignUp = styled.div `
font-family: 'Roboto Condensed', sans-serif;
width:100%;
height:93vh;
display: flex;
justify-content: center;
background: linear-gradient(155deg, rgb(29, 26, 26), rgb(29, 26, 26), darkgray);
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
  }}

`