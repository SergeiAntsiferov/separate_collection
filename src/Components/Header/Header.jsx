import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import { AppContext } from '../../utils/AppContext';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import './header.scss';


const Header = () => {

    const {isAuth, logout} = useContext(AppContext )
 
    return (
        <header className="header">
            <Link className="header__link" to="/"><Logo/></Link>
            <Link className="header__link" to="/points">Пункты приёма</Link>
            <Link className="header__link" to="/about">О нас</Link>
            <Link className="header__link" to="/login" id="login">
                {!isAuth ? <Button>Войти</Button> : <Button onClick={logout}>Выйти</Button>}
            </Link>
        </header>
    );
}


export default Header;