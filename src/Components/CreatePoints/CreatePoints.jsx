import React, { useContext, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import classes from '../../Components/Button/button.module.scss'
import Button from '../Button/Button';
import { AppContext } from '../../utils/AppContext';
import './CreatePoints.scss'
import { garbageCategories } from '../../databases/garbageCategories';
import { nanoid } from '../../utils/nanoid';


const CreatePoints = () => {
    
    const {isVisible, setIsVisible, points, setPoints} = useContext(AppContext);
    const [address, setAddress] = useState('');
    const [workingHours, setWorkingHours] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [coords, setCoords] = useState([]);

    //Функция создания нового пункта сбора отходов
    const createPoint = (category) => {
        const newPoint = {
            address: `${address}`,
            category: `${category}`,
            coordinates: coords,
            workingHours: `${workingHours}`
        }
        setAddress('')
        setWorkingHours('')
        setPoints([...points, newPoint])
        localStorage.setItem('points', JSON.stringify([...points, newPoint]))
    };

    //Обработчик данных fetch-запроса
    const handleOnChangeInput = (event) => {
        setAddress(event.target.value)
        fetch ('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        "Accept": "application/json", 
                        "Authorization": "Token 8f52fb7d9ed85c58845925f4986970548ee70475" }, 
            body: JSON.stringify({ "query": event.target.value })
        }).then(response => {response.json()
            .then(result => {
                setSuggestions(result.suggestions)
            })
        })
    }

    //Обработчик результатов формы
    const formHandler = (values) => {
        (JSON.stringify(values));
        createPoint(values.category)
    }

    const close = () => {
        setIsVisible(null)
    };
    
    //Условие отображения компонента
    if (!isVisible) {
        return null
    }

    return (
        <div className="create-points">
            <Formik
                initialValues={{category: []}}
                onSubmit={formHandler}>
            {() => (
                <Form className="create-points__form">
                    <div className="create-points__input-group">
                        <div className="create-points__search-wrapper">
                            <input className="input create-points__input" 
                                id="address" 
                                type="text" 
                                placeholder="Адрес" 
                                value={address}
                                onChange={handleOnChangeInput}/>
                            <div className="create-points__search-results">
                                {suggestions.map((item) => {
                                    return (
                                        <div  key = {Number(nanoid())} onClick={() => {
                                            setAddress(item.value)
                                            setCoords([item.data.geo_lat, item.data.geo_lon])
                                        }}>
                                            {item.value}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <input className="input create-points__input"
                            id="workingHours" 
                            type="text" 
                            placeholder="Режим работы"
                            value={workingHours}
                            onChange={(e) => {setWorkingHours(e.target.value)}}/>
                    </div>
                    <h4 className="create-points__subtitle">Что принимается:</h4>
                    <div className="create-points__checkbox-group" role="group" aria-labelledby="checkbox-group">
                        {garbageCategories.map((item) => {
                            return (
                                <label key = {Number(nanoid())}>
                                    <Field
                                        key = {Number(nanoid())}
                                        type = "checkbox"
                                        name = "category"
                                        value = {((item.title).toLowerCase())} 
                                        /> {item.title}
                                </label>
                            )
                        })}
                    </div>
                    <Button type="submit" className={classes.button}>cоздать</Button>
                    <Button className={classes.button} onClick={close}>закрыть</Button>
                </Form>
            )}
            </Formik>
        </div>
    );
};

export default CreatePoints;
