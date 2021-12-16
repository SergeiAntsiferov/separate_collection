import React, { useContext } from 'react';
import './recievePoint.css'
import Button from '../Button/Button';
import classes from '../Button/button.module.css'
import { AuthContext } from '../../Routing & Context/AuthContext/AuthContext';


const RecievePoint = (props) => {
    const {image, address, workingHours, category} = props;
    // const  {paper, glass, tin, aluminum, pet, pnd, lamps, batteries} = category

    // const categoryList = category.reduce((acc, item) => {
    //     if (item.value) {
    //         return acc + `${item.key}`
    //     } else {
    //         return 'error'
    //     }
        
    // }, '')

    const {isAuth} = useContext(AuthContext)
        return (
        <div className="recievePoint">
            <img  className="recievePoint__image" src={image} alt="recievePointPhoto" />
            <h3 className="recievePoint__title">{address}</h3>
            <p className="recievePoint__paragraph">Время работы: {workingHours}</p>
            <p className="recievePoint__paragraph">Что принимается:</p>
            <p className="recievePoint__paragraph">{category}</p>
            {isAuth && <Button className={classes['wide-button']}>Удалить</Button>}

        </div>
    );
};

export default RecievePoint;