import React from 'react';
import './recievePoint.css'
import Button from '../Button/Button';
import classes from '../Button/button.module.css'


const RecievePoint = (props) => {
    const {image, address, workingHours, category} = props;
        return (
        <div className="recievePoint">
            <img  className="recievePoint__image" src={image} alt="recievePointPhoto" />
            <h3 className="recievePoint__title">{address}</h3>
            <p className="recievePoint__paragraph">Время работы: {workingHours}</p>
            <p className="recievePoint__paragraph">Что принимается:</p>
            <p className="recievePoint__paragraph">{category}</p>
            <Button className={classes.wideButton}>Удалить</Button>
            <Button className={classes.wideButton}>Редактировать</Button>

        </div>
    );
};

export default RecievePoint;