import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import classes from '../../Button/button.module.css'
import './garbageCard.css';



const GarbageCard = (props) => {
    //Деструктуризация пропсов
    const {name, title, image, description} = props;

    return (

        <div className="card">
            <h2 className="card__title">{title}</h2>
            <img className="card__image" src={image} alt={name} />
            <div className="card__wrapper">
                <p className="card__description">{description}</p>
                <Link to={`/card/${name}`}><Button className={classes['wide-button']}>Подробнее</Button></Link>
            </div>
        </div>
    );

};

export default GarbageCard;