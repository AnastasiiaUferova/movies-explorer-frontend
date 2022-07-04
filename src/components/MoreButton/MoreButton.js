import React from "react";
import './MoreButton.css'


function MoreButton ({handleRender}) {

    return (
        <div className="card-list__more">
            <button onClick={handleRender} className="card-list__more-button">Ещё</button>
        </div>
        )
}

export default MoreButton;
