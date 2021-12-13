import React from 'react';
import './cardDescription.css'

const CardDescription = (props) => {
    const {title, description, prepare, accepted, notAccepted} = props;

    return (
        <div className="CardDescription">
            <h1 className="CardDescription__title">{title}</h1>
            <div className="CardDescription__block-description">
                <h3 className="CardDescription__block-title">Описание</h3>
                <p className="CardDescription__block-text">{description}</p>
            </div>
            <div className="CardDescription__block-accepted">
                <h3 className="CardDescription__block-title">Что принимается</h3>
                <p className="CardDescription__block-text">{accepted}</p>
            </div>
            <div className="CardDescription__block-notAccepted">
                <h3 className="CardDescription__block-title">Что не принимается</h3>
                <p className="CardDescription__block-text">{notAccepted}</p>
            </div>
            <div className="CardDescription__block-prepare">
                <h3 className="CardDescription__block-title">Как подготовить</h3>
                <p className="CardDescription__block-text">{prepare}</p>
            </div>
        </div>
    );
};

export default CardDescription;
