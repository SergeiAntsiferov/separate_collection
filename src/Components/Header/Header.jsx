import React, { useContext } from 'react';
import './header.css';
import {Link} from "react-router-dom";
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import { AppContext } from '../../App';


const Header = () => {
    const {isAuth, logout} = useContext(AppContext )
 
        return (
            <header className="header">
                <Link className="header__link" to="/"><Logo/></Link>
                <Link className="header__link" to="/points">Пункты приёма</Link>
                <Link className="header__link" to="/about">О нас</Link>
                <Link className="header__link" to="/login">
                    {!isAuth && <Button>Войти</Button>}
                    {isAuth && <Button onClick={logout}>Выйти</Button>}
                </Link>
            </header>
        );
    }


export default Header;