import React from 'react';
import { useParams } from 'react-router-dom';
// import { garbageCategories } from '../../databases/garbageCategories';


const CardPage = () => {
    const {name} = useParams()
    console.log(name)

    return (
        <div>
            <h1>{`CardPage ${name}`}</h1>
        </div>
    );
};

export default CardPage;