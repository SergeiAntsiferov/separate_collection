import React, { useContext } from 'react';
import { garbageCategories } from '../../databases/garbageCategories';
import Button from '../Button/Button';
import GarbageBage from './GarbageBage/GarbageBage';
import classes from '../Button/button.module.css'
import { AppContext } from '../../App';
import './GarbageBageList.css'

const GarbageBageList = () => {


    const {setPoints} = useContext(AppContext)
    const resetFilter = () => {
        const showAll = JSON.parse(localStorage.getItem('points'))
        setPoints(showAll)
    }

    return (
        <div className="GarbageBageList">
            {garbageCategories.map((item) => {
                return (
                    <GarbageBage
                    key = {item.title}
                    image = {item.image}
                    name = {item.name}
                    title = {item.title}
                    />
                )
            })}
            <Button className={classes['wide-button']} onClick={resetFilter}>Сбросить фильтр</Button>
        </div>
    );
};

export default GarbageBageList;