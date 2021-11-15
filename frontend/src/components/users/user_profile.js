import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    return (
        <div>
            <section id='user-nav'>
                <div className='user-profile-picture'>
                    <img src='' alt='user profile picture' />
                </div>

                <div className='user-nav-links'>
                    <Link to=''>List of Medications</Link>
                    <Link to=''>Calendar</Link>
                    <Link to=''>Find Your Nearest Pharmacy</Link>
                </div>
            </section>

            <section className='user-medication-list'>
                <ul>
                    <li></li>
                </ul>
            </section>

            <section className='user-calendar'>

            </section>

            <section className='user-pharmacy-map'>

            </section>
        </div>
    )
}

export default UserProfile;