import React, { useContext } from 'react';
import { AuthContext } from '../../Routing & Context/AuthContext/AuthContext';
import Button from '../../Components/Button/Button';
import classes from '../../Components/Button/button.module.css'
import './points.css'
import RecievePointList from '../../Components/RecievePointList/RecievePointList';
import GarbageBageList from '../../Components/GarbageBageList/GarbageBageList';

const Points = () => {
    
    const {isAuth, setIsVisible} = useContext(AuthContext)
    const addNewPoint = () => {
        setIsVisible(true)
    }

    return (
        <div className="points">
            <h1 className="points__title">Пункты приёма</h1>
            <GarbageBageList/>
            <RecievePointList/>
            {isAuth && <Button className={classes['wide-button']} onClick={addNewPoint}>Добавить пункт приёма</Button>}
            </div>   
    );
};

export default Points;


