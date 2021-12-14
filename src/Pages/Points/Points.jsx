import React from 'react';
import GarbageBage from '../../Components/GarbageBage/GarbageBage';
import {garbageCategories} from '../../databases/garbageCategories';
import './points.css'

const Points = () => {
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
            </div>   
    );
};

export default Points;


