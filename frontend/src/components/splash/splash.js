import React, { useRef } from 'react';

const Splash = () => {

    const whatIs = useRef(null);
    const medlist = useRef(null);
    const calendar = useRef(null);
    const map = useRef(null);
    const questions = useRef(null);

    return (
        <div className="splash-page-container">
            <div className="welcome-banner element-container">
                <div className="welcome-container">
                    <span className="welcome-to">Welcome to</span>
                    <span className="pharmassist-title"><span>Pharm<span className="assist">Assist</span></span></span>
                </div>
                <div className="arrow" onClick={() => {whatIs.current.scrollIntoView({ behavior: 'smooth' })}}></div>
            </div>

            <div className="intro-msg element-container" ref={whatIs}>
                <div className="intro-text">
                    <h1 className="intro-title" >What is PharmAssist?</h1>
                    <br/>
                    <br/>
                    <p className="intro-p">Keeping track of your medications can be hard.</p>
                    <p className="intro-p">We're here to make it easier.</p>
                </div>
                <div className="arrow" onClick={() => {medlist.current.scrollIntoView({ behavior: 'smooth' })}}></div>
            </div>
            

            <div className="splash-med-list element-container" ref={medlist}>
                <h1>Add prescriptions to your medication list</h1>
                <div className="arrow" onClick={() => {calendar.current.scrollIntoView({ behavior: 'smooth' })}}></div>
            </div>
            

            <div className="splash-calendar element-container" ref={calendar}>
                <h1>Keep track of all your medications</h1>
                <div className="arrow" onClick={() => {map.current.scrollIntoView({ behavior: 'smooth' })}}></div>
            </div>

            <div className="splash-map element-container" ref={map}>
                <h1>Find pharmacies close to you</h1>
                <div className="arrow" onClick={() => {questions.current.scrollIntoView({ behavior: 'smooth' })}}></div>
            </div>

            <div className="splash-contact element-container" ref={questions}>
                <h1>Questions? Contact us</h1>
            </div>

            <footer>
                Copyright &copy; 2021 Suzanne Li, Subin Cho, Sohee Park, Matt Swedin
            </footer>
        </div>
    );
}

export default Splash;