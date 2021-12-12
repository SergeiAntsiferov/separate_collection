import React from 'react';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './garbageCard.css';



const GarbageCard = (props) => {
    const {name, title, image, description} = props;

    return (

        <div className="card">
            <h2 className="card__title">{title}</h2>
            <img className="card__image" src={image} alt={name} />
            
            <p className="card__description">{description}</p>
            <button className="button card__button" type='button'>
                <Link to={`/card/${name}`}>more information</Link>
            </button>
        </div>
    );

};

export default GarbageCard;