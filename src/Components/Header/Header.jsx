import React from 'react';
import './header.css';
import {Link} from "react-router-dom";



const Header = () => {
    
 
        return (
            <header className="header">
                <Link to="/">Главная</Link>
                <Link to="/points">Пункты приёма</Link>
                <Link to="/edit">Edit points</Link>
                <Link to="/login"><button className='header__button'>Войти</button></Link>
            </header>
        );
    }


export default Header;