import React from 'react';
import heroimg from '../../img/Photo-header1.png'
import './Hero.css'


const Hero = () => {
    return (
        <div>
            <div className="header">
                <div className="header-content container">
                    <div className="hc-left">
                        <h4>Premium Course</h4>
                        <h1>Large educational programs</h1>
                        <p><b>Our course is rated excellent by over 42,000 people</b>
                        <br></br><br></br>
                            Today, more than 48,000 people have already studied at our university in various fields: programming, photography, marketing and management</p>
                        <ul>
                            <li>Learn More</li>
                            <li>Get Started</li>
                        </ul>
                    </div>
                    <div className="hc-right">
                        <img src={heroimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;