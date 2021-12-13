import React from 'react';
import { useParams } from 'react-router-dom';
import CardDescription from '../../Components/CardDescription/CardDescription';
import { cardDescriptions } from '../../databases/cardDescriptions';


const CardPage = () => {
    const {name} = useParams()

    const page = cardDescriptions.find((item) => item.name === name)
    console.log(page)

    if (!page) {
        return <div>
            {`Страницы ${name} не существует`}
        </div>
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