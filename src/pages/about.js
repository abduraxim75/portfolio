import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className='about-page'>
            <div className='about'>
                <h3 className='about-me'>
                    About Me
                </h3>
                <p className='about-p'>
                    I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and I am always looking for new things to learn.
                </p>
                
            </div>
            <div className='about-div'>
                <div className='frontend-dvp'>
                    <p className='paragraph'>
                        Frontendent Developer
                    </p>
                    <Link to='/projects'>
                        Projects
                    </Link>
                </div>
                <div className='skills'>
                    <p className='paragraph'>
                        Skills
                    </p>
                    <Link to='/skills'>
                        Skills
                    </Link>
                </div>
                
            </div>
        </div>
    );
}

export default About;
