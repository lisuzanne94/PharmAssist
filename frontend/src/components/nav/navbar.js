import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
    const logoutUser = (e) => {
        e.preventDefault();
        props.logout();
    };

    if (props.loggedIn) {
        return (
            <nav>
                <button onClick={logoutUser}>Logout</button>
            </nav>
        );
    } else {
        return (
            <nav>
                <Link to={'/signup'}><button>Sign Up</button></Link>
                <Link to={'/login'}><button>Login</button></Link>
            </nav>
        );
    }
}

export default NavBar;