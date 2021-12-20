import React from 'react';
import { useParams } from 'react-router-dom';
import CardDescription from '../../Components/CardDescription/CardDescription';
import { cardDescriptions } from '../../databases/cardDescriptions';


const CardPage = () => {

    //Используем значение из адресной строки для динамической маршрутизации
    const {name} = useParams()

    const page = cardDescriptions.find((item) => item.name === name)

    if (!page) {
        return <p>
            {`Так делать не нужно, страницы ${name} не существует`}
        </p>
    }

    return (
        <div>
            <CardDescription
                title={page.title}
                description={page.description} 
                prepare={page.prepare}
                accepted={page.accepted} 
                notAccepted={page.notAccepted}
            />
        </div>
    );
};

export default CardPage;