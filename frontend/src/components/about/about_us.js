import React from "react";

const AboutUs = ({ classState }) => {
    return (
        <div className={classState}>
            <div className='about-member'>
                <img src=''/>
                <h2 className='member-name'>Suzanne Li</h2>
                <div>
                    <a href='https://github.com/lisuzanne94'>GitHub</a> | <a href='https://www.linkedin.com/in/suzanne-li-080036161/'>LinkedIn</a>
                </div>
            </div>
            <div className='about-member'>
                <img src=''/>
                <h2 className='member-name'>Subin Cho</h2>
                <div>
                    <a href='https://github.com/subinc1633'>GitHub</a> | <a href='https://www.linkedin.com/in/sc1633/'>LinkedIn</a>
                </div>
            </div>
            <div className='about-member'>
                <img src=''/>
                <h2 className='member-name'>Sohee Park</h2>
                <div>
                    <a href='https://github.com/parks14'>GitHub</a> | <a href='https://www.linkedin.com/in/sohee-park-b8164a112/'>LinkedIn</a>
                </div>
            </div>
            <div className='about-member'>
                <img src=''/>
                <h2 className='member-name'>Matt Swedin</h2>
                <div>
                    <a href='https://github.com/mattswedin'>GitHub</a> | <a href='https://www.linkedin.com/in/mattswedin/'>LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;