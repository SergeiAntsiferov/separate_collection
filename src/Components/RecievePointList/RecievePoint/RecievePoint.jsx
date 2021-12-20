import React, { useContext } from 'react';
import './recievePoint.css'
import Button from '../../Button/Button';
import classes from '../../Button/button.module.css'
import { AppContext } from '../../../App';


const RecievePoint = (props) => {

    const {address, workingHours, category} = props;
    const {isAuth, points, setPoints} = useContext(AppContext);
    
    //Функция удаления пунктов
    function deletePoint() {
        const result = points.filter((item) => item.address !== address )
        return (
            setPoints(result),
            localStorage.setItem('points', JSON.stringify(result))
     
            
            )
        }


        return (
        <div className="recievePoint">
            {/* <img  className="recievePoint__image" src={image} alt="recievePointPhoto" /> */}
            <h3 className="recievePoint__title">{address}</h3>
            <p className="recievePoint__paragraph">Время работы: {workingHours}</p>
            <p className="recievePoint__paragraph">Что принимается:</p>
            <p className="recievePoint__paragraph">{category}</p>
            {isAuth && <Button className={classes['wide-button']} onClick={deletePoint}>Удалить</Button>}

        </div>
    );
};

export default RecievePoint;