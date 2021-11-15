import React, { useState } from 'react';

const LoginForm = ({ errors, login }) => {
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const update = field => {
        return e => setState({
            [field]: e.currentTarget.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        login(state);
    }

    const renderErrors = () => {
        return (
            <ul>
                {Object.keys(errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {errors[error]}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text"
                        value={state.email}
                        onChange={update('email')}
                        placeholder="Email"
                    />
                    <br />
                    <input type="password"
                        value={state.password}
                        onChange={update('password')}
                        placeholder="Password"
                    />
                    <br />
                    <input type="submit" value="Submit" />
                    {renderErrors()}
                </div>
            </form>
        </div>
    )
}