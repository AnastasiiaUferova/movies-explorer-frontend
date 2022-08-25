import React from "react";
import './Techs.css'

function Techs () {
    return (
        <div className="techs">
        <div className="title-container">
            <h2>Technologies</h2>
        </div>
        <div className="techs__info">
            <h3 className="techs__info-title">7 Technologies</h3>
            <p className="techs__info-text">On the web development course, we mastered the technologies that we used in the graduation project.</p>
        </div>
    
        <div className="techs__grid-container">
            <div className="techs__grid">
                <div className="techs__grid-item">
                    <p className="techs__grid-text">HTML</p>
                </div>
    
                <div className="techs__grid-item">
                    <p className="techs__grid-text">CSS</p>
                </div>
    
                <div className="techs__grid-item">
                    <p className="techs__grid-text">JS</p>
                </div>
    
                <div className="techs__grid-item">
                    <p className="techs__grid-text">React.js</p>
                </div>
    
                <div className="techs__grid-item">
                    <p className="techs__grid-text">Git</p>
                </div>
    
                <div className="techs__grid-item">
                    <p className="techs__grid-text">Express.js</p>
                </div>
    
                <div className="techs__grid-item">
                    <p className="techs__grid-text">mongoDB</p>
                </div>
            </div>
        </div>
    </div>
        )
}

export default Techs;
