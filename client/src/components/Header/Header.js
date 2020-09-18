import React from 'react';
import logo from './logo.svg';
import './Header.scss';

const Header = () => {
    return(
        <header className="Header">
            <img src={logo} alt="Colorblinder Logo"/>
        </header>
    )
}

export default Header;