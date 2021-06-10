import React from 'react';

export default props => {
    return (
        <div>
            <div>
                Child
            </div>
            <button onClick={e => props.handleClick('Breno', 34, true)}>Supply Info</button>
        </div>
    )
}