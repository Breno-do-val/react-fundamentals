import React from 'react';

export default props => {
    const { min, max } = props;
    let randomNumber = parseInt(Math.random() * (max - min)) + min;
    
    return (
        <div>
            { randomNumber }
        </div>
    );
}