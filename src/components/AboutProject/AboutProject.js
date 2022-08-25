import React from "react"; 
import './AboutProject.css' 

function AboutProject () { 
    
    return (
    
    <div className="about-project" id="about-project">
        <div className="title-container">
            <h2>About project</h2>
        </div>
        <div className="about-project__info-table">
            <div className="about-project__info-block">
                <h3 className="about-project__info-title">The diploma project included 5 stages</h3>
                <p className="about-project__info">Making a plan, working on the back-end part, layout, adding functionality and final improvements.</p>
            </div>
            <div className="about-project__info-block">
                <h3 className="about-project__info-title">It took 5 weeks to complete the project</h3>
                <p className="about-project__info">Each stage had a soft and hard deadline that had to be met in order to successfully complete the project.</p>
            </div>
        </div>
    
        <div className="about-project__time-table">
            <div className="about-project__time-block_back">
                <div className="about-project__week-container_back">
                    <p className="about-project__week">1 week</p>
                </div>
                <div className="about-project__week-text-container">
                    <p className="about-project__week-text">Back-end</p>
                </div>
            </div>
            <div className="about-project__time-block_front">
                <div className="about-project__week-container_front">
                    <p className="about-project__week">4 weeks</p>
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