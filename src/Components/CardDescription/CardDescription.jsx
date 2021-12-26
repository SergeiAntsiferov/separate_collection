import React from 'react';
import './cardDescription.scss'

const CardDescription = (props) => {
    const {title, description, prepare, accepted, notAccepted} = props;

    return (
        <div className="card-description">
            <h1 className="card-description__title">{title}</h1>
            <div className="card-description__block-description">
                <h3 className="card-description__block-title">Описание</h3>
                <p className="card-description__block-text">{description}</p>
            </div>
            <div className="card-description__block-accepted">
                <h3 className="card-description__block-title">Что принимается</h3>
                <p className="card-description__block-text">{accepted}</p>
            </div>
            <div className="card-description__block-notAccepted">
                <h3 className="card-description__block-title">Что не принимается</h3>
                <p className="card-description__block-text">{notAccepted}</p>
            </div>
            <div className="card-description__block-prepare">
                <h3 className="card-description__block-title">Как подготовить</h3>
                <p className="card-description__block-text">{prepare}</p>
            </div>
        </div>
    );
};

export default CardDescription;
