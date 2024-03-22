import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, Space, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const Navbar = () => {
    const onClick = ({ key }) => {
        message.info(`Click on item ${key}`);
    };

    const items = [
        {
            label: 'Home',
            key: '4',
            url: '/'
        },
        {
            label: 'About',
            key: '5',
            url: '/about'
        },
        {
            label: 'Skills',
            key: '6',
            url: '/skills'
        },
        {
            label: 'Projects',
            key: '7',
            url: '/projects'
        }
    ];

    return (
        <div className="navbar-container">
            <nav className='navbar'>
                <h1 className='navbar-h1'>
                    Abdura<span className='highlight'>khim</span>
                </h1>
                <div className='nav-logo-bar'>
                    <ul className='nav-logos'>
                        <li>
                            <a target='_blank' rel="noopener noreferrer"
                                href='https://www.linkedin.com/in/
                            adm-abbasap-b668b125b'>Linkedin</a>
                        </li>
                        <li>
                            <a target='_blank' rel="noopener noreferrer"
                                href='https://github.com/abduraxim75'>Github</a>
                        </li>
                        <li>
                            <a target='_blank' rel="noopener noreferrer"
                                href='mailto:admabbasap@gmail.com'>Contact Me</a>
                        </li>
                    </ul>
                </div>
                <Dropdown className='menu-bar'
                    overlay={
                        <Space direction="vertical">
                            {items.map(item => {
                                if (item.hasOwnProperty('url')) {
                                    return (
                                        <NavLink key={item.key} to={item.url} activeClassName='active'>
                                            {item.label}
                                        </NavLink>
                                    );
                                } else {
                                    return (
                                        <a key={item.key} onClick={() => onClick(item)}>
                                            {item.label}
                                        </a>
                                    );
                                }
                            })}
                        </Space>
                    }
                >
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Menu <DownOutlined />
                    </a>
                </Dropdown>
            </nav>
        </div>
    );
}

export default Navbar;
