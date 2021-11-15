import React, { useState } from 'react';

const SignupForm = ({ errors, signup }) => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        zipCode: ''
    });

    const update = field => {
        return e => setState({
            [field]: e.currentTarget.value
        });
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

        signup(user);
    };

    const renderErrors = () => {
        return (
            <ul>
                {Object.keys(errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {errors[error]}
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <div className='signup-form-container'>
            <form className='signup-form' onSubmit={handleSubmit}>
                    <input type='text'
                        value={state.firstName}
                        onChange={update('firstName')}
                    />
                    <br />
                    <input type='text'
                        value={state.lastName}
                        onChange={update('lastName')}
                    />
                    <br />
                    <input type='text'
                        value={state.email}
                        onChange={update('email')}
                    />
                    <br />
                    <input type='password'
                        value={state.password}
                        onChange={update('password')}
                    />
                    <br />
                    <input type='password'
                        value={state.password2}
                        onChange={update('password2')}
                    />
                    <br />
                    <input type='text'
                        value={state.zipCode}
                        onChange={update('zipCode')}
                    />
                    <br />
                    <input type='submit' value='Submit' />
                    {renderErrors()}
            </form>
        </div>
    )
};

export default SignupForm;