import React from "react"; 
import './AboutMe.css'; 

function AboutMe () { 
    
    return (
    <div className="about-me">
        <div className="title-container">
            <h2>Student</h2>
        </div>
        <div className="about-me__info-container">
            <div className="about-me__info">
                <h3 className="about-me__name">Anastasiia</h3>
                <span className="about-me__job">Front-end developer, 25 years old</span>
                <p className="about-me__text">
                I live in Poland, in Warsaw. Graduated from the Faculty of International Relations of St. Petersburg State University. For several years, I worked as a copywriter and SMM specialist. Recently started coding. I took a web developer course from Yandex.Practicum and now I'm looking for 
                a job as a junior front-end developer. I am fond of photography and dancing.
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