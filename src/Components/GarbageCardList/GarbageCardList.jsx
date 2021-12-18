import React from 'react';
import { garbageCategories } from '../../databases/garbageCategories';
import GarbageCard from './GarbageCard/GarbageCard';
import './GarbageCardList.css'



const GarbageCardList = () => {
    return (
        <div className="GarbageCardList">
            {garbageCategories.map((item) => {
                return (
                    <GarbageCard
                    title = {item.title}
                    image = {item.image}
                    name = {item.name}
                    description = {item.description} 
                    key = {item.title}
                    /> 
                    )
                })
            }
        </div>
    );
};

export default GarbageCardList;