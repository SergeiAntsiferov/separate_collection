import React, { useContext } from 'react';
import { AppContext } from '../../../App';
import './garbageBage.css';

const GarbageBage = (props) => {
    
    const {image, name, title} = props
    const {setPoints} = useContext(AppContext)

    const sorting = () => {
        const pointsFromLocalStorage = JSON.parse(localStorage.getItem('points'))
        const temporary = pointsFromLocalStorage.filter((item) =>  {
            if (item.category.toLowerCase().includes(title.toLowerCase())) {
            // если имя бейджа есть в категории объекта, возвращает объект
            return item
            // если нет - то не возвращает (спасибо,Кэп!)
            } return !item
        })

            return (
                // обновил список пунктов на странице в соответствии с фмльтром
                setPoints([...temporary])
            )
    }

    return (
        <div className="garbageBage" onClick={sorting}>
           <img className="garbageBage__image" src={image} alt={name} />
        </div>
    );
};

export default GarbageBage;