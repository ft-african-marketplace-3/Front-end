import React, { useState, useEffect } from "react";
import LogInForm from './Login';
import schema from '../validations/loginSchema';
import axios from 'axios';
import * as yup from 'yup';

const initialFormValues = {
    username: '',
    password: '',
}
const initialFormErrors = {
    username: '',
    password: '',
}

const initialLogIn = []
const initialDisabled = true

export default function NewLogIn() {
  const [logIn, setLogIn] = useState(initialLogIn)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue});
  }


  const postNewLogIn = newUserLoggingIn => {
    axios
      .post('', newUserLoggingIn)
      .then((res) => {
        setLogIn([...logIn, res.data,])
        setFormValues(initialFormValues);
        console.log('Here is postNewlogin', postNewLogIn)
      }).catch(err => {
        debugger;
        console.error(err);
        setFormValues(initialFormValues)
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
      const newUserLoggingIn = {
        username: formValues.username.trim(),
        password: formValues.password.trim(),
      }
      postNewLogIn(newUserLoggingIn);
  }
  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid)
     });
  }, [formValues])

  return(
      <div className='log-in-div'>
          <LogInForm className='form-container'
            values={formValues}
            update={updateForm}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
      </div>
  )
}