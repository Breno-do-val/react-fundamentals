import React from 'react';

export default ({ handleClick }) => {
    const generateAge = () => parseInt(Math.random() * 20 + 50);
    return (
        <div>
            <div>
                Child
            </div>
            <button onClick={_ => handleClick('Breno', generateAge(), true)}>Supply Info</button>
        </div>
    )
}