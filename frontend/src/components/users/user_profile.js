import React, { useRef, useEffect } from 'react';
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
                    <a href=''>Medication List</a>
                    <a href=''>Calendar</a>
                    <a href=''>Find Your Nearest Pharmacy</a>
                </div>
                <div className='other-nav-links'>
                    <Link to=''>How to Use</Link><br/>
                    <Link to=''>About Us</Link>
                </div>
                <button className='user-nav-logout' onClick={logoutUser}>Log Out</button>
            </section>

            <div id='section-right'>
                <section id='main' className='main-container scroll-snap'>
                    <h1 className='main-page'>Welcome, Current User!</h1>
                    <div className='user-container-divider'>
                    </div>
                </section>

                <section id='medlist' className='user-container scroll-snap'>
                    <h1 className='user-header'>Medication List</h1>
                    <div className='user-container-divider'>
                    </div>
                    <ul className='user-medication-list'>
                        <li className='user-medication-list-item'>Amlodipine 10mg</li>
                        <li className='user-medication-list-item'>Carvedilol 12.5mg</li>
                        <li className='user-medication-list-item'>Amoxicillin 500mg</li>
                        <li className='user-medication-list-item'>Sertraline 50mg</li>
                    </ul>
                </section>

                <section id='calendar' className='user-container scroll-snap'>
                    <h1 className='user-header'>Calendar</h1>
                    <div className='user-container-divider'>
                    </div>
                </section>
            
                <section id='pharmacy' className='user-container scroll-snap'>
                    <h1 className='user-header'>Find a Pharmacy</h1>
                    <div className='user-container-divider'>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default UserProfile;