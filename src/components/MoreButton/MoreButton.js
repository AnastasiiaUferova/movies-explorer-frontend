import React from "react";
import './MoreButton.css'


function MoreButton ({handleRender}) {

    return (
        <div className="card-list__more">
            <button onClick={handleRender} className="card-list__more-button">Load more</button>
        </div>
        )
}

export default MoreButton;
