import React, { useRef, useEffect } from 'react';
import MedicationListContainer from '../medication_list/medication_list_container';
import CalendarContainer from '../calendar/calendar_container';


const UserProfile = ({ logout, openModal, fetchMedications, medications, currentUserId, user }) => {
    const logoutUser = (e) => {
        e.preventDefault();
        logout();
    };

    useEffect(() => {
    window.history.scrollRestoration = 'manual';
    fetchMedications(currentUserId);
  }, []);

    const main = useRef(null);
    const medlist = useRef(null);
    const calendar = useRef(null);
    const pharmacy = useRef(null);

    return (
        <div id='user-profile'>
            <section id='user-nav'>
                <div className='user-nav-header'>
                    <h2 className='pharmassist-header'>
                        <button onClick={() => {main.current.scrollIntoView({ behavior: 'smooth' })}}>
                            <span>Pharm</span><span className='assist'>Assist</span>
                        </button>
                    </h2>
                    <div className='user-nav-divider'>
                    </div>
                </div>
                <div className='user-nav-links'>
                    <button onClick={() => {medlist.current.scrollIntoView({ behavior: 'smooth' })}}>Medication List</button>
                    <button onClick={() => {calendar.current.scrollIntoView({ behavior: 'smooth' })}}>Calendar</button>
                    <button onClick={() => {pharmacy.current.scrollIntoView({ behavior: 'smooth' })}}>Find Your Nearest Pharmacy</button>
                </div>
                <div className='other-nav-links'>
                    <button>How to Use</button><br/>
                    <button>About Us</button>
                </div>
                <button className='user-nav-logout' onClick={logoutUser}>Log Out</button>
            </section>

            <div id='section-right'>
                <section ref={main} className='main-container'>
                    <h1 className='main-page'>Welcome, {user.firstName} {user.lastName.slice(0,1)}.</h1><br/>
                    <span>
                        <button className='left-button'>Add new medication regimen</button>
                        <button className='right-button' onClick={() => {medlist.current.scrollIntoView({ behavior: 'smooth' })}}>Current list of medications</button>
                    </span>
                </section>

                <section ref={medlist} className='user-container'>
                    <span>
                        <h1 className='user-header'>Medication List</h1>
                        <div className='add-button tooltip'>
                            <button className='plus-sign' onClick={() => openModal({type: 'createMedication'})}>+</button>
                            <span className='tooltiptext'>Add medication regimen</span>
                        </div>
                    </span>
                    <div className='user-container-divider'>
                    </div>
                    <MedicationListContainer medications={medications} currentUserId={currentUserId} />
                </section>

                <section ref={calendar} className='user-container'>
                    <h1 className='user-header'>Calendar</h1>
                    <div className='user-container-divider'>
                    </div>
                    <CalendarContainer />
                </section>
            
                <section ref={pharmacy} className='user-container'>
                    <h1 className='user-header'>Find a Pharmacy</h1>
                    <div className='user-container-divider'>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default UserProfile;