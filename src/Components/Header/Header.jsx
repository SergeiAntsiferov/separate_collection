import React, { useContext } from 'react';
import './header.css';
import {Link} from "react-router-dom";
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import { AuthContext } from '../../Routing & Context/AuthContext/AuthContext';


const Header = () => {
    const {isAuth, logout} = useContext(AuthContext)
 
        return (
            <header className="header">
                <Link className="header__link" to="/"><Logo/></Link>
                <Link className="header__link" to="/points">Пункты приёма</Link>
                {/* <Link className="header__link" to="/create">Create</Link> */}
                <Link className="header__link" to="/about">О нас</Link>
                {!isAuth && <Link className="header__link" to="/login"><Button>Войти</Button></Link>}
                {isAuth && <Link className="header__link" to="/login"><Button onClick={logout}>Выйти</Button></Link>}
            </header>
        );
    }


export default Header;