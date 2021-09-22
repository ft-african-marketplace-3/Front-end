import React from 'react';
import errors from './SignUpContainer';

export default function SignUpForm(props) {
    const { submit, values, change, disabled } = props
    

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value; 
        change(name, valueToUse)
      }

    return(
        <form className='form-container SignUp' onSubmit={submit}>
            <div className='SignUp-form submit'>
                <h2>Sign Up Now!</h2>
                <div style = {{color: '#d2691e'}} className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.username}</div>
                    <div>{errors.password}</div>
                    <div>{errors.confirmPassword}</div>
                </div>
                <div className='info'>
                <label htmlFor = 'name' className={"label"}> Name:
                    <input
                        value= {values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                        isValid={
                        !errors.confirmPassword &&
                        values.password
                        }
                    />
                </label>
                <br/>
                <label htmlFor = 'email' className={"label"}> Email:
                    <input
                        value= {values.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                    />
                </label>
                <br/>
                <label htmlFor = 'username' className={"label"}> Username:
                    <input
                        value= {values.username}
                        onChange={onChange}
                        name='username'
                        type='text'
                    />
                </label>
                <br/>
                <label htmlFor = 'password' className={"password"}> Password:
                    <input
                        value= {values.password}
                        onChange={onChange}
                        name='password'
                        type='password'
                        isValid={
                            !errors.confirmPassword &&
                            values.password
                        }
                    />
                </label>
                <br/>
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
                </label>
                <br/>
                <div className="termsOfService">
                    <label htmlFor = 'termsOfService' > 
                        <input
                            name='termsOfService'
                            onChange={onChange}
                            checked={values.termsOfService}
                            type='checkbox'
                        />
                    </label>I Agree to the Terms and Conditions of Service
                </div>
                </div>
                <button 
                    id="signup-button" 
                    disabled={disabled}
                    >Sign Up
                </button>
                <div className='current-user'>
                    <a href="/login" className='login-link'>Already Have an Account? Log in to your Field Market Account Here</a> 
                </div>
            </div>
        </form>
    )
}