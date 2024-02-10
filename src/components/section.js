import React from 'react';
import { Logo, Next, Nodejs, Typescript } from '../utils/svg.formatter';

const Section = () => {
    return (
        <div className='alpha'>
            <div className='sec-container'>
                <div className='oop'>
                    <h2 >
                        Hello I am
                    </h2>
                    <h1>
                        Abdurakhim
                    </h1>
                    <h3>
                        Frontend Developer
                    </h3>
                </div>
            </div>
            <div className='svges'>
                <div className='nodejs'>
                    <Nodejs />
                </div>
                <div className='typescript'>
                    <Typescript />
                </div>
                <div className='logo'>
                    <Logo />
                </div>
                <div className='next'>
                    <Next />
                </div>
            </div>
        </div>

    );
}

export default Section;
