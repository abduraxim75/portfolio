import React from 'react';
import Section from '../components/section';
import About from './about';
import Skills from '../components/skills';
import Slider from '../components/carousel';

const Home = () => {
    return (
        <div className='home-container'>
            <Section />
            <About/>
            <Skills/>
            <Slider/>
        </div>
    );
}

export default Home;
