import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = ({ logout }) => {
    const logoutUser = (e) => {
        e.preventDefault();
        logout();
    };

    return (
        <div id='user-profile'>
            <section id='user-nav'>
                <div className='user-nav-header'>
                    <h2 className='pharmassist-header'>
                        <span>Pharm</span><span className='assist'>Assist</span>
                    </h2>
                    <div className='user-nav-divider'>
                    </div>
                </div>
                <div className='user-nav-links'>
                    <Link to=''>Medication List</Link>
                    <Link to=''>Calendar</Link>
                    <Link to=''>Find Your Nearest Pharmacy</Link>
                </div>
                <div className='other-nav-links'>
                    <Link to=''>How to Use</Link><br/>
                    <Link to=''>About Us</Link>
                </div>
                <button className='user-nav-logout' onClick={logoutUser}>Log Out</button>
            </section>

            <div id='section-right'>
                <section id='user-medication-list-container'>
                    <h1 className='user-medication-list-header'>Medication List</h1>
                    <ul className='user-medication-list'>
                        <li className='user-medication-list-item'>Amlodipine 10mg</li>
                        <li className='user-medication-list-item'>Carvedilol 12.5mg</li>
                        <li className='user-medication-list-item'>Amoxicillin 500mg</li>
                        <li className='user-medication-list-item'>Sertraline 50mg</li>
                    </ul>
                </section>

                <section id='user-calendar'>
                    <h1 className='user-calendar-header'>Calendar</h1>
                </section>
            
                <section id='user-pharmacy-map'>
                    <h1 className='user-pharmacy-map-header'>Find a Pharmacy</h1>
                </section>
            </div>
        </div>
    )
}

export default UserProfile;