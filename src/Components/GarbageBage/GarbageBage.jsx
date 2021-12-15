import React from 'react';
import './garbageBage.css';

const GarbageBage = (props) => {
    const {image, name} = props
    return (
        <div className="garbageBage">
            {/* <h3 className="garbageBage__title">{title}</h3> */}
           <img className="garbageBage__image" src={image} alt={name} />
        </div>
    );
};

export default GarbageBage;