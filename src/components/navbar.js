import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink instead of Link

const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav className='navbar'>
                <h1 className='navbar-h1'>
                    Abdura<span className='highlight'>khim</span>
                </h1>
                <ul className='navbar-list'>
                    <li>
                        <NavLink exact to='/' activeClassName='active'>Home</NavLink> {/* Use NavLink with activeClassName */}
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName='active'>About</NavLink> {/* Use NavLink with activeClassName */}
                    </li>
                    <li>
                        <NavLink to="/skills" activeClassName='active'>Skills</NavLink> {/* Use NavLink with activeClassName */}
                    </li>
                    <li>
                        <NavLink to="/projects" activeClassName='active'>Projects</NavLink> {/* Use NavLink with activeClassName */}
                    </li>
                </ul>
                <div className='nav-logo-bar'>
                    <ul className='nav-logos'>
                        <li>
                            <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/adm-abbasap-b668b125b'>Linkedin</a>
                        </li>
                        <li>
                            <a target='_blank' rel="noopener noreferrer" href='https://github.com/abduraxim75'>Github</a>
                        </li>
                        <li>
                            <a target='_blank' rel="noopener noreferrer" href='mailto:admabbasap@gmail.com'>Contact Me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
