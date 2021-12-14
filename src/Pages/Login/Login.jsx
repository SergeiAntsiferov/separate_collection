import React from 'react';
import './Login.css';
import Button from '../../Components/Button/Button';  
import classes from'../../Components/Button//button.module.css'




const Login = () => {
    return (
        <form className="form">
            <div className="form__wrapper">
                <h1 className='form__title'>Авторизация</h1>
                {/* <label className="form__input-label" for='email'>Email</label> */}
                <input className="form__input" type="email" id='email' placeholder='Введите ваш email ' required/>
                {/* <label className="form__input-label" for='password'>Пароль</label> */}
                <input className="form__input" type="password" id='password' placeholder='Введите ваш пароль' required/>
                <Button className={classes.wideButton}>Войти</Button>
            </div>
        </form>
    );
};

export default Login;