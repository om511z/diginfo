import React from 'react';
import '../Assets/Css/LearnButton.css';

function LearnButton() {
    return (
        <div id="container">
            <button className="learn-more button">
                <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
            </button>
        </div>
    )
}

export { LearnButton };