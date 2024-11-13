import React from 'react';
import Bubble from './Bubble';

function BubbleEffect() {
    return (
        <div className="bubble-container">
            {Array.from({ length: 20 }).map((_, index) => (
                <Bubble key={index} />
            ))}
        </div>
    );
}

export default BubbleEffect;
