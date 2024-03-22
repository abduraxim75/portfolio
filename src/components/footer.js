import React from 'react';
import { Email, Github, Linkedin } from '../utils/svg.formatter';

const Footer = () => {
    return (
        <div className='footer'>
            {/* <div>
                <h1 className='footer-h1'>
                    Abdura<span className='highlight'>khim</span>
                </h1>
            </div>
            <div className='footer-input'>
                <input type='email' placeholder='Email' />
                <button>
                    Submit
                </button>
                <input type='number' placeholder='Phone Number' />
            </div> */}
            <div className='footer-div'>
                <ul className='footer-social'>
                    <li>
                        <a target='_blank' href='https://admabbasap@gmail.com'>
                        <Email/>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href='https://www.linkedin.com/in/adm-abbasap-b668b125b'>
                        <Linkedin/>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href='https://github.com/abduraxim75'>
                        <Github/>
                        </a>    
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
