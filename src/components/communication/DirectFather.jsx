import React from 'react';
import DirectChild from './DirectChild';


export default props => {
    return (
        <div>
            <DirectChild text="Child One" number={20} bool={true} />
            <DirectChild text="Child Two" number={17} bool={false} />
        </div>
    )
}