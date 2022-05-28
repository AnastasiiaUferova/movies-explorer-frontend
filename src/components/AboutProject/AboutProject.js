import React from "react";
import './AboutProject.css'

function AboutProject () {
    return (
        <div className="about-project">
            <div className="about-project__title-container">
                <h2 className="about-project__title">О проекте</h2>
            </div>
            <div className="about-project__info-table">
                <div className="about-project__info-block">
                    <h3 className="about-project__info-title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__info">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__info-block">
                    <h3 className="about-project__info-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__info">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>

            <div className="about-project__time-table">
                <div className="about-project__time-block_back">
                    <div className="about-project__week-container_back">
                        <p className="about-project__week">1 неделя</p>
                    </div>
                    <div className="about-project__week-text-container">
                    <p className="about-project__week-text">Back-end</p>
                    </div>
                </div>
                <div className="about-project__time-block_front">
                    <div className="about-project__week-container_front">
                        <p className="about-project__week">4 недели</p>
                    </div>
                    <div className="about-project__week-text-container">
                    <p className="about-project__week-text">Front-end</p>
                    </div>
                </div>
            </div>
        </div>
        )

}

export default AboutProject;