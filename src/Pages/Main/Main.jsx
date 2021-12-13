import React from 'react';
import './main.css';
import {garbageCategories} from '../../databases/garbageCategories';
import GarbageCard from '../../Components/GarbageCard/GarbageCard';


const Main = () => {
    return (
        <>    
            <div className="main">
            <h1 className="main__title">Категории сортируемого мусора</h1>
                {garbageCategories.map((item) => {
                    return (
                        <GarbageCard
                        title = {item.title}
                        image = {item.image}
                        name = {item.name}
                        description ={ item.description} 
                        key = {item.title}
                        />)
                    })
                }
            </div>
        </>    
    );
};

export default Main;