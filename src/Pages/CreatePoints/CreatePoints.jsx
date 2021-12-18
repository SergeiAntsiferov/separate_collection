import React, { useContext, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import Button from '../../Components/Button/Button';
import classes from '../../Components/Button/button.module.css'
import './CreatePoints.css'
import {customAlphabet} from "nanoid";
import { AuthContext } from '../../Routing & Context/AuthContext/AuthContext';
const nanoid = customAlphabet('1234567890', 10)


const CreatePoints = (props) => {

    const {isVisible, setIsVisible} = useContext(AuthContext)

    const {points, setPoints} = props;
    
    const [address, setAddress] = useState('')
    const [workingHours, setWorkingHours] = useState('')

    const createPoint = (category) => {
        const newPoint = {
            // image: '',
            id: Number(nanoid()),
            address: `${address}`,
            workingHours: `${workingHours}`,
            category: `${category}`
        }
        setPoints(prevState => [...prevState, newPoint])
        setAddress('')
        setWorkingHours('')
        console.log(points)
    }

    const close = () => {
        setIsVisible(null)
    }

    if (!isVisible) {
        return null
    }

    return (
        <div className="createPoints">
            <h2 className="createPoints__title">Create</h2>
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
                    <Button onClick={close}>закрыть</Button>
                    <div className="createPoints__input-group">
                        <label htmlFor="address">Адрес</label>
                        <input id="address" 
                            type="text" 
                            className="createPoints__input" 
                            placeholder="Адрес" 
                            value={address}
                            onChange={(e) => {setAddress(e.target.value)}}/>
                        <label htmlFor="workingHours">Режим работы</label>
                        <input id="workingHours" type="text" 
                            className="createPoints__input"
                            placeholder="Режим работы"
                            value={workingHours}
                            onChange={(e) => {setWorkingHours(e.target.value)}}/>
                    </div>
                    <h4 id="checkbox-group">Типы мусора</h4>
                    <div role="group" aria-labelledby="checkbox-group" className="createPoints__checkbox-group">
                        <label><Field type="checkbox" name="category" value=" Бумага"/> Бумага</label>
                        <label><Field type="checkbox" name="category" value=" Стекло" /> Стекло</label>
                        <label><Field type="checkbox" name="category" value=" Жесть" /> Жесть</label>
                        <label><Field type="checkbox" name="category" value=" Алюминий" /> Алюминий</label>
                        <label><Field type="checkbox" name="category" value=" ПЭТ-пластик" /> ПЭТ-пластик</label>
                        <label><Field type="checkbox" name="category" value=" ПНД-пластик" /> ПНД-пластик</label>
                        <label><Field type="checkbox" name="category" value=" Батарейки" /> Батарейки</label>
                        <label><Field type="checkbox" name="category" value=" Лампы" /> Лампы</label>
                    </div>
                    <Button type="submit" className={classes.button}>Создать</Button>
                </Form>
            )}
            </Formik>
        </div>
        
    );
};

export default CreatePoints;
