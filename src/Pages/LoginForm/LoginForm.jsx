import React from 'react';
import './LoginForm.css';
// import Header from '././Components/Header/Header';


const LoginForm = () => {
    return (
        <form className="form">
            <div className='form__block'>
                <div className="form__wrapper">
                    <h1 className='form__title'>Авторизация</h1>
                    {/* <label className="form__input-label" for='email'>Email</label> */}
                    <input className="form__input" type="email" id='email' placeholder='Введите ваш email ' required/>
                    {/* <label className="form__input-label" for='password'>Пароль</label> */}
                    <input className="form__input" type="password" id='password' placeholder='Введите ваш пароль' required/>
                    <button className="button form__button" type="submit">Войти</button>
                    <button className="button form__button" type="submit">Создать аккаунт</button>
                </div>
                <div className='form__side-picture'></div>
            </div>
        </form>
    );
};

export default LoginForm;