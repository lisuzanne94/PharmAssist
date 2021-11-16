import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
    const logoutUser = (e) => {
        e.preventDefault();
        props.logout();
    };

    if (props.loggedIn) {
        return null;
    } else {
        return (
            <nav>
                <Link to={'/signup'}><button onClick={() => props.clearErrors()}>Sign Up</button></Link>
                <Link to={'/login'}><button onClick={() => props.clearErrors()}>Login</button></Link>
            </nav>
        );
    }
}

export default NavBar;