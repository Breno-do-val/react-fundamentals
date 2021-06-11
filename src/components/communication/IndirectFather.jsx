import React from 'react';
import IndirectChildren from './IndirectChildren';

export default props => {

    // name age nerd
    function supplyInfo(name, age, nerd) {
        console.log(name, age, nerd);
    }

    return (
        <div>
            <div>
                Father
            </div>
            <IndirectChildren handleClick={supplyInfo}></IndirectChildren>
        </div>
    )
}