import { useEffect, useState } from 'react';
import { createContext } from "react";
import { BrowserRouter } from 'react-router-dom'
import { recievePoints } from './databases/recievePoints';
import { users } from './databases/users';
import AppRouter from './Routing/AppRouter/AppRouter';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {customAlphabet} from "nanoid";
import './App.css';

//Добавление контекста в приложение
export const AppContext = createContext (null); 
// Бибилиотека  nanoid для генерации уникальных ключей для итерируемых объектов
const nanoid = customAlphabet('1234567890', 10) 

function App() {

  const [isAuth, setIsAuth] = useState(false);  //значение авторизации
  const [isVisible, setIsVisible] = useState(false) //значение видимости
  const [points, setPoints] = useState([]) //Контроль изменений в массиве recievePoints
  const [usersLS, setUsersLS] = useState([]) //Контроль изменений в массиве usersLS
  
  //Обновление массива пунктов приёма при рендере
  useEffect (() => {
    if (!localStorage.getItem('points')) {
       localStorage.setItem('points', JSON.stringify(recievePoints))
      
    } else {     
      const points = JSON.parse(localStorage.getItem('points'))
      setPoints(points)
    }
  }, [])

  //Обновление массива пользователей при рендере
  useEffect (() => {
    if (!localStorage.getItem('users')) { 
       localStorage.setItem('users', JSON.stringify(users))
    } 
    const usersLS = JSON.parse(localStorage.getItem('users'))
    setUsersLS(usersLS)
  }, [])


  //Проверка наличия значения авторизации в localStorage при рендере
  useEffect (() => { 
    if (localStorage.getItem('isAuth')) {
      setIsAuth(true)
    }
  }, [])

  //Функция логина записывает значение в localStorage
  function login() { 
    setIsAuth(true)
    localStorage.setItem('isAuth', 'true');
  }

  //Функция логаута удаляет значение из localStorage
  function logout() {
    setIsAuth(false)
    localStorage.removeItem('isAuth')

  }
  
  //В контексте хранятся функции для доступа к ним из других элементов приложения
  const context = {
    isAuth, setIsAuth,
    login, logout, 
    isVisible, setIsVisible,
    points, setPoints,
    usersLS, setUsersLS,
    nanoid
  }

  return (
    <BrowserRouter>
      <AppContext.Provider value={context}>
        <Header/>
        <div className="app">
          <AppRouter/>
        </div>
        <Footer/>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
