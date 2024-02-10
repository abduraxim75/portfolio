import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav className='navbar'>
                <h1 className='navbar-h1'>
                    Abdura<span className='highlight'>khim</span>
                </h1>
                <ul className='navbar-list'>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
                <div className='nav-logo-bar'>
                    <ul className='nav-logos'>
                        <li>
                            <a target='_blank' href='https://www.linkedin.com/in/adm-abbasap-b668b125b'>Linkedin</a>
                        </li>
                        <li>
                            <a target='_blank' href='https://github.com/abduraxim75'>Github</a>
                        </li>
                        <li>
                            <a target='_blank' href='https://admabbasap@gmail.com'>Contact Me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
