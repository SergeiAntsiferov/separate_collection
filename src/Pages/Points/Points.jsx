import React, { useContext } from 'react';
import { AuthContext } from '../../Routing & Context/AuthContext/AuthContext';
import Button from '../../Components/Button/Button';
import GarbageBage from '../../Components/GarbageBage/GarbageBage';
import {garbageCategories} from '../../databases/garbageCategories';
import classes from '../../Components/Button/button.module.css'
import './points.css'
import RecievePointList from '../../Components/RecievePointList/RecievePointList';

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
            <RecievePointList/>
            {isAuth && <Button className={classes['wide-button']}>Добавить пункт приёма</Button>}
            </div>   
    );
};

export default Points;


