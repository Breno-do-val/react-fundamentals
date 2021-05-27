import './Card.css';

import React from 'react';

export default props => {
    return (
        <div className="Card">
            <div className="Title">{ props.title }</div>
            <div className="Content">{ props.children }</div>
        </div>
    );
}