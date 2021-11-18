import React from "react";

const AboutUs = ({ classState }) => {
    return (
        <div className={classState}>
            <div className='about-member'>
                <img src=''/>
                <h2>Suzanne Li</h2>
                <h4>Team Lead / Flex</h4>
                <div className='about-links'>
                    <a target="_blank" href='https://github.com/lisuzanne94'>GitHub</a> | <a target="_blank" href='https://www.linkedin.com/in/suzanne-li-080036161/'>LinkedIn</a>
                </div>
            </div>
            <div className='about-member'>
                <img src=''/>
                <h2>Subin Cho</h2>
                <h4>Frontend</h4>
                <div className='about-links'>
                    <a target="_blank" href='https://github.com/subinc1633'>GitHub</a> | <a target="_blank" href='https://www.linkedin.com/in/sc1633/'>LinkedIn</a>
                </div>
            </div>
            <div className='about-member'>
                <img src=''/>
                <h2>Sohee Park</h2>
                <h4>Backend</h4>
                <div className='about-links'>
                    <a target="_blank" href='https://github.com/parks14'>GitHub</a> | <a target="_blank" href='https://www.linkedin.com/in/sohee-park-b8164a112/'>LinkedIn</a>
                </div>
            </div>
            <div className='about-member'>
                <img src=''/>
                <h2>Matt Swedin</h2>
                <h4>Flex</h4>
                <div className='about-links'>
                    <a target="_blank" href='https://github.com/mattswedin'>GitHub</a> | <a target="_blank" href='https://www.linkedin.com/in/mattswedin/'>LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;