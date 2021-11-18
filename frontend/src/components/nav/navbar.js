import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {

    const loginDemo = e => {
        e.preventDefault();
        const demoUser = Object.assign({}, {
            email: 'demouser@mail.com',
            password: 'demopassword'
        })
        props.login(demoUser);
    };

    if (props.loggedIn) {
        return null;
    } else {
        return (
            <nav>
                <div className="navbar-button-container">
                    <Link to={'/signup'}><button className="navbar-signup-button" onClick={() => props.clearErrors()}>Sign Up</button></Link>
                    <Link to={'/login'}><button className="navbar-login-button" onClick={() => props.clearErrors()}>Login</button></Link>
                    <button onClick={e => loginDemo(e)} >Demo User</button>
                </div>
            </nav>
        );
    }
}

export default NavBar;