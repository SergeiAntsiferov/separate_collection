import React, { useContext, useState } from 'react';
import './Login.css';
import Button from '../../Components/Button/Button';  
import classes from'../../Components/Button//button.module.css'
import {users} from '../../databases/users'
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../App';

const Login = () => {

    const history = useHistory();

    //Хуки для управления input
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    //Забрал функцию логина из контекста
    const {login} = useContext(AppContext )
    
    //Валидация формы
    function submitForm(event) {
        event.preventDefault()
        if (getCurrentUser) {
            login();
            history.push('/')
        } else {
            alert ('Нет такого пользователя')
        }
    }

    // const getCurrentUserFromLS = () => {
    //     if ((localStorage.getItem(`${email}`) !== null) && (localStorage.getItem(`${email}`) === `${password}`)) {
    //     console.log('true')
    //     return;
    // } else {
    //     console.log('false');
    //     }
    // }
    
    //Поиск введённых данных в массиве
    const getCurrentUser = users.find((user) => 
    (user.email === email && user.password === password)) //|| (getCurrentUserFromLS)


    // //Добавление дового пользователя
    // function addNewUser(event) {
    //     event.preventDefault()
    //     if (!getCurrentUser && email && password) {
    //         //добавил пользователя в localStorage
    //         localStorage.setItem(`${email}`, `${password}`)
    //     } else if (!email || !password) {
    //     alert ('Введите данные')
    //     } else { 
    //     alert ('Пользователь с таким именем уже существует')
    //     }
    // }

    return (
        <form className="form">
            <div className="form__wrapper">
                <h1 className='form__title'>Авторизация</h1>
                <input  className="form__input" 
                        type="email" 
                        id='email' 
                        placeholder='Введите ваш email' 
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}/>
                <input  className="form__input" 
                        type="password" 
                        id='password' 
                        placeholder='Введите ваш пароль' 
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}/>
                <Button className={classes['wide-button']} type="submit" onClick={submitForm}>Войти</Button>
                {/* <Button className={classes['wide-button']} type="submit" onClick={addNewUser}>Cоздать аккаунт</Button> */}
            </div>
        </form>
    );
};

export default Login;