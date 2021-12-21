import React from 'react';
import GarbageCardList from '../../Components/GarbageCardList/GarbageCardList';
import './main.css';

const Main = () => {
    return (
        <div className="main">
            <div className="main__banner">
                <h1 className="main__title">Переходите к сортировке отходов вместе с нами</h1>
                <img className="main__logo" src="../../../../planet.svg" alt="planet" />
            </div>
            <h2 className="main__subtitle">Категории сортируемых отходов</h2>
            <GarbageCardList/>       
        </div>
    );
};

export default Main;