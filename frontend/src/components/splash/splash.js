import React from 'react';

const Splash = () => {

    return (
        <div className="splash-page-container">
            <div className="welcome-banner element-container">
                <h1 className="welcome-msg">Welcome to PharmAssist</h1>
            </div>

            <div className="intro-msg element-container">
                <h1>What is PharmAssist?</h1>
            </div>

            <div className="splash-med-list element-container">
                MEDLIST FEATURE
            </div>

            <div className="splash-calendar element-container">
                CALENDAR FEATURE
            </div>

            <div className="splash-map element-container">
                MAP FEATURE
            </div>

            <div className="splash-contact element-container">
                Questions? Contact us
            </div>


            <footer>
                Copyright &copy; 2021 Suzanne Li, Subin Cho, Sohee Park, Matt Swedin
            </footer>
        </div>
    );
}

export default Splash;