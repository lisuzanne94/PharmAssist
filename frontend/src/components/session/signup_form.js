import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const SignupForm = props => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        zipCode: ''
    });

    const update = field => {
        return e => setState(prevProps => ({
            ...prevProps,
            [field]: e.target.value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        let user = {
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
            password: state.password,
            password2: state.password2,
            zipCode: state.zipCode
        };

        props.signup(user);
    };

    const renderErrors = () => {
        return (
            <ul className="signup-errors-container">
                {Object.keys(props.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {props.errors[error]}
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <div className="signup-page">
            <div className="signup-title">SIGNUP</div>
            <div className='signup-form-container'>
                <form className='signup-form' onSubmit={handleSubmit}>
                        <label>First Name
                        <input type='text'
                            value={state.firstName}
                            onChange={update('firstName')}
                        />
                        </label>
                        <br />
                        <label>Last Name
                        <input type='text'
                            value={state.lastName}
                            onChange={update('lastName')}
                        />
                        </label>
                        <br />
                        <label>Email
                        <input type='text'
                            value={state.email}
                            onChange={update('email')}
                        />
                        </label>
                        <br />
                        <label>Password
                        <input type='password'
                            value={state.password}
                            onChange={update('password')}
                        />
                        </label>
                        <br />
                        <label>Confirm Password
                        <input type='password'
                            value={state.password2}
                            onChange={update('password2')}
                        />
                        </label>
                        <br />
                        <label>Zip Code
                        <input type='text'
                            value={state.zipCode}
                            onChange={update('zipCode')}
                        />
                        </label>
                        <br />
                        <input type='submit' value='Submit' className="signup-form-submit"/>
                        {renderErrors()}
                </form>
            </div>
        </div>
    )
};

export default withRouter(SignupForm);