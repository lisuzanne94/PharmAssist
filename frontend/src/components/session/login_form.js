import React, { useState } from 'react';

const LoginForm = ({ errors, login }) => {
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const loginDemo = e => {
        e.preventDefault();
        const demoUser = Object.assign({}, {
            email: 'demouser@mail.com',
            password: 'demopassword'
        })
        login(demoUser);
    };

    const update = field => {
        return e => setState(prevProps => ({
            ...prevProps,
            [field]: e.target.value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        login(state);
    }

    const renderErrors = () => {
        return (
            <ul className="login-errors-container">
                {Object.keys(errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {errors[error]}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="login-page">
            <div className="login-title">LOGIN</div>
            <div className="login-form-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div>
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
                        <input type='submit' value='Submit' className="login-form-submit" />
                        {renderErrors()}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;