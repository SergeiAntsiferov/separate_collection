import React from 'react';
import { garbageCategories } from '../../databases/garbageCategories';
import GarbageCard from './GarbageCard/GarbageCard';
import './GarbageCardList.scss'



const GarbageCardList = () => {
    return (
        <div className="garbage-card-list">
            {garbageCategories.map((item) => {
                return (
                    <GarbageCard
                    key = {item.title}
                    title = {item.title}
                    image = {item.image}
                    name = {item.name}
                    description = {item.description} 
                    /> 
                )
            })}
        </div>
    );
};

export default GarbageCardList;