import React from 'react';
import './header.css';
import {Link} from "react-router-dom";
import Logo from '../Logo/Logo';
import Button from '../Button/Button';


const Header = () => {
    
 
        return (
            <header className="header">
                <Logo/>
                <Link className="header__link" to="/">Главная</Link>
                <Link className="header__link" to="/points">Пункты приёма</Link>
                <Link className="header__link" to="/about">О нас</Link>
                <Link className="header__link" to="/login"><Button >Войти</Button></Link>
            </header>
        );
    }


export default Header;