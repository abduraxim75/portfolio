import React from 'react';
import { Ant, Boot, Cs, Html, Js, Mui, Next2, Nodejs2,  Reac,  Redux,  Ts2, } from '../utils/svg.formatter';

const Skillsm = () => {
    return (
        <div className='skil'>
            <div>
                <h3 className='context'>
                    Skills
                </h3>
            </div>
            <div className='ul-lists'>
                <ul className='skills-logos'>
                    <li>
                        <Js />
                    </li>
                    <li>
                        <Ts2 />
                    </li>
                    <li>
                        <Html />
                    </li>
                    <li>
                        <Cs />
                    </li>
                    <li>
                        <Redux />
                    </li>
                    <li>
                        <Nodejs2 />
                    </li>
                    <li>
                        <Next2 />
                    </li>
                    <li>
                        <Reac/>
                    </li>
                </ul>
                <ul className='three-logo'>
                    <li>
                        <Boot />
                    </li>
                    <li>
                        <Ant />
                    </li>
                    <li>
                        <Mui />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Skillsm;
