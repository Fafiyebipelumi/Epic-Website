import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import { FaTimes, FaBars, FaCaretDown, FaFirstdraft } from 'react-icons/fa';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    EPIC <FaFirstdraft />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <FaTimes style={{ color: '#fff' }} /> : <FaBars style={{ color: '#fff' }} />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                            to='/services'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Services <FaCaretDown className='caretdown' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/contact-us'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/sign-up'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </>
    );
}

export default Navbar;