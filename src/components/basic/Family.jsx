import React from 'react';

export default props => {

    return (
        <>
            {
                props.children.map((child, id) => {
                    return React.cloneElement(child, { ...props, key: id});
                })
            }
        </>
    );
}