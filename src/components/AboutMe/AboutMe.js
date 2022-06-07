import React from "react"; 
import './AboutMe.css'; 

function AboutMe () { 
    
    return (
    <div className="about-me">
        <div className="title-container">
            <h2>Студент</h2>
        </div>
        <div className="about-me__info-container">
            <div className="about-me__info">
                <h3 className="about-me__name">Анастасия</h3>
                <span className="about-me__job">Фронтенд-разработчик, 25 лет</span>
                <p className="about-me__text">
                    Я живу в Польше, в Варшаве. Закончила факультет международных отношений СПбГУ. Несколько лет работала копирайтером и SMM специалистом. Недавно начала кодить. Прошла курс веб-разработчика от Яндекс.Практикум и сейчас ищу
                    работу на позицию junior web-developer. Увлекаюсь фотографией и танцами.
                </p>
                <div className="about-me__links">
                    <a className="about-me__link" href="https://www.facebook.com/miss.iuferova" target="_blank" rel="noreferrer">Facebook</a>
                    <a className="about-me__link" href="https://github.com/AnastasiiaUferova" target="_blank" rel="noreferrer">Github</a>
                </div>
            </div>
            <div className="about-me__pic"></div>
        </div>
    </div>
    ) 
} 

export default AboutMe;