import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import { AppContext } from '../../App';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import './header.css';


const Header = () => {

    const {isAuth, logout} = useContext(AppContext )
 
    return (
        <header className="header">
            <Link className="header__link" to="/"><Logo/></Link>
            <Link className="header__link" to="/points">Пункты приёма</Link>
            {/* <Link className="header__link" to="/maps">Карта</Link> */}
            <Link className="header__link" to="/about">О нас</Link>
            <Link className="header__link" to="/login">
                {!isAuth ? <Button>Войти</Button> : <Button onClick={logout}>Выйти</Button>}
            </Link>
        </header>
    );
}


export default Header;