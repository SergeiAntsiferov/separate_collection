import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './Routing/AppRouter/AppRouter';
import { useEffect, useState } from 'react';
import { createContext } from "react";
import { recievePoints } from './databases/recievePoints';
import {customAlphabet} from "nanoid";

//Добавил контекст в приложение
export const AppContext = createContext (null); 
// Бибилиотека  nanoid для генерации уникальных ключей для итерируемых объектов
const nanoid = customAlphabet('1234567890', 10) 

function App() {

  
  const [isAuth, setIsAuth] = useState(false);  //значение авторизации
  const [isVisible, setIsVisible] = useState(false) //значение видимости
  const [points, setPoints] = useState([]) //Контроль изменений в массиве recievePoints
  
  //Обновление массива при рендере
  useEffect (() => {
    if (!localStorage.getItem('points')) {
      // console.log('1')
       localStorage.setItem('points', JSON.stringify(recievePoints))
      // setPoints(notExist)
      
    } else {     
      const points = JSON.parse(localStorage.getItem('points'))
      setPoints(points)
      console.log(points)

    }
  }, [])


  //Проверка наличия значения авторизации в localStorage при каждом рендере
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
  
  //В контексте хранятся функции для доступа к ним из других элементов реакта
  const context = {
    isAuth, setIsAuth,
    login, logout, 
    isVisible, setIsVisible,
    points, setPoints,
    nanoid}

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
