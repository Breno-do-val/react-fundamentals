import React from 'react';

export default function WithParameters(props) {
    const status = props.grade > 7 ? 'Approved' : 'Reproved';

    return (
        <div>
            <h2>{ props.name }</h2>
            <h3>{ props.grade } - { status }</h3>
        </div>
    );
}