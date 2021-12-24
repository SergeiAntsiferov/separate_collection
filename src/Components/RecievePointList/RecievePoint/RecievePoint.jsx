import React, { useContext } from 'react';
import Button from '../../Button/Button';
import classes from '../../Button/button.module.scss'
import { AppContext } from '../../../utils/AppContext';
import './recievePoint.scss'
import { Link } from 'react-router-dom';


const RecievePoint = (props) => {

    const {address, workingHours, category, coordinates} = props;
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
            <h3 className="recievePoint__title">{address}</h3>
            <Link to={`/maps/${JSON.stringify(coordinates)}`}>Показать на карте</Link >
            <p className="recievePoint__paragraph">Время работы: {workingHours}</p>
            <h3 className="recievePoint__title">Что принимается:</h3>
            <p className="recievePoint__paragraph">{category}</p>
            {isAuth && <Button className={classes['wide-button']} onClick={deletePoint}>Удалить</Button>}
        </div>
    );
};

export default RecievePoint;