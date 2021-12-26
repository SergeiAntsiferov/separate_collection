import React, { useContext } from 'react';
import Button from '../../Components/Button/Button';
import classes from '../../Components/Button/button.module.scss'
import RecievePointList from '../../Components/RecievePointList/RecievePointList';
import GarbageBageList from '../../Components/GarbageBageList/GarbageBageList';
import { AppContext } from '../../utils/AppContext';
import './points.scss'

const Points = () => {
    
    const {isAuth, setIsVisible, setPoints} = useContext(AppContext)
    const addNewPoint = () => {
        setIsVisible(true)
    }

    const resetFilter = () => {
        const showAll = JSON.parse(localStorage.getItem('points'))
        setPoints(showAll)
    }

    return (
        <div className="points">
            <h1 className="points__title">Пункты приёма</h1>
            <GarbageBageList/>
            <div className="points__wrapper">
                {isAuth && <Button className={classes['wide-button']} onClick={addNewPoint}>Добавить пункт</Button>}
                <Button className={classes['wide-button']} onClick={resetFilter}>Сбросить фильтр</Button>
            </div>
            <RecievePointList/>
        </div>   
    );
};

export default Points;


