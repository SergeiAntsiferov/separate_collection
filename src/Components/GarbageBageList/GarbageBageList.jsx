import React from 'react';
import { garbageCategories } from '../../databases/garbageCategories';
import GarbageBage from './GarbageBage/GarbageBage';
import './GarbageBageList.scss'

const GarbageBageList = () => {

    return (
        <div className="garbage-bage-list">
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
        </div>
    );
};

export default GarbageBageList;