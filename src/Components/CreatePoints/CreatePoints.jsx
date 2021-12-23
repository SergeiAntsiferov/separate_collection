import React, { useContext, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import classes from '../../Components/Button/button.module.css'
import Button from '../Button/Button';
import { AppContext } from '../../App';
import './CreatePoints.css'


const CreatePoints = () => {
    
    const {isVisible, setIsVisible, points, setPoints} = useContext(AppContext);
    const [address, setAddress] = useState('');
    const [workingHours, setWorkingHours] = useState('');

    //Функция создания нового пункта сбора отходов
    const createPoint = (category) => {
        const newPoint = {
            // image: '',
            address: `${address}`,
            workingHours: `${workingHours}`,
            category: `${category}`
        }

        //setPoint обновляет отображаемый список 
        setPoints([...points, newPoint])
        localStorage.setItem('points', JSON.stringify([...points, newPoint]))
        setAddress('')
        setWorkingHours('')
    };


    const close = () => {
        setIsVisible(null)
    };

    //Условие отображения компонента
    if (!isVisible) {
        return null
    }

    return (
        <div className="createPoints">
            {/* <h2 className="createPoints__title">Создать</h2> */}
            <Formik
                initialValues={{
                    category: []
                }}
                onSubmit={(values) => {
                (JSON.stringify(values));
                createPoint(values.category)
                }} 
            >
            {() => (
                <Form>
                    <div className="createPoints__input-group">
                        {/* <label htmlFor="address">Адрес</label> */}
                        <input className="input createPoints__input" 
                            id="address" 
                            type="text" 
                            placeholder="Адрес" 
                            value={address}
                            onChange={(e) => {setAddress(e.target.value)}}/>
                        {/* <label htmlFor="workingHours">Режим работы</label> */}
                        <input className="input createPoints__input"
                            id="workingHours" 
                            type="text" 
                            placeholder="Режим работы"
                            value={workingHours}
                            onChange={(e) => {setWorkingHours(e.target.value)}}/>
                    </div>
                    <h4 className="createPoints__subtitle" id="checkbox-group">Что принимается:</h4>
                    <div className="createPoints__checkbox-group" role="group" aria-labelledby="checkbox-group">
                        <label><Field type="checkbox" name="category" value=" бумага"/> Бумага</label>
                        <label><Field type="checkbox" name="category" value=" стекло" /> Стекло</label>
                        <label><Field type="checkbox" name="category" value=" жесть" /> Жесть</label>
                        <label><Field type="checkbox" name="category" value=" алюминий" /> Алюминий</label>
                        <label><Field type="checkbox" name="category" value=" ПЭТ-пластик" /> ПЭТ-пластик</label>
                        <label><Field type="checkbox" name="category" value=" ПНД-пластик" /> ПНД-пластик</label>
                        <label><Field type="checkbox" name="category" value=" батарейки" /> Батарейки</label>
                        <label><Field type="checkbox" name="category" value=" лампы" /> Лампы</label>
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
