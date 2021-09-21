
// Imports

import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import axios from 'axios';
import schema from './validation/schemaSignUp.js';

// Initial Variables
const initialFormValues = {
    name: '',
    email: '',
    password: '',
    agree: false,
}

// Form
function SignUp({}) {

    // Variables
    const [users, setUsers] = useState(initialFormValues);
    const [errors, setErrors] = useState(initialFormValues);
    const [disabled, setDisabled] = useState(true);

    const setUsersError = (name, value) => {
        yup.reach(schema, name).validate(value)
        .then(() => setErrors({ ...errors, [name]: ''}))
        .catch(err => setErrors({ ...errors, [name]: err.errors[0]}))
    };

    const handleChange = (event) => {
        const {name, type, checked, value} = event.target
        const newValue = type === 'checkbox' ? checked : value
        setUsers({...users, [name]: newValue})
        setUsersError(name, newValue)
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
    useEffect(() => {
        schema.isValid(formValues).then(valid => setDisabled(!valid))
    }, {users});

    // Returns
    return (
        <div>
            <div style = {{color: '#d2691e'}}>
                <h1>Sign Up Now!</h1>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.agree}</div>
            </div>
            <form onSubmit = {submit}>
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
        </div>
    );
}

// Exports
export default SignUp;
