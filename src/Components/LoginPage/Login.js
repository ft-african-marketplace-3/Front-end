import React from 'react';
import { useHistory } from 'react-router-dom';
import errors from './LoginContainter'

export default function LoginForm(props) {
    const { submit, values, disabled, errors } = props

    const history = useHistory();

    const loginRoute = () => {
        history.push("/");
    }

    const onSubmit = (evt) => {
        history.push("/");
        evt.preventDefault();
        submit();
    }

    return(
        <form className='form-container login' /*onChange={onChange}*/ onSubmit={onSubmit}>
            <div className='login-form submit'>
                <h2>Log in to your Account</h2>
                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.password}</div>
                </div>
                <div className='info'>
                <label> Username:
                    <input
                        value= {values.username}
                        /*onChange={onChange}*/
                        name='username'
                        type='text'
                    />
                </label>
                <label> Password:
                    <input
                        value= {values.password}
                        /*onChange={onChange}*/
                        name='password'
                        type='password'
                    />
                </label>
                </div>
                <div className='new-user'>
                    <a href="/signup" className='signup-link'>Don't have an account? Click Here to Sign-Up!</a> 
                </div>
                <button 
                    id="login-button" 
                    onClick={loginRoute} 
                    disabled={disabled}
                    >Log In
                </button>
            </div>
        </form>
    )
}