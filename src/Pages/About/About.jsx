import React from 'react';
import './about.scss'

const About = () => {
    return (
        <div className="about">
            <h1 className="about__title">Be Eco</h1>
            <div className="about__description">
                <p>Проект представляет собой сайт, посвященный раздельному сбору мусора.</p>
                <p>Основной целью является информирование пользователей:</p>
                <ul>
                    <li> о типах сортируемого мусора;</li>
                    <li> о пунктах приёма.</li>
                </ul>
            </div>
        </div>

    )
};

export default About;