import React from 'react';

const Splash = () => {

    return (
        <div className="splash-page-container">
            <div className="welcome-banner element-container">
                {/* <figure>Image of pharmacist here??</figure> */}
                {/* <h1 className="welcome-msg">Welcome to <span className='pharmassist-title'>Pharm<span className='assist'>Assist</span></span></h1> */}
                <div className="welcome-container">
                    <span className="welcome-to">Welcome to</span>
                    <span className="pharmassist-title"><span>Pharm<span className="assist">Assist</span></span></span>
                </div>
                
            </div>

            <div className="intro-msg element-container">
                <div className="intro-text">
                    <h1 className="intro-title" >What is PharmAssist?</h1>
                    <br/>
                    <br/>
                    <p className="intro-p">Keeping track of your medications can be hard.</p>
                    <p className="intro-p">We're here to make it easier.</p>
                </div>
                <div className="arrow"></div>
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