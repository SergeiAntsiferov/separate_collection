import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../App';
import Button from '../../Components/Button/Button';  
import classes from'../../Components/Button//button.module.css'
import './Login.css';



const Login = () => {
    
    const history = useHistory() //Хук для возможности работы с историей
    const [email, setEmail] = useState('') //Хук для управления input
    const [password, setPassword] = useState('') //Хук для управления input
    const {login, usersLS, setUsersLS} = useContext(AppContext ) //Получение функций из контекста
    
    //Валидация формы
    function submitForm(event) {
        event.preventDefault()
        if (getCurrentUser) {
            return (
                login(),
                history.push('/')
            )
        } 
        alert ('Нет такого пользователя')
    }
        
    // Поиск введённых данных в массиве
    const getCurrentUser = usersLS.find((user) => (user.email === email && user.password === password))


    // //Добавление дового пользователя
    function addNewUser(event) {
        event.preventDefault()
        const newUser = {
            email: `${email}`,
            password: `${password}`
        }
        if (!getCurrentUser && email && password) {
            setUsersLS([...usersLS, newUser])
            localStorage.setItem('users', JSON.stringify([...usersLS, newUser]))
            setEmail('')
            setPassword('')
            alert('Добро пожаловать')
        } else if (!email || !password) {
            alert ('Введите данные')
        } else { 
            alert ('Пользователь с таким именем уже существует')
        }
    }

    return (
        <form className="form">
            <div className="form__wrapper">
                <h1 className='form__title'>Авторизация</h1>
                <input  className="input form__input" 
                    type="email" 
                    id='email' 
                    placeholder='Введите ваш email' 
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}/>
                <input  className="input form__input" 
                    type="password" 
                    id='password' 
                    placeholder='Введите ваш пароль' 
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}/>
                <Button className={classes['wide-button']} type="submit" onClick={submitForm}>Войти</Button>
                <Button className={classes['wide-button']} type="submit" onClick={addNewUser}>Cоздать аккаунт</Button>
            </div>
        </form>
    );
};

export default Login;