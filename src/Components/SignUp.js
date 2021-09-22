
// Imports

import React, {useState} from 'react';
// import * as yup from 'yup';
import axios from 'axios';
// import schema from './validation/schemaSignUp.js';
import styled from 'styled-components'

// Initial Variables
const initialFormValues = {
    name: '',
    email: '',
    password: '',
    agree: false,
}

// Form
export default function SignUp() {

    // Variables
    const [users, setUsers] = useState(initialFormValues);
    // const [errors, setErrors] = useState(initialFormValues);
    const [disabled] = useState(true);

    // const setUsersError = (name, value) => {
    //     yup.reach(schema, name).validate(value)
    //     .then(() => setErrors({ ...errors, [name]: ''}))
    //     .catch(err => setErrors({ ...errors, [name]: err.errors[0]}))
    // };

    const handleChange = (event) => {
        const {name, type, checked, value} = event.target
        const newValue = type === 'checkbox' ? checked : value
        setUsers({...users, [name]: newValue})
        // setUsersError(name, newValue)
    };
    const submit = (event) => {
        event.preventDefault()
        const newUser = {name: users.name.trim(), email: users.email, password: users.password, agree: users.agree}
        axios.post('api', newUser)
        .then(res => {
            setUsers({name: '', email: '', password: '', agree: false})
        })
        .catch(err => {
            debugger
        })
    };

    // Effects
    // useEffect(() => {
    //     schema.isValid(formValues).then(valid => setDisabled(!valid))
    // }, {users});

    // Returns
    return (
        <StyledLogin>
            {/* <div style = {{color: '#d2691e'}}>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.agree}</div>
            </div> */}
            <form onSubmit = {submit}>
            <h1>Sign Up Now!</h1>
                <label htmlFor = 'name'>Name
                    <input type = 'text' id = 'name' name = 'name' placeholder = 'Enter a namme' value = {users.name} onChange = {handleChange} />
                </label>
                <label htmlFor = 'email'>Email
                    <input type = 'email' id = 'email' name = 'email' placeholder = 'Enter an email address' value = {users.email} onChange = {handleChange} />
                </label>
                <label htmlFor = 'password'>Password
                    <input type = 'password' id = 'password' name = 'password' placeholder = 'Enter a password' value = {users.password} onChange = {handleChange} />
                </label>
                <label htmlFor = 'agree'>I agree to the terms of service.
                    <input type = 'checkbox' id = 'agree' onChange = {handleChange} checked = {users.agree} />
                </label>
                <button disabled = {disabled} type = {'submit'}>Submit</button>
            </form>
        </StyledLogin>
    );
}


const StyledLogin = styled.div `
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
form{
  text-align:center;
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
.info{
  height: 20vh;
  display: flex;
  flex-direction: column;
}
h2{
  font-family: 'Alegreya Sans SC', sans-serif;
  margin-top: 10%;
}
.username-login{
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
.password-login{
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
}
.password-login input{
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
#login-button{
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
  a{
    text-decoration: none;
    color: #edd97f;
  }
  a:hover{
    text-decoration: underline;
  }
  .new-user{
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`