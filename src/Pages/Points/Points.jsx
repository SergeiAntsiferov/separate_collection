import React, { useContext } from 'react';
import { AuthContext } from '../../Components/AuthContext/AuthContext';
import Button from '../../Components/Button/Button';
import GarbageBage from '../../Components/GarbageBage/GarbageBage';
import {garbageCategories} from '../../databases/garbageCategories';
import classes from '../../Components/Button/button.module.css'
import './points.css'
import RecievePoint from '../../Components/RecievePoint/RecievePoint';

const Points = () => {
    
    const {isAuth} = useContext(AuthContext)

    return (
        <div className="points">
            <h1 className="points__title">Пункты приёма</h1>
            {garbageCategories.map((item) => {
                return (
                    <GarbageBage
                    key = {item.title}
                    image = {item.image}
                    name = {item.name}
                    title = {item.title}
                    />)
                })
            }
            {isAuth && <Button className={classes.wideButton}>Добавить пункт приёма</Button>}
            <RecievePoint/>
            </div>   
    );
};

export default Points;


