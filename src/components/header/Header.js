
import './Header.css';
import React from 'react';
import Navbar from './NavigationMenu'
import Logo from './Logo'; // Import the Logo component

function Header() {
    return (
        <div className='site-header'>
            <Logo />
            <Navbar />
        </div>
    );
}

export default Header;

