import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
    const logoutUser = (e) => {
        e.preventDefault();
        props.logout();
    };

    return (
        <nav>
            
        </nav>
    );
}

export default NavBar;